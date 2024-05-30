import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

import '../catalog.css';

import logo from "../assets/logo.png";
import text from "../assets/text.png";


const Catalog = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    return (
<body class="flex-column">
    <main class="catalog main">
        <section class="testSection">
            <div class="flexRow">
                <img class="image1" src={text} alt="alt text" />
                <div class="contentBox">
                    </div>
                <div class="infoBox">
                    <div class="infoCol">
                        <h1 class="headerTitle">Тесты</h1>
                        <div class="infoRows">
                            <div class="infoColumns">
                                <h2 class="personalityDisordersTitle">Личностные  расстройства</h2>
                                <h2 class="psychoticDisordersTitle">Психотические расстройства</h2>
                                <h2 class="neuroticDisordersTitle">Невротические расстройства</h2>
                                <h2 class="impulseControlDisordersTitle">Расстройства контроля импульсов</h2>
                                <h2 class="eatingDisordersTitle">Расстройства пищевого поведения</h2>
                                <h2 class="developmentDisordersTitle">Расстройства, связанные с развитием</h2>
                                <h2 class="childhoodDisordersTitle">Расстройства, возникающие в детстве</h2>
                                <h2 class="substanceDisordersTitle">Субстанцевые расстройства</h2>
                            </div>
                            <div class="actionsColumn">
                                <button class="viewButton">Смотреть</button><button class="viewButton1">Смотреть</button><button class="viewButton2">Смотреть</button><button class="viewButton3">Смотреть</button><button class="viewButton4">Смотреть</button><button class="viewButton5">Смотреть</button><button class="viewButton6">Смотреть</button><button class="viewButton7">Смотреть</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sideCol">
                <div class="sideContent">
                    <div class="sideRow">
                        <img class="sideIcon" src={logo} alt="alt text" />
                        <div class="sideRows">
                            <div class="sideRowContent">
                                <h2 class="homeTitle">Главная</h2>
                                <h2 class="profileTitle">Личный кабинет</h2>
                                <h2 class="problemCatalogTitle">Каталог проблем</h2>
                            </div>
                            <div class="accountActions">
                                <h2 class="loginTitle">Войти</h2>
                                <h2 class="registerTitle">Регистрация</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="problemCatalogBox">
                    <h2 class="problemCatalog">Каталог проблем</h2>
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
