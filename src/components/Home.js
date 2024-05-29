import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

import '../index.css';

import globus from "../assets/globus.png"
import hand from "../assets/1fe00ede6dfac4de8bc6cd8b67f210f3.png"
import comboworld from "../assets/110bcd4df43365bd9719640514eb8268.png"
import glasses from "../assets/862e88ec6ea7ef11afff193376c94f0c.png"
import empty from "../assets/1437f8dd4d417a238ac71469810f60e0.png"
import page from "../assets/2789b43512a5bc8153501173f3e3acb9.png"
import combobattery from "../assets/8654f152d07b522ce1a0e07d2f04708f.png"
import womanhand from "../assets/97855d6adf055d4520d16811ba74d0b3.png"
import manhand from "../assets/a7852f106c5cacb6ce937c1cca07a1a6.png"
import shield from "../assets/a186833384728466c8c5aa1f6acfa455.png"
import logo from "../assets/db95176210b8a1a8d549e4e78ac0a0cb.png"
import womanphone from "../assets/e850f2e29da00c9b3e15ef831f01b9ab.png"
import coins from "../assets/eb719c78117d54278f0e8c964d29318e.png"

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    return (
        <div className="flex-column">
        <main className="landing main">
        <section className="featuresSection">
            <div className="introContentBox">
                <img className="introImage" src={empty} alt="alt text" />
                <div className="featuresFlexRow">
                    <div className="featureItem">
                        <img className="featureImage" src={shield} alt="alt text" />
                        <h5 className="featureHighlight">95%достоверность результатов</h5>
                    </div>
                    <div className="featureItem1">
                        <img className="featureImage1" src={coins} alt="alt text" />
                        <h5 className="featureHighlight1">Экономия на подборе<br />психолога</h5>
                    </div>
                    <div className="featureItem2">
                        <img className="featureImage1" src={globus} alt="alt text" />
                        <h5 className="featureHighlight2">Доступ к сервису по всей России</h5>
                    </div>
                    <div className="featureItem3">
                        <img className="featureImage2" src={page} alt="alt text" />
                        <h5 className="featureHighlight3">Наличие патентов и сертификатов</h5>
                    </div>
                </div>
                <div className="whyUsFlexCol">
                    <h1 className="sectionTitle">Почему мы?</h1>
                    <div className="detailsFlexRow">
                        <div className="detailItem">
                            <img className="detailImage" src={comboworld} alt="alt text" />
                            <div className="detailText">
                                <h2 className="detailTitle">Круглосуточная доступность: Помощь доступна в любое время без расписаний.</h2>
                                <h2 className="detailTitle1">Мгновенный доступ: Не нужно ждать, помощь предоставляется сразу.</h2>
                                <h2 className="detailTitle2">Анонимность: Полная конфиденциальность без участия человека.</h2>
                            </div>
                        </div>
                        <div className="detailItem1">
                            <img className="detailImage1" src={combobattery} alt="alt text" />
                            <div className="detailText1">
                                <h2 className="detailTitle">Экономичность: Дешевле, чем услуги живого психолога.</h2>
                                <h2 className="detailTitle3">
                                    Персонализация: <br />Индивидуальные советы<br />
                    благодаря анализу данных.
                                </h2>
                                <h2 className="detailTitle4">Объективность: Отсутствие субъективности и эмоционального влияния.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exampleContentBox" src={empty}>
                    <div className="exampleFlexCol">
                        <h1 className="sectionTitle1">Показываем , как просто, на примере 1 теста - попробуйте сами</h1>
                        <div className="exampleStepsRow">
                            <div className="exampleStepItem">
                                <h5 className="exampleStepTitle">Регистрация</h5>
                                <h5 className="exampleStepDescription">Пройдите регистрацию <br />по номеру телефона и почте</h5>
                            </div>
                            <div className="exampleStepItem1">
                                <h5 className="exampleStepTitle">Тестирование</h5>
                                <h5 className="exampleStepDescription1">
                                    Выберете тестирование<br />
                    и пройдите тест
                                </h5>
                            </div>
                            <div className="exampleStepItem2">
                                <h5 className="exampleStepTitle">Просмотр результатов</h5>
                                <h5 className="exampleStepDescription">
                                    Получите предварительные<br />
                    результаты  
                                </h5>
                            </div>
                            <div className="exampleStepItem3">
                                <h5 className="exampleStepTitle">Покупка аудиофайлов</h5>
                                <h5 className="exampleStepDescription">Приобретите аудиофайл <br />для  психокррекции</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="benefitsFlexRow">
                    <div className="benefitItem">
                        <img className="benefitImage" src={womanphone} alt="alt text" />
                        <div className="benefitText">
                            <h2 className="benefitTitle">Психологическое состояние улучшается</h2>
                            <h5 className="benefitHighlight">
                                Психологический помощник принесет дополнительную пользу — ускорит психотерапию, снизит затраты на
                                психологов, избавит вас от длительного похода по врачам.
                            </h5>
                        </div>
                    </div>
                    <div className="benefitItem1">
                            <img className="benefitImage1" src={glasses} alt="alt text" />
                        <div className="benefitText1">
                            <h2 className="benefitTitle1">Быстрая усталость от любого рода деятельности</h2>
                            <h5 className="benefitHighlight1">
                                Сервис упростит процесс познания себя. Если клиент захочет улучшить свои характеристики, то сайт
                                предоставит возможность сгенерировать психокоррекционный аудиофайл.
                            </h5>
                        </div>
                    </div>
                    <div className="benefitItem2">
                        <img className="benefitImage2" src={manhand} alt="alt text" />
                        <div className="benefitText2">
                            <h2 className="benefitTitle2">Человек без знания своих сильных и слабых сторон</h2>
                            <h5 className="benefitHighlight2">
                                Не зная о своих качествах очень трудно найти свое дело, которое будет приносить удовольствие.
                                Самостоятельно невозможно объективно оценить себя.
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="footerFlexRow">
                    <img className="footerImage" src={logo} alt="alt text" />
                    <div className="footerLinksRow">
                        <div className="footerLinkGroup">
                            <h2 className="footerLink">Главная</h2>
                            <h2 className="footerLink">Личный кабинет</h2>
                            <h2 className="footerLink1">Каталог проблем</h2>
                        </div>
                        <div className="footerLinkGroup1">
                            <h2 className="footerLink2">Войти</h2>
                            <h2 className="footerLink3">Регистрация</h2>
                        </div>
                    </div>
                </div>
                <div className="securitySection">
                    <div className="securityRect"></div>
                    <div className="securityFlexRow">
                        <img className="securityImage" src={hand} alt="alt text" />
                        <div className="securityTextCol">
                            <h1 className="securityTitle">Закрытая система с высоким уровнем безопасности</h1>
                            <h2 className="securityDescription">
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
            <div className="ctaContentBox" src={womanhand}> 
            {/* ЧЕКНУТЬ */}
                <div className="ctaContentBoxInner">
                    <div className="ctaFlexCol">
                        <div className="ctaTextCol">
                            <h1 className="ctaTitle">
                                Виртуальный психолог - сервис доступной профессиональной помощи, разработанной специалистами
                            </h1>
                            <h3 className="ctaSubtitle">
                                Регистрируйтесь в сервисе за 5 минут,<br />запустите тестирование в 3 шага, получите<br />результаты
                  через 10 минут
                            </h3>
                        </div>
                        <button className="ctaButton">Пройти тестирование</button>
                    </div>
                </div>
            </div>
        </section>

    </main>

        </div>
    );
}

export default Home;
