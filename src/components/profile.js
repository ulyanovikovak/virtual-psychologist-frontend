import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

import React from 'react';

import '../profile.css';

const Profile = () => {
  return (
    <div className="flex-column">
      <div className="account3 testResultsSection">
        <div className="contentColumn">
          <div className="headerRow">
            <h2 className="sectionTitle">Результаты по пройденным тестам</h2>
            <button className="refreshButton">Обновить</button>
          </div>
          <div className="testContentBox">
            <div className="testColumnBox">
              <div className="testRow">
                <div className="testTitleColumn">
                  <h2 className="personalityDisordersTitle">Личностные расстройства</h2>
                  <h2 className="psychoticDisordersTitle">Психотические расстройства</h2>
                  <h2 className="neuroticDisordersTitle">Невротические расстройства</h2>
                  <h2 className="impulseControlDisordersTitle">Расстройства контроля импульсов</h2>
                  <h2 className="eatingDisordersTitle">Расстройства пищевого поведения</h2>
                  <h2 className="developmentalDisordersTitle">Расстройства, связанные с развитием</h2>
                  <h2 className="childhoodDisordersTitle">Расстройства, возникающие в детстве</h2>
                  <h2 className="substanceDisordersTitle">Зависимости и субстанцевые расстройства</h2>
                </div>
                <div className="actionButtonColumn">
                  <button className="viewButton1">Смотреть</button>
                  <button className="viewButton2">Смотреть</button>
                  <button className="viewButton2">Смотреть</button>
                  <button className="viewButton3">Смотреть</button>
                  <button className="viewButton4">Смотреть</button>
                  <button className="viewButton5">Смотреть</button>
                  <button className="viewButton3">Смотреть</button>
                  <button className="viewButton6">Смотреть</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="personalDataBox">
          <h2 className="personalDataTitle">Личные данные</h2>
        </div>
        <h2 className="personalAreaTitle">Личный кабинет/Тесты<br /></h2>
        <h2 className="homeTitle">Главная</h2>
        <img
          className="profileImage"
          src="/assets/bd0396c7dbd37de05525a7ee879bfcb9.png"
          alt="Profile"
        />
        <div className="userDataColumn">
          <div className="userDetailsBox">
            <div className="userDetailColumn">
              <h2 className="firstNameTitle">Имя</h2>
              <div className="firstNameRect"></div>
              <h2 className="lastNameTitle">Фамилия</h2>
              <div className="lastNameRect"></div>
              <h2 className="middleNameTitle">Отчество</h2>
              <div className="middleNameRect"></div>
              <h2 className="birthdateTitle">Дата рождения</h2>
              <div className="birthdateRect"></div>
            </div>
          </div>
          <div className="contactInfoBox">
            <div className="contactInfoColumn">
              <h2 className="emailTitle">Почта<br /></h2>
              <div className="emailRect"></div>
              <h2 className="phoneNumberTitle">Номер телефона</h2>
              <div className="phoneNumberRect"></div>
              <h2 className="editInfoTitle">Изменить данные</h2>
            </div>
          </div>
        </div>
        <div className="footerRow">
          <h2 className="problemCatalogTitle">Каталог Проблем</h2>
          <h2 className="userTitle">Пользователь</h2>
        </div>
      </div>
      <script type="text/javascript">
        AOS.init();
        new Sticky('.sticky-effect');
      </script>
    </div>
  );
};

export default Profile;
