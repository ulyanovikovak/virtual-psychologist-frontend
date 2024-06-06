import { useState, useEffect } from "react";
import axios from '../api/axios';
import { useNavigate, Link, useParams } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import React from 'react';

import '../profile.css';
import logo from "../assets/logo.png"

const Problem = () => {
    const navigate = useNavigate();
    const logout = useLogout();
    const [loggedIn, setLoggedIn] = useState(false)
    let { problemID } = useParams();
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [test, setTest] = useState("");
    const [form, setForm] = useState("");
    const [errMsg, setErrMsg] = useState('');
    const [showLinks, setShowLinks] = useState(false);

    const PROBLEM_URL = '/problems/' + problemID;

    const signOut = async () => {
        await logout();
        setLoggedIn(false);
        navigate('/catalog');
    }

    const handleBuy = async () => {
        if (!loggedIn) {
            navigate('/login');
            return;
        }

        try {
            const response = await axios.put(PROBLEM_URL, {}, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("access"),
                },
                withCredentials: true
            });
            console.log(response.data);
            setShowLinks(true);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                setErrMsg('Ошибка при покупке: ' + err?.response);
            } else if (err.request) {
                setErrMsg('Нет ответа от сервера');
                console.log(err.request);
            } else {
                console.log('Ошибка', err.message);
            }
            console.log(err.config);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("access")) {
            setLoggedIn(true);
        }
        axios.get(PROBLEM_URL, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access"),
            },
            withCredentials: true
        }).then((response) => {
            console.log(JSON.stringify(response?.data));
            setName(response?.data.name);
            setAbout(response?.data.description);
            setTest(response?.data.testCaseLink);
            setForm(response?.data.formLink);
        }).catch((err) => {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                setErrMsg('Не удалось загрузить данные: ' + err?.response)
            } else if (err.request) {
                setErrMsg('Нет ответа от сервера');
                console.log(err.request);
            } else {
                console.log('Ошибка', err.message);
            }
            console.log(err.config);
        })
    }, [])

    return (
        <div className="flex-column">
            <main className="profile main">
                <section className="personalDataSection">
                    <div className="contentBox">
                        <h2 className="mediumTitle">{name}</h2>
                    </div>
                    <div className="flexRow">
                        <div className="flexCol">
                            <div className="contentBox1">
                                <div className="flexCol1">
                                    <div className="flexCol2">
                                        <p id="uidnote" className="instructions">
                                            {about}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {showLinks && (
                                <div className="contentBox1">
                                    <div className="flexRow1">
                                        <button className="changeDataTitle">
                                            <a href={test}>Пройти тест</a>
                                        </button>
                                        <button className="changeDataTitle">
                                            <a href={form}>Пройти форму</a>
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div className="contentBox1">
                                <div className="flexRow1">
                                    <button className="changeDataTitle" onClick={handleBuy}>
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navigationContentBox">
                        <div className="flexRow3">
                            <img className="image" src={logo} alt="alt text" />
                            <div className="flexRow4">
                                <Link to="/"><h2 className="navigationTitle">Главная</h2></Link>
                                <Link to="/profile"><h2 className="navigationTitle1">Личный кабинет</h2></Link>
                                <Link to="/catalog"><h2 className="navigationTitle">Каталог проблем</h2></Link>
                            </div>
                            <div className="authContainer">
                                {loggedIn ? (
                                    <button onClick={signOut}><h5 className="loginLink">Выйти</h5></button>
                                ) : (
                                    <>
                                        <Link to="/login"><h2 className="loginLink">Войти</h2></Link>
                                        <Link to="/register"><h2 className="registerLink">Регистрация</h2></Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Problem;
