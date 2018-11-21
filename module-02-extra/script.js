"use strict";

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let userPassword;
let correctPassword = false;

do{
    userPassword = prompt('Введите пароль','');
    if(passwords.includes(userPassword)) {
        alert('Добро пожаловать!');
        break;
    }
    if(!correctPassword){
        attempts -= 1;
        if(attempts >= 1){
            alert(`Неверный пароль, у вас осталось ${attempts} попыток`)
        } else {
            alert('У вас закончились попытки, аккаунт заблокирован!');
        }
    }
}while(attempts >= 1);