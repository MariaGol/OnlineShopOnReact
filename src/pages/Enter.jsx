import React, { useState } from "react";
import Header from "../components/Header";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { genderArr } from "../utils/utils";
import { Link } from "react-router-dom";

export default function Enter() {
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
    login: Yup.string("Введите Ваш e-mail")
      .required("Обязательное поле")
      .email("Введите email"),
    password: Yup.string("Введите Ваш пароль")
      .required("Обязательное поле")
      .min(7, "Минимум 7 знаков!"),
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
              <Link to="/login">
                <button className="login__btn__enter">
                  Зарегистрироваться
                </button>
              </Link>
              <button className="enter__btn__active">Войти</button>
              <div className="login">
                <div className="form__input">
                  <p className="form__title">Введите Ваш e-mail:</p>
                  <Field name="login" className="input" type="string" />
                  <ErrorMessage
                    name="login"
                    className="error"
                    component="span"
                  />
                </div>
                <div className="form__input">
                  <p className="form__title">Введите пароль:</p>
                  <Field name="password" className="input" type="string" />
                  <ErrorMessage
                    name="password"
                    className="error"
                    component="span"
                  />
                </div>
                <button
                  className="signIn"
                  type="submit"
                  disabled={!(dirty && isValid)}
                >
                  Войти
                </button>
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}
