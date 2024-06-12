import { useNavigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../api/axios';
import useLogout from "../hooks/useLogout";
import Loader from "./Loader";

import '../style/users_info.css';

import logo from "../assets/logo.png";

const UserInfo = () => {
    const navigate = useNavigate();
    const logout = useLogout();
    const [loggedIn, setLoggedIn] = useState(false);

    const signOut = async () => {
        await logout();
        setLoggedIn(false);
        navigate('/');
    }
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [birthday, setBirthday] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    
    const [problems, setProblems] = useState([]);
    const [message, setMessage] = useState("");
    const [fetching, setFetching] = useState(true);
    let { userID } = useParams();


    const INFO_URL = '/user/list/' + userID;

    const getUserInfo = async () => {
        axios.get(INFO_URL, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access"),
                'Content-Type': 'application/json',
            },
            withCredentials: true
        }).then((response) => {
            console.log(JSON.stringify(response.data));
            setName(response?.data.first.name);
            setSurname(response?.data.first.surname);
            setPatronymic(response?.data.first.patronymic);
            setBirthday(response?.data.first.birthday);
            setEmail(response?.data.first.email);
            setPhoneNum(response?.data.first.phoneNum);

            setProblems(response.data.second);
            setFetching(false)
            setMessage('')
        }).catch((err) => {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                setMessage('Catalog display Failed: ' + err?.response)
            } else if (err.request) {
                setMessage('No Server Response');
                console.log(err.request);
            } else {
                setMessage('Something went wrong');
                console.log('Error', err.message);
            }
            console.log(err.config);
        })
    }
    
    useEffect(() => {
        if (message === "" && problems.length < 1 && !fetching) {
            setMessage("No problems added yet");
        }
    }, [problems])

    useEffect(() => {
        if (localStorage.getItem("access")) {
            setLoggedIn(true);
        }
        setFetching(true);
        getUserInfo();
    }, [])

    return (
        <div class="flex-column">
    <main class="personal-info main">
        <section class="usersSection">
            <div class="flexRow">
                <img class="logoImage" src={logo} alt="alt text" />
                <div class="headerRow">
                    <div class="navigationRow">
                        <Link to="/"><h2 className="homeTitle">Главная</h2></Link>
                        <Link to="/profile"><h2 className="personalCabinetTitle">Личный кабинет</h2></Link>
                        <Link to="/catalog"><h2 className="catalogTitle">Каталог проблем</h2></Link>
                    </div>
                    <div class="authBox">
                    {loggedIn ? (
                        <button onClick={signOut}><h5 className="loginTitle">Выйти</h5></button>
                        ) : (
                <>
                    <Link to="/login"><h2 className="loginTitle">Войти</h2></Link>
                    <Link to="/register"><h2 className="loginTitle">Регистрация</h2></Link>
                </>
            )} 
                    </div>
                </div>
            </div>
            <div class="contentFlexRow">
                <div class="personalInfoColumn">
                    <div class="mainContentBox">
                        <h2 class="mainInfoTitle">Основное</h2>
                    </div>
                    <div class="personalDetailsFlexRow">
                        <div class="labelsColumn">
                            <h2 class="nameLabel">Имя</h2>
                            <h2 class="surnameLabel">Фамилия</h2>
                            <h2 class="middleNameLabel">Отчество</h2>
                            <h2 class="emailLabel">Почта</h2>
                            <h2 class="phoneLabel">Телефон</h2>
                            <h2 class="birthDateLabel">Дата рождения</h2>
                        </div>
                        <div class="valuesColumn">
                            <h2 class="nameValue">{name}</h2>
                            <h2 class="surnameValue">{surname}</h2>
                            <h2 class="middleNameValue">{patronymic}</h2>
                            <h2 class="emailValue">{email}</h2>
                            <h2 class="phoneValue">{phoneNum}</h2>
                            <h2 class="birthDateValue">{birthday}</h2>
                        </div>
                    </div>
                </div>
                <div class="problemsColumn">
                    <div class="problemsContentBox">
                        <h2 class="problemsTitle">Проблемы</h2>
                    </div>
                    <div class="problemsListColumn">
                        {fetching && !message ? (
                            <center>
                            <Loader />
                            </center>
                        ) : message ? (
                            <div className="Title">{message}</div>
                        ) : (
                            <ul>
                            {problems.map((result, i) => (
                                <li key={`item_${i}`} className="userRow">
                                    <h2 class="problem1Title">{result}</h2>
                                    {/* <Link to={"/admin/users/" + result["id"]}><button className="detailsButton">Подробнее</button></Link> */}
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>

    </main>
    <script type="text/javascript">
        AOS.init();
        new Sticky('.sticky-effect');
    </script>
</div>
    )};

export default UserInfo;
