"use strict";

function Cashier(name, productDatabase){
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;

  this.getCustomerMoney = function (value){
    this.customerMoney = value;
  };

  this.countTotalPrice = function(order) {
    let totalPrice = 0;
    for (const key in order) {
      totalPrice += this.productDatabase[key] * order[key];
    }
    return totalPrice;
  };

  this.countChange = function (totalPrice) {
    if (this.customerMoney < totalPrice) {
      return null;
    }
    return this.customerMoney - totalPrice;
  };

  this.onSuccess = function (change) {
    console.log (`Спасибо за покупку, ваша сдача ${change}!`);
  };

  this.onError = function () {
    console.log(`Очень жаль, вам не хватает денег на покупки`);
  };

  this.reset = function() {
    this.customerMoney = 0;
  };
  
};

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };
  
  /* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };
  