import React, { useState } from "react";
import Header from "../components/Header";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { genderArr } from "../utils/utils";
import { Link } from "react-router-dom";

export default function Login() {
  const initialValues = {
    name: "",
    gender: "",
    login: "",
    password: "",
    number: "",
  };

  const [login, setLogin] = useState("");

  function handleSubmit(values) {
    console.log(login);
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string("Ваше имя")
      .min(2, "Минимум 2 символа")
      .max(20, "Максимум 20 символов")
      .required("Обязательное поле"),
    gender: Yup.string("Ваш пол"),
    login: Yup.string("Введите Ваш e-mail")
      .required("Обязательное поле")
      .email("Введите email"),
    password: Yup.string("Введите Ваш пароль")
      .required("Обязательное поле")
      .min(7, "Минимум 7 знаков!"),
    number: Yup.string("Введите Ваш e-mail").required("Обязательное поле"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ dirty, isValid }) => {
        return (
          <>
            <Header />
            <Form>
              <button className="login__btn__active">Зарегистрироваться</button>
              <Link to="/enter">
                <button className="enter__btn">Войти</button>
              </Link>
              <div className="login">
                <div className="form__input">
                  <p className="form__title">Введите Ваше имя:</p>
                  <Field name="name" className="input" type="string" />
                  <ErrorMessage
                    name="name"
                    className="error"
                    component="span"
                  />
                </div>
                <div className="form__input">
                  <p className="form__title">Выберите пол:</p>
                  <Field name="gender" as="select" className="input">
                    {genderArr.map((elem, index) => (
                      <option key={index} value={elem.value}>
                        {elem.text}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="gender"
                    className="error"
                    component="span"
                  />
                </div>
                <div className="form__input">
                  <p className="form__title">Введите Ваш e-mail:</p>
                  <Field
                    name="login"
                    className="input"
                    type="string"
                    // value="e-mail"
                  />
                  <ErrorMessage
                    name="login"
                    className="error"
                    component="span"
                  />
                </div>
                <div className="form__input">
                  <p className="form__title">Придумайте пароль:</p>
                  <Field name="password" className="input" type="string" />
                  <ErrorMessage
                    name="password"
                    className="error"
                    component="span"
                  />
                </div>
                <div className="form__input">
                  <p className="form__title">Введите Ваш номер телефона:</p>
                  <Field
                    name="number"
                    className="input"
                    type="tel"
                    // value="+7"
                  />
                  <ErrorMessage
                    name="number"
                    className="error"
                    component="span"
                  />
                </div>
                <button
                  className="signIn"
                  type="submit"
                  disabled={!(dirty && isValid)}
                >
                  Зарегистрироваться
                </button>
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}
