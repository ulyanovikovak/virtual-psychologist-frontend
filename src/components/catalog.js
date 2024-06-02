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
        navigate('/');
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
