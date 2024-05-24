import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import { Link } from "react-router-dom";

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const NAME_REGEX = /^[A-zА-я\ ]{1,100}$/;
const SURNAME_REGEX = /^[A-zА-я\ ]{1,100}$/;
const PATRONYMIC_REGEX = /^[A-zА-я\ ]{1,100}$/;
const PHONENUM_REGEX = /^[0-9\ ]{11}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/signup';

const Register = () => {
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [birthday, setBirthday] = useState('');
    const [validBirthday, setValidBirthday] = useState(false);
    const [birthdayFocus, setBirthdayFocus] = useState(false);

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [surname, setSurname] = useState('');
    const [validSurname, setValidSurname] = useState(false);
    const [surnameFocus, setSurnameFocus] = useState(false);

    const [patronymic, setPatronymic] = useState('');
    const [validPatronymic, setValidPatronymic] = useState(false);
    const [patronymicFocus, setPatronymicFocus] = useState(false);

    const [phoneNum, setPhoneNum] = useState('');
    const [validPhoneNum, setValidPhoneNum] = useState(false);
    const [phoneNumFocus, setPhoneNumFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidName(NAME_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidPatronymic(PATRONYMIC_REGEX.test(patronymic));
    }, [patronymic])

    useEffect(() => {
        setValidSurname(SURNAME_REGEX.test(surname));
    }, [surname])

    useEffect(() => {
        setValidPhoneNum(PHONENUM_REGEX.test(phoneNum));
    }, [phoneNum])

    
    useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Сбросить время, чтобы сравнивать только даты
        const birthdayDate = new Date(birthday);
        
        if (birthdayDate < today) {
            setValidBirthday(true);
        } else {
            setValidBirthday(false);
        }
    }, [birthday]);


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [email, surname, patronymic, phoneNum, name, birthday, pwd, matchPwd ])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = NAME_REGEX.test(name);
        const v4 = PATRONYMIC_REGEX.test(patronymic);
        const v5 = SURNAME_REGEX.test(surname);
        const v6 = PHONENUM_REGEX.test(phoneNum);
        if (!v1 || (!v2 || !v3) || !v4 || !v5 || !v6) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ email: email, name: name, surname: surname, patronymic: patronymic,
                    birthday: birthday, password:pwd, phoneNum:phoneNum }),
                {
                    headers: { 
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                    withCredentials: true
                }
            );
        
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setEmail('');
            setName('');
            setSurname('');
            setPatronymic('');
            setPhoneNum('');
            setBirthday('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Успешно!</h1>
                    <p>
                        <Link to="/login">Войти</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Регистрация</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Почта:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            от 4 до 24 символов.<br />
                            Некоректная почта.<br />
                        </p>

                        <label htmlFor="name">
                            Имя:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="name"
                            //ref={nameRef}
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
                        />
                        <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            От 1 до 100 символов.<br />
                            Должно содержать только буквы.<br />
                        </p>


                        <label htmlFor="surname">
                            Фамилия:
                            <FontAwesomeIcon icon={faCheck} className={validSurname ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validSurname || !surname ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="surname"
                            //ref={nameRef}
                            autoComplete="off"
                            onChange={(e) => setSurname(e.target.value)}
                            value={surname}
                            required
                            aria-invalid={validSurname? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setSurnameFocus(true)}
                            onBlur={() => setSurnameFocus(false)}
                        />
                        <p id="uidnote" className={surnameFocus && surname && !validSurname ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            От 1 до 100 символов.<br />
                            Должно содержать только буквы.<br />
                        </p>


                        <label htmlFor="patronymic">
                            Отчество:
                            <FontAwesomeIcon icon={faCheck} className={validPatronymic ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPatronymic || !patronymic ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="patronymic"
                            //ref={nameRef}
                            autoComplete="off"
                            onChange={(e) => setPatronymic(e.target.value)}
                            value={patronymic}
                            required
                            aria-invalid={validPatronymic ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setPatronymicFocus(true)}
                            onBlur={() => setPatronymicFocus(false)}
                        />
                        <p id="uidnote" className={patronymicFocus && patronymic && !validPatronymic ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            От 1 до 100 символов.<br />
                            Должно содержать только буквы.<br />
                        </p>

                        <label htmlFor="phoneNum">
                            Номер телефона:
                            <FontAwesomeIcon icon={faCheck} className={validPhoneNum  ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPhoneNum  || !phoneNum ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="phoneNum"
                            //ref={nameRef}
                            autoComplete="off"
                            onChange={(e) => setPhoneNum(e.target.value)}
                            value={phoneNum}
                            required
                            aria-invalid={validPhoneNum ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setPhoneNumFocus(true)}
                            onBlur={() => setPhoneNumFocus(false)}
                        />
                        <p id="uidnote" className={phoneNumFocus && phoneNum && !validPhoneNum ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            используйте только цифры.<br />
                            номер телефона содержит 11 цифр.<br />
                        </p>


                        


                        <label htmlFor="birthday">
                            Дата рождения:
                            <FontAwesomeIcon icon={faCheck} className={validBirthday? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validBirthday || !birthday ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="date"
                            id="birthday"
                            //ref={nameRef}
                            autoComplete="off"
                            onChange={(e) => setBirthday(e.target.value)}
                            value={birthday}
                            required
                            aria-invalid={validBirthday ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setBirthdayFocus(true)}
                            onBlur={() => setBirthdayFocus(false)}
                        />
                        <p id="uidnote" className={birthdayFocus && birthday && !validBirthday ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Некоректная дата рождения<br />
                        </p>



                        <label htmlFor="password">
                            Пароль:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            От 8 до 24 символов.<br />
                            Пароль обязан содердать заглавные и строчние буквы, цифру и специальный символ.<br />
                            Разрешённые специальные символы: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Подтвердите пароль:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Пароли должны совпадать.
                        </p>

                        <button disabled={!validEmail || !validName || !validSurname || !validPatronymic || !validPhoneNum || !validPwd || !validMatch || !validBirthday ? true : false}>Зарегистрироваться</button>
                    </form>
                    <p>
                        Уже зарегистрированы?<br />
                        <span className="line">
                            <Link to="/">Войти</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register
