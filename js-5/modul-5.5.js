const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};
// статика
Car.description = 'Класс описывающий автомобиль';

Car.logInfo = function (carObj) {
  console.log(carObj);
};
const car = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

//TODO: КЛАССЫ
//альтернатива  через классы
// класс
class Car1 {
  // статика
  static AAA = 'AAA';
  static description = 'Класс описывающий автомобиль';
  static logInfo(carObj) {
    console.log(carObj);
  }

  // приватные свойства
  #test = 'test';

  // публичные свойства и методы класса
  mySuper = 555;
  //конструктор
  constructor({ brand, model, price } = {}) {
    console.log('Выполняется constructor');
    this.brand = brand;
    this._model = model;
    this.price = price;
  }
  // методы
  changePrice(newPrice) {
    this.price = newPrice;
    console.log(this.#test);
  }
  // сеттеры и геттеры
  // setModel(newModel) {
  //   this._model = newModel;
  // }
  set model(newModel) {
    this._model = newModel;
  }

  // getModel() {
  //   return this._model;
  // }
  get model() {
    return this._model;
  }
}

// экземпляр
const carInstance = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});
console.log(carInstance);
console.log(Car1.description);
console.log(carInstance.description);
Car1.logInfo(carInstance);

carInstance.changePrice(500);
// console.log(carInstance.getModal());
// console.log(carInstance.setModal('Q4'));
// console.log(carInstance.getModal());

console.log(carInstance.model);
carInstance.model = 'Q4';
console.log(carInstance.model);
