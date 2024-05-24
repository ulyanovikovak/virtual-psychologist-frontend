
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import { Link } from "react-router-dom";

import React from 'react';

import '../profile.css';


const NAME_REGEX = /^[A-zА-я\ ]{1,100}$/;
const SURNAME_REGEX = /^[A-zА-я\ ]{1,100}$/;
const PATRONYMIC_REGEX = /^[A-zА-я\ ]{1,100}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/signup';

const Profile = () => {


    const emailRef = useRef();
    const errRef = useRef();


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

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


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
        setErrMsg('');
    }, [ surname, patronymic, name, birthday ])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v3 = NAME_REGEX.test(name);
        const v4 = PATRONYMIC_REGEX.test(patronymic);
        const v5 = SURNAME_REGEX.test(surname);
        if (!v3 || !v4 || !v5) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ name: name, surname: surname, patronymic: patronymic,
                    birthday: birthday}),
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
            //setEmail('');
            setName('');
            setSurname('');
            setPatronymic('');
            //setPhoneNum('');
            setBirthday('');
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
    <div className="flex-column">
      <div className="account3 testResultsSection">
        <div className="contentColumn">
          <div className="headerRow">
            <h2 className="sectionTitle">Результаты по пройденным тестам</h2>
            <button className="refreshButton">Обновить</button>
          </div>
          <div className="testContentBox">
            <div className="testColumnBox">
              <div className="testRow">
                <div className="testTitleColumn">
                  <h2 className="personalityDisordersTitle">Личностные расстройства</h2>
                  <h2 className="psychoticDisordersTitle">Психотические расстройства</h2>
                  <h2 className="neuroticDisordersTitle">Невротические расстройства</h2>
                  <h2 className="impulseControlDisordersTitle">Расстройства контроля импульсов</h2>
                  <h2 className="eatingDisordersTitle">Расстройства пищевого поведения</h2>
                  <h2 className="developmentalDisordersTitle">Расстройства, связанные с развитием</h2>
                  <h2 className="childhoodDisordersTitle">Расстройства, возникающие в детстве</h2>
                  <h2 className="substanceDisordersTitle">Зависимости и субстанцевые расстройства</h2>
                </div>
                <div className="actionButtonColumn">
                  <button className="viewButton1">Смотреть</button>
                  <button className="viewButton2">Смотреть</button>
                  <button className="viewButton2">Смотреть</button>
                  <button className="viewButton3">Смотреть</button>
                  <button className="viewButton4">Смотреть</button>
                  <button className="viewButton5">Смотреть</button>
                  <button className="viewButton3">Смотреть</button>
                  <button className="viewButton6">Смотреть</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="personalDataBox">
          <h2 className="personalDataTitle">Личные данные</h2>
        </div>
        <h2 className="personalAreaTitle">Личный кабинет/Тесты<br /></h2>
        <h2 className="homeTitle">Главная</h2>
        <img
          className="profileImage"
          src="/assets/bd0396c7dbd37de05525a7ee879bfcb9.png"
          alt="Profile"
        />
        <div className="userDataColumn">
          <div className="userDetailsBox">
            <div className="userDetailColumn">
              <h2 className="firstNameTitle">Имя</h2> 
                    <label htmlFor="name">
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
                    </label>
                    <input className="firstNameRect"
                        type="text"                            id="name"
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
                
                <h2 className="lastNameTitle">Фамилия</h2>

                <label htmlFor="surname">
                    <FontAwesomeIcon icon={faCheck} className={validSurname ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validSurname || !surname ? "hide" : "invalid"} />
                </label>
                <input className="lastNameRect"
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
                    <h2 className="middleNameTitle">Отчество</h2>
                        <label htmlFor="patronymic">
                            <FontAwesomeIcon icon={faCheck} className={validPatronymic ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPatronymic || !patronymic ? "hide" : "invalid"} />
                        </label>
                        <input className="middleNameRect"
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

              <h2 className="birthdateTitle">Дата рождения</h2>

              <label htmlFor="birthday">
                            <FontAwesomeIcon icon={faCheck} className={validBirthday? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validBirthday || !birthday ? "hide" : "invalid"} />
                        </label>
                        <input className="birthdateRect"
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

            </div>
          </div>
          <div className="contactInfoBox">
            <div className="contactInfoColumn">
              <h2 className="emailTitle">Почта<br /></h2>
              <div className="emailRect"></div>
              <h2 className="phoneNumberTitle">Номер телефона</h2>
              <div className="phoneNumberRect"></div>
              <h2 className="editInfoTitle">Изменить данные</h2>
            </div>
          </div>
        </div>
        <div className="footerRow">
          <h2 className="problemCatalogTitle">Каталог Проблем</h2>
          <h2 className="userTitle">Пользователь</h2>
        </div>
      </div>
      <script type="text/javascript">
        AOS.init();
        new Sticky('.sticky-effect');
      </script>
    </div>
  );
};

export default Profile;


