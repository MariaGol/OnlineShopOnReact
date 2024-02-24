import React from "react";
import styles from "./Headerstyles.css";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header container">
        <div className="header__first">
          <ul>
            <li>Прямой эфир</li>
            <li>Работа в Додо</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="header__second">
          <div className="logotext">
            <div className="picture">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div>
              <h6>Доставка пиццы Санкт-Петербург</h6>
              <p>34 мин • 4.77 ⭐️</p>
            </div>
          </div>
          <div className="header__buttons">
            <Link to="/login">
              <button className="enter">Войти</button>
            </Link>
            <Link to="/basket">
              <button>Корзина</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
