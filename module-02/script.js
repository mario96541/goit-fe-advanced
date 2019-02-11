"use strict";

let userInput;
const numbers = [];
let total = 0;
let invalidInput = "Это не число!";

do{
    userInput = prompt('Введите число','');

    if (!Number.isNaN(+userInput) && userInput !== null) {
        numbers.push(+userInput);
      }
    else if (userInput !== null) {
        alert(invalidInput);
      }
}while(userInput !== null);

if(numbers.length>0){
    for(let item of numbers){
        total += item;
    }
    alert(`Общая сумма чисел ${total}`);
}
