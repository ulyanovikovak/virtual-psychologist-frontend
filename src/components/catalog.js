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
                            <div className="infoColumns">
                                <h2 className="personalityDisordersTitle">Личностные  расстройства</h2>
                                <h2 className="psychoticDisordersTitle">Психотические расстройства</h2>
                                <h2 className="neuroticDisordersTitle">Невротические расстройства</h2>
                                <h2 className="impulseControlDisordersTitle">Расстройства контроля импульсов</h2>
                                <h2 className="eatingDisordersTitle">Расстройства пищевого поведения</h2>
                                <h2 className="developmentDisordersTitle">Расстройства, связанные с развитием</h2>
                                <h2 className="childhoodDisordersTitle">Расстройства, возникающие в детстве</h2>
                                <h2 className="substanceDisordersTitle">Субстанцевые расстройства</h2>
                            </div>
                            <div className="actionsColumn">
                                <button className="viewButton">Смотреть</button><button className="viewButton1">Смотреть</button><button className="viewButton2">Смотреть</button><button className="viewButton3">Смотреть</button><button className="viewButton4">Смотреть</button><button className="viewButton5">Смотреть</button><button className="viewButton6">Смотреть</button><button className="viewButton7">Смотреть</button>
                            </div>
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
