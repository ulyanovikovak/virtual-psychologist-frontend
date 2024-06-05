import { useRef, useState, useEffect } from "react";
import axios, { axiosTest } from '../api/axios';
import { useNavigate, Link, useParams } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import React from 'react';
import Loader from "./Loader";

import '../profile.css';
import logo from "../assets/logo.png"

const Result = () => {
    const navigate = useNavigate();
    const logout = useLogout();
    const [loggedIn, setLoggedIn] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [fetching, setFetching] = useState(true);
    
    const [ name, setName ] = useState("");
    const [ about, setAbout ] = useState("");
    const [ timeStart, setTimeStart ] = useState("");
    const [ timeEnd, setTimeEnd ] = useState("");
    const [ nodes, setNodes ] = useState([]);
    
    const RESULT_URL = '/api/results';

    const signOut = async () => {
        await logout();
        setLoggedIn(false);
        navigate('/');
    }

    const getResult = async () => {
        if (localStorage.getItem("access")) {
            setLoggedIn(true);
        }
        axios.get("https://9ww9.ru:80" + RESULT_URL, {
            headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVnSGZHOUYiLCJ0b2tlbiI6IkpQYkl1cm92dHQvSE5oY2xkN1REd0FWSk82UDRMb3BQQ3F0OHpXWVhzQ2hiOFdLOG9oVVBrUWdHOUUvRDdQWEQiLCJpYXQiOjE3MTU1MzkwMTB9.js6b_XCmv1zAJKmy12ahTM-9iRe6g9wSQw4cN656j74' },
            withCredentials: true
        }).then((response) => {
            console.log(JSON.stringify(response?.data[0]));
            setName(response?.data[0].testName);
            setAbout(response?.data[0].testDescription);
            setTimeStart(response?.data[0].timeStart);
            setTimeEnd(response?.data[0].timeEnd);
            setNodes(response?.data[0].nodes);
            setErrMsg("");
            setFetching(false);
        }).catch((err) => {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                setErrMsg('Result display Failed: ' + err?.response)
            } else if (err.request) {
                setErrMsg('No Server Response');
                console.log(err.request);
            } else {
                console.log('Error', err.message);
            }
            console.log(err.config);
        });
    }

    useEffect(() => {
        if (localStorage.getItem("access")) {
            setLoggedIn(true);
        }
        setFetching(true)
        getResult()
    }, [])

    return (
    <div className="flex-column">
      <main className="profile main">
        <section className="personalDataSection">
            <div className="contentBox">
                <h2 className="mediumTitle">{name}</h2>
            </div>
            <div className="contentBox">
                <h5 className="mediumTitle">{about}</h5>
                <h5 className="mediumTitle">{timeStart}</h5>
                <h5 className="mediumTitle">{timeEnd}</h5>
            </div>
            <div className="flexRow">
                <div className="flexColTests">
                    <h1 className="pageTitle">Результаты</h1>
                    <div className="flexColTestsItems">
                        {fetching && !errMsg ? (
                            <center>
                                <Loader />
                            </center>
                        ) : errMsg? (
                            <div className="mediumTitle">{errMsg}</div>
                        ) : (
                            <ul>
                                {nodes.map((node, i) => (
                                    <li key={`item_${i}`} className="flexRowPersonalityDisorders">
                                        <h2 className="mediumTitle">{ node["name"] }</h2>
                                        <h5>{node["score"]}</h5>
                                        <h5>{node["potencial"]}</h5>
                                    </li>
                                ))}
                            </ul>
                        )}
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

export default Result;
