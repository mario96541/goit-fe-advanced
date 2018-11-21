"use strict";

const accessLogin = prompt('Введите логин...','');
//const accessPassword = prompt('Введите пароль...','');
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const invalidLogin = 'Доступ запрещен, неверный логин!';
const invalidPassword ='Доступ запрещен, неверный пароль!' 
const validInput = 'Добро пожаловать!';
const cancel = 'Отменено пользователем!';



if(accessLogin === adminLogin){
    let accessPassword = prompt('Введите пароль...','');
    if(accessPassword === adminPassword){
        alert(validInput);
    } else if(accessPassword === null){
        alert(cancel);
    } else{
        alert(invalidPassword);
    }
} else if(accessLogin === null){
    alert(cancel);
} else{
    alert(invalidLogin);
}