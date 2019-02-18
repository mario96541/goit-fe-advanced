"use strict"

class Hamburger {
  /**
   * @constructor
   * @param {String} size - Размер
   * @param {String} stuffing - Начинка
   */
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  addTopping(topping) {
    if(!this._toppings.includes(topping)){
      this._toppings.push(topping);
    }
  }

  removeTopping(topping) {
    this._toppings = this._topping.filter(order => order !== topping);
  }

  getToppings() {
    return this._toppings;
  }

  getSize() {
    return this._size;
  }

  getStuffing() {
    return this._toppings;
  }

 get calculatePrice() {
  const toppingPrice = this._toppings.reduce((sum, topping) => sum + Hamburger.TOPPINGS[topping].price);
  const totalPrice = toppingPrice + Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price;
  return totalPrice;
  }

 get calculateCalories() {
  const toppingCalories = this._toppings.reduce((sum, topping) => sum + Hamburger.TOPPINGS[topping].calories);
  const totalCalories = toppingCalories + Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories;
  return totalCalories;
  }
}


Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

