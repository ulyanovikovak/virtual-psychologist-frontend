import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import React from 'react';
import '../result.css';
import logo from "../assets/logo.png"
import Loader from "./Loader";



const Result = () => {
    return (
    <div class="flex-column">
    <main class="pageresults main">
        <section class="resultsSection">
            <div class="headerContainer">
                <img class="logoImage" src={logo} alt="alt text" />
                <div class="navigationContainer">
                    <div class="primaryNavItems">
                        <h2 class="primaryNavItem">Главная</h2>
                        <h2 class="primaryNavItem">Каталог проблем</h2>
                        <h2 class="primaryNavItem">Личный кабинет</h2>
                    </div>
                    <div class="secondaryNavItems">
                        <h2 class="secondaryNavItem">Войти</h2>
                        <h2 class="secondaryNavItem">Регистрация</h2>
                    </div>
                </div>
            </div>
            <div class="mainContent">
                <div class="titleContainer">
                    <h2 class="resultsTitle">Результаты тестирования</h2>
                    <hr class="dividerLine" size="1" />
                </div>
                <div class="metricsContainer">
                    <div class="metricsRow">
                        <div class="metricsDetails">
                            <div class="metricsCategory">
                                <h2 class="metricsCategoryTitle">Проблема</h2>
                                <h2 class="metricsCategoryDetails">пупупу</h2>
                            </div>
                            <div class="metricsDate">
                                <h2 class="metricsDateTitle">Дата прохождения</h2>
                                <h2 class="metricsDateDetails">пупупу</h2>
                            </div>
                            <div class="metricsDuration">
                                <h2 class="metricsDurationTitle">Время прохождения</h2>
                                <h2 class="metricsDurationDetails">пупупу</h2>
                            </div>
                        </div>
                        <div class="metricDescriptions">
                            <h2 class="metricTitle">Пояснение метрик</h2>
                            <h2 class="metricDescription">
                                Актуализация - воспроизведение имеющихся у человека знаний, умений, навыков, форм поведения.
                            </h2>
                            <h2 class="metricDescription1">
                                Потенциал - возможный, скрытый, не проявляющийся и не обладающий достаточной силой для проявления
                            </h2>
                        </div>
                    </div>
                    <div class="highlightBox"></div>
                    <img class="highlightImage" src="./assets/21e5b454daa33686ac34e0a995adb872.svg" alt="alt text" />
                </div>
            </div>
            <div class="attributesContainer">
                <div class="organizednessAttribute">
                    <h2 class="attributeTitle">Организованность</h2>
                    <img class="attributeImage" src="./assets/a84f9102f77373fe97aa637cce296e9b.svg" alt="alt text" />
                </div>
                <div class="entrepreneurshipAttribute">
                    <h2 class="attributeTitle">Предприимчивость</h2>
                    <img class="attributeImage" src="./assets/a84f9102f77373fe97aa637cce296e9b.svg" alt="alt text" />
                </div>
            </div>
        </section>

    </main>
    <script type="text/javascript">
        AOS.init();
        new Sticky('.sticky-effect');
    </script>
</div>
    )

    
    
};

export default Result;


