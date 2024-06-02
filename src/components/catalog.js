import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../api/axios';
import useLogout from "../hooks/useLogout";
import Loader from "./Loader";

import '../catalog.css';

import logo from "../assets/logo.png";
import text from "../assets/text.png";

const PROBLEMS_URL = '/problems';

const Catalog = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const [problems, setProblems] = useState([]);
    const [message, setMessage] = useState("");
    const [fetching, setFetching] = useState(true);

    const signOut = async () => {
        await logout();
        navigate('/');
    }

    const getProblems = async () => {
        axios.get(PROBLEMS_URL, {
            headers: { 
              "Authorization": "Bearer " + localStorage.getItem("access"),
            },
            withCredentials: true
        }).then((response) => {
            console.log(JSON.stringify(response.data));
            setProblems(response.data);
            setFetching(false)
            setMessage('')
            console.log(problems);
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
        setFetching(true)
        getProblems()
    }, [])

    return (
<body className="flex-column">
    <main className="catalog main">
        <section className="testSection">
            <div className="flexRow">
                <img className="image1" src={text} alt="alt text" />
                <div className="contentBox">
                    </div>
                <div className="infoBox">
                    <div className="infoCol">
                        <h1 className="headerTitle">Тесты</h1>
                        <div className="infoRows">
                        {fetching && !message ? (
                            <center>
                                <Loader />
                            </center>
                        ) : problems.length < 1 || message? (
                            <div className="noUser">{message}</div>
                        ) : (
                            <ul>
                                {problems.map((problem, i) => (
                                    <li key={`item_${i}`}>
                                        { problem["name"] }
                                    </li>
                                ))}
                            </ul>
                        )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sideCol">
                <div className="sideContent">
                    <div className="sideRow">
                        <img className="sideIcon" src={logo} alt="alt text" />
                        <div className="sideRows">
                            <div className="sideRowContent">
                                <h2 className="homeTitle">Главная</h2>
                                <h2 className="profileTitle">Личный кабинет</h2>
                                <h2 className="problemCatalogTitle">Каталог проблем</h2>
                            </div>
                            <div className="accountActions">
                                <h2 className="loginTitle">Войти</h2>
                                <h2 className="registerTitle">Регистрация</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="problemCatalogBox">
                    <h2 className="problemCatalog">Каталог проблем</h2>
                </div>
            </div>
        </section>

    </main>
    <script type="text/javascript">
        AOS.init();
        new Sticky('.sticky-effect');
    </script>
</body>

    );
}

export default Catalog;
