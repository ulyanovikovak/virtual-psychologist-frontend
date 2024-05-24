import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

// import "../assets/1d9a9f96fbbdd9b08f81e4f5bfebecdf.svg"
// import "../assets/46cf583d5954e7647294746437e7986d.svg"
// import "../assets/4ecdc2bf27349743423ac44c57b9d4de.svg"
// import "../assets/52830e019bc4207e4e3cedf54b297a81.svg"
// import "../assets/6432dc0cd846d1400b4c97bf2596e93f.svg"
// import "../assets/858e75e0b2ab43335c14059a4f8c4446.svg"
// import "../assets/7abed8abd726303e449c96936855c1ff.svg"
// import "../assets/86caaf1cfeb47b924227d6947ecffa9e.png"
// import "../assets/87dcb6f0caa2e6bee52373e3bd418427.svg"
// import "../assets/884ba50634da121b6b51902e275daad5.svg"
// import "../assets/884ba50634da121b6b51902e275daad5.svg"
// import "../assets/92418661f21618db78c2c675dabc20be.svg"
// import "../assets/c923dd4224970adf21853645f670e1a4.svg"
// import "../assets/d0279040987a74e7c63bf80b5c5d74c0.svg"
// import "../assets/d83c725104b0758fd89fc7ee1acff6e3.svg"
// import "../assets/f8aef8f9f7b6d0740bd6b7345197e351.svg"
// import "../assets/f990591d0571691abb7e808547ac8562.png"
// import "../assets/fc1e945908715d0586cd172a3839c4bc.svg"
const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    return (
        <div className="flex-column">
            <main className="landing1 main">
                <section className="rootSection">
                    <div className="content_box8">
                        <div className="contentWrapper">
                            <div className="linksContainer">
                                <div className="navLinks">
                                    <div className="text">Главная</div>
                                    <div className="text">Цены</div>
                                    <div className="text">Опыт наших клиентов</div>
                                    <div className="text">Статьи</div>
                                </div>
                                <div className="additionalInfo">
                                    <div className="userAgreement">
                                        <div className="text">Пользовательское соглашение</div>
                                        <div className="text">Согласие на обработку персональных данных</div>
                                    </div>
                                    <div className="companyInfo">
                                        <div className="text">ООО “НейроНет Система”</div>
                                        <div className="text1">Россия, Казань, ул. Уртак 2Б, 3</div>
                                        <div className="text2">ОГРН 1181690051762, ИНН 1659191542</div>
                                        <div className="text">info@hrdream.ru</div>
                                        <div className="text3">+7 (917) 250-33-55</div>
                                    </div>
                                </div>
                            </div>
                            <div className="creditsSection">
                                <div className="text4_box">
                                    <span className="text4">
                                        <span className="text4_span0">Сервис разработан командой </span>
                                        <span className="text4_span1">WORDSKY.RU</span>
                                    </span>
                                </div>
                                <div className="rect8"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mainHighlights">
                        <div className="highlightBlock">
                            <img className="image33" src="/assets/f8aef8f9f7b6d0740bd6b7345197e351.svg" alt="alt text" />
                            <div className="flex_col">
                                <h2 className="medium_title">Человек без знания своих сильных и слабых сторон</h2>
                                <h5 className="highlight1">
                                    Не зная о своих качествах очень трудно найти свое дело, которое будет приносить удовольствие.
                                    Самостоятельно невозможно объективно оценить себя.
                                </h5>
                            </div>
                        </div>
                        <div className="highlightBlock1">
                            <img className="image331" src="/assets/d83c725104b0758fd89fc7ee1acff6e3.svg" alt="alt text" />
                            <div className="flex_col1">
                                <h2 className="medium_title1">Быстрая усталость от любого рода деятельности</h2>
                                <h5 className="highlight1">
                                    Сервис упростит процесс познания себя. Если клиент захочет улучшить свои характеристики, то сайт
                                    предоставит возможность сгенерировать психокоррекционный аудиофайл.
                                </h5>
                            </div>
                        </div>
                        <div className="highlightBlock">
                            <img className="image33" src="/assets/52830e019bc4207e4e3cedf54b297a81.svg" alt="alt text" />
                            <div className="flex_col2">
                                <h2 className="medium_title2">Психологическое состояние улучшается</h2>
                                <h5 className="highlight1">
                                    Психологический помощник принесет дополнительную пользу — ускорит психотерапию, снизит затраты на
                                    психологов, избавит вас от длительного похода по врачам.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="ctaSection">
                        <div className="flex_col3">
                            <h1 className="big_title">
                                Виртуальный психолог - это современное решение, отвечающее актуальным потребностям общества.
                            </h1>
                            <h2 className="medium_title3">
                                Система оценки своих навыков будет полезна любому человеку, независимо от его возраста, статуса и уровня
                                развития.
                            </h2>
                        </div>
                        <div className="flex_row">
                            <div className="rect5"></div>
                            <div className="rect6"></div>
                            <div className="rect51"></div>
                        </div>
                    </div>
                    <div className="demoSection">
                        <div className="flex_col4">
                            <h1 className="big_title1">Показываем, как просто, на примере 1 теста — попробуйте сами</h1>
                            <div className="flex_row1">
                                <div className="content_box2" style={{ "--src": "url(/assets/81321e2154d3d56f90d135c62af7aaa9.svg)" }}>
                                    <div className="flex_col5">
                                        <h3 className="subtitle"><Link to="/register">Регистрация</Link></h3>
                                        <h3 className="subtitle">Пройдите регистрацию <br />по номеру телефона и почте</h3>
                                    </div>
                                </div>
                                <div className="content_box2" style={{ "--src": "url(/assets/81321e2154d3d56f90d135c62af7aaa9.svg)" }}>
                                    <div className="flex_col6">
                                        <h3 className="subtitle">Тестирование</h3>
                                        <h3 className="subtitle">
                                            Выберете тестирование<br />
                                            и пройдите тест
                                        </h3>
                                    </div>
                                </div>
                                <div className="content_box2" style={{ "--src": "url(/assets/81321e2154d3d56f90d135c62af7aaa9.svg)" }}>
                                    <div className="flex_col7">
                                        <h3 className="subtitle">Просмотр результатов</h3>
                                        <h3 className="subtitle">
                                            Получите предварительные<br />
                                            результаты
                                        </h3>
                                    </div>
                                </div>
                                <div className="content_box2" style={{ "--src": "url(/assets/81321e2154d3d56f90d135c62af7aaa9.svg)" }}>
                                    <div className="flex_col8">
                                        <h3 className="subtitle">Покупка аудиофайлов</h3>
                                        <h3 className="subtitle">Приобретите аудиофайл <br />для психокррекции</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="securitySection">
                            <div className="flex_col9">
                                <h1 className="big_title2">Закрытая система с высоким уровнем безопасности</h1>
                                <div className="flex_row2">
                                    <img className="image32" src="/assets/92418661f21618db78c2c675dabc20be.svg" alt="alt text" />
                                    <h2 className="medium_title4">
                                        Никто не имеет доступа к конфиденциальным данным наших клиентов, и личная информация защищена на
                                        различных уровнях, что исключает возможность утечки. Мы не раскрываем результаты использования системы
                                        без согласия пользователя и не передаем их третьим лицам. Система функционирует только в онлайн-режиме
                                        и не требует специального оборудования со стороны клиента — для установки и контроля не потребуется
                                        приглашать специалистов на рабочее место.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="featuresSection">
                        <div className="group">
                            <div className="group1">
                                <div className="group1">
                                    <div className="group1">
                                        <div className="group1">
                                            <div className="group1">
                                                <div className="group1">
                                                    <img className="cover" src="/assets/884ba50634da121b6b51902e275daad5.svg" alt="alt text" />
                                                    <div className="flex_row3">
                                                        <div className="flex_row4">
                                                            <img className="image1" src="/assets/7abed8abd726303e449c96936855c1ff.svg" alt="alt text" />
                                                            <h5 className="highlight">95%достоверность результатов</h5>
                                                        </div>
                                                        <div className="flex_row5">
                                                            <img className="image11" src="/assets/d0279040987a74e7c63bf80b5c5d74c0.svg" alt="alt text" />
                                                            <h5 className="highlight11">Экономия на подборе<br />психолога</h5>
                                                        </div>
                                                        <div className="flex_row6">
                                                            <img className="image11" src="/assets/1d9a9f96fbbdd9b08f81e4f5bfebecdf.svg" alt="alt text" />
                                                            <h5 className="highlight12">Доступ к сервису по всей России</h5>
                                                        </div>
                                                        <div className="flex_row7">
                                                            <img className="image1" src="/assets/87dcb6f0caa2e6bee52373e3bd418427.svg" alt="alt text" />
                                                            <h5 className="highlight13">Наличие патентов и сертификатов на<br />метод</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="heroSection">
                                                    <img className="cover1" src="/assets/86caaf1cfeb47b924227d6947ecffa9e.png" alt="alt text" />
                                                    <div className="content_box">
                                                        <div className="flex_col10">
                                                            <div className="flex_col11">
                                                                <h1 className="big_title3">
                                                                    Виртуальный психолог - сервис доступной профессиональной помощи, разработанной
                                                                    специалистами
                                                                </h1>
                                                                <h2 className="medium_title3">
                                                                    Регистрируйтесь в сервисе за 5 минут,<br />запустите тестирование в 3 шага, получите<br />результаты
                                                                    через 10 минут
                                                                </h2>
                                                            </div>
                                                            <button className="btn">Пройти тестирование</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <img className="image" src="/assets/f990591d0571691abb7e808547ac8562.png" alt="alt text" />
                                        </div>
                                        <div className="flex_row8">
                                            <h2 className="medium_title11">Войти</h2>
                                            <h2 className="medium_title12">Регистрация</h2>
                                        </div>
                                    </div>
                                    <h2 className="medium_title13">Каталог проблем</h2>
                                </div>
                                <h2 className="medium_title14">Личный кабинет/Тесты</h2>
                            </div>
                            <h2 className="medium_title15">Главная</h2>
                        </div>
                        <h1 className="big_title4">Почему мы?</h1>
                    </div>
                    <div className="whyUsSection">
                        <div className="flex_row9">
                            <div className="flex_col12">
                                <div className="flex_row10">
                                    <img className="image17" src="/assets/858e75e0b2ab43335c14059a4f8c4446.svg" alt="alt text" />
                                    <h2 className="medium_title5">Круглосуточная доступность: Помощь доступна в любое время без расписаний.</h2>
                                </div>
                                <div className="flex_row10">
                                    <img className="image17" src="/assets/c923dd4224970adf21853645f670e1a4.svg" alt="alt text" />
                                    <h2 className="medium_title6">Мгновенный доступ: Не нужно ждать, помощь предоставляется сразу.</h2>
                                </div>
                                <div className="flex_row11">
                                    <img className="image17" src="/assets/4ecdc2bf27349743423ac44c57b9d4de.svg" alt="alt text" />
                                    <h2 className="medium_title7">Анонимность: Полная конфиденциальность без участия человека.</h2>
                                </div>
                            </div>
                            <div className="flex_col13">
                                <div className="flex_row12">
                                    <img className="image17" src="/assets/fc1e945908715d0586cd172a3839c4bc.svg" alt="alt text" />
                                    <h2 className="medium_title8">Экономичность: Дешевле, чем услуги живого психолога.</h2>
                                </div>
                                <div className="flex_row13">
                                    <img className="image17" src="/assets/46cf583d5954e7647294746437e7986d.svg" alt="alt text" />
                                    <h2 className="medium_title9">Персонализация: Индивидуальные советы благодаря анализу данных.</h2>
                                </div>
                                <div className="flex_row14">
                                    <img className="image17" src="/assets/6432dc0cd846d1400b4c97bf2596e93f.svg" alt="alt text" />
                                    <h2 className="medium_title10">Объективность: Отсутствие субъективности и эмоционального влияния.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text11">© 2021 НейроНет Система, Все права защищены</div>
                </section>
            </main>
            <script type="text/javascript">
                AOS.init();
                new Sticky('.sticky-effect');
            </script>
        </div>
    );
}

export default Home;
