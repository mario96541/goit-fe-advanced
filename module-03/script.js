"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = (login) => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => allLogins.includes(login);

const addLogin = (allLogins, login) => {
    if(!isLoginValid(login)) {
        return 'Такой логин уже используется!';
    }
    if(!isLoginUnique(allLogins, login)) {
        return 'Ошибка! Логин должен быть от 4 до 16 символов';
    }
    return 'Логин успешно добавлен!';
};