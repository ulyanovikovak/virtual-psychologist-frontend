import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../api/axios';
import useLogout from "../hooks/useLogout";
import Loader from "./Loader";

import '../catalog.css';

import logo from "../assets/logo.png";

const PROBLEMS_URL = '/problems';

const Catalog = () => {
    const navigate = useNavigate();
    const logout = useLogout();
    const [loggedIn, setLoggedIn] = useState(false)

    const signOut = async () => {
        await logout();
        setLoggedIn(false)
        navigate('/catalog');
    }

    const [problems, setProblems] = useState([]);
    const [message, setMessage] = useState("");
    const [fetching, setFetching] = useState(true);


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
        if (message === "" && problems.length < 1 && !fetching) {
            setMessage("No problems added yet");
        }
    }
    
    useEffect(() => {
        if (localStorage.getItem("access")) {
            setLoggedIn(true);
        }
        setFetching(true)
        getProblems()
    }, [])

    return (
<body className="flex-column">
    <main className="catalog main">
        <section className="overviewSection">
        <div className="headerContainer">
                <div className="navContainer">
                    <div className="brandContainer">
                        <img className="brandLogo" src={logo} alt="alt text" />
                        <div className="navMenu">     
                        <Link to="/"><h2 className="homeLink">Главная</h2></Link>
                        <Link to="/profile"><h2 className="profileLink">Личный кабинет</h2></Link>
                        <Link to="/catalog"><h2 className="problemsCatalogLink">Каталог проблем</h2></Link>
                        </div>
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
                <div className="contentBoxCatalog">
                    <h2 className="catalogTitle">Каталог проблем</h2>
                </div>
            </div>
            <div class="mainContentRow">
                    <div class="commonDiseasesColumn">
                        <h4 class="highlight1">Наиболее распространённые заболевания психики:</h4>
                        <div class="diseasesListColumn">
                            <h5 class="commonIssuesBox_box">
                                <span class="commonIssuesBox"
                    ><span class="commonIssuesBox_span0"><br /></span><span class="commonIssuesBox_span1">Невротические расстройства</span><span class="commonIssuesBox_span2">
                      (легкая психопатология):<br />Тревожные      расстройства:<br />Генерализованное       тревожное
                      расстройство<br />Паническое       расстройство<br />Социофобия<br />Расстройство
                            обсессивно-компульсивного спектра<br />Посттравматическое       стрессовое расстройство<br />Различные
                      фобии<br />Аффективные      расстройства:<br />Депрессия<br />Биполярное аффективное
                      расстройство<br />Расстройства, связанные с соматическими симптомами:<br />Соматоформные
                            расстройства<br />Нарушения сна:<br />Бессонница<br />Гиперсомния</span></span>
                            </h5>
                            <h5 class="severeIssuesBox_box">
                                <span class="severeIssuesBox"
                    ><span class="severeIssuesBox_span0"
                      >Психопатические расстройства (тяжелая психопатология):<br /></span><span class="severeIssuesBox_span1">Шизофрения<br />Бредовые расстройства<br /></span><span class="severeIssuesBox_span2">Личностные (персонификационные) расстройства:<br /></span><span class="severeIssuesBox_span3"
                      >Параноидальное      расстройство личности<br />Шизоидное расстройство личности<br />Нарциссическое
                           расстройство личности<br />Граничное расстройство личности (эмоционально нестабильное)<br />Избегающее
                      (тревожное) расстройство личности<br />Зависимое расстройство личности<br />Антисоциальное
                      расстройство личности<br /></span><span class="severeIssuesBox_span4">Расстройства пищевого поведения:<br /></span><span class="severeIssuesBox_span5"
                      >Анорексия нервоза<br />Булимия нервоза<br />Переедание<br />Расстройства контроля импульсов:<br />Клептомания<br />Патологическая
                           склонность к азартным играм<br />Пиромания      (навязчивое поджигательство)<br /></span><span class="severeIssuesBox_span6">Зависимости и субстанцевые расстройства:<br /></span><span class="severeIssuesBox_span7"
                      >Алкогольная зависимость<br />Зависимость от наркотических веществ<br />Табакокурение</span></span>
                            </h5>
                        </div>
                    </div>
                <div className="content_box">
                    <div className="flexColTests">
                        <h1 className="pageTitle">Тесты</h1>
                        <div className="flexColTestsItems">
                            {fetching && !message ? (
                                <center>
                                    <Loader />
                                </center>
                            ) : message? (
                                <div className="Title">{message}</div>
                            ) : (
                                <ul>
                                    {problems.map((problem, i) => (
                                        <li key={`item_${i}`} className="flexRowPersonalityDisorders">
                                            <h2 className="Title">{ problem["name"] }</h2>
                                            <Link to={"/catalog/" + problem["id"]}><button className="Button">Подробнее</button></Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
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
