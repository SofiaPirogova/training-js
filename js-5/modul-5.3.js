//  прототипы
const objC = {
  z: 5,
};
const objB = Object.create(objC);
objB.y = 2;

console.log(objC);
console.log(objB);
console.log(objB.z);

//класс, экзмепляр, интерфейс
// функция конструктор
const Car = function (brand, model, price) {
  // this.a = value;
  this.brand = brand;
  this.model = model;
  this.price = price;
};
const myCar = new Car('Audi', 'GQ', 3500);
console.log(myCar);
const myCar2 = new Car('Mersedes', 'LG', 10000);
console.log(myCar2);

const Car1 = function (config = {}) {
  // this.a = value;
  this.brand = config.brand;
  this.model = config.model;
  this.price = config.price;
};

const myCar1 = new Car1({ brand: 'BMW', model: 'GQ', price: 3500 });
console.log(myCar1);
const planet = {
  brand: 'Lada',
  model: 'Priora',
  price: 2500,
};
const myCar21 = new Car1(planet);
console.log(myCar21);

Car1.prototype.sayHi = function (newPrice) {
  console.log('Hiiii, Hello!');
  this.price = newPrice;
};
const myCar22 = new Car1();
myCar22.sayHi(1000);
console.log(myCar22);

//
const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};
const orangeUser = new User({ email: 'orange@mail.ru', password: 399395 });
console.log(orangeUser);
User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};
orangeUser.changeEmail('my-new-email.com');
console.log(orangeUser);
// статический метод
User.logInfo = function (obj) {
  //  в статических методах не нужен this
  console.log('email', obj.email);
};
User.logInfo(orangeUser);
User.message = 'I see you';
console.log(orangeUser);
