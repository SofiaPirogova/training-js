const books = {
  tag: 'Mango',
  showThis() {
    console.log(this);
  },
  showTitle() {
    console.log(this.tag);
  },
};

books.showThis();

const x = function () {
  const y = function (color) {
    return (this.color = color);
  };

  const sweater = {
    color: 'teal',
  };

  sweater.updateColor = y;
  sweater.updateColor('red');
  return sweater;
};
console.log(x());
// сложна
const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log(this);
    return (this.color = color);
  };
  return changeColor;
};
const updateColor = makeChangeColor();
// updateColor('yellow');

const hat = {
  color: 'blue',
  updateColor,
};
// console.log(hat.updateColor);
hat.updateColor('orange');
console.log(hat);

// call, bind, apply
// метод call вызывает функцию в контектсте конкретного объекта
const showThis = function (a, b, c, d) {
  console.log(a, b, c, d);
  console.log('showThis', this);
};
showThis();
const objA = {
  a: 5,
  b: 10,
};
showThis.call(objA, 10, 20, 30, 40, 50);
//ничем не отличается кроме синтаксиса
showThis.apply(objA, [10, 20, 30, 40, 50]);

const changeColors = function (color) {
  console.log(this);
  this.color = color;
};
const hatSweet = {
  color: 'black',
  quantity: 5,
};
changeColors.call(hatSweet, 'orange');
console.log(hat);
const sweater = {
  color: 'green',
};
changeColors.call(sweater, 'blue');
console.log(sweater);
// bind копия функции с привязанным контекстом
const changeHatColor = changeColors.bind(hat);
changeHatColor('yellow');
console.log(hat);
// фиксим
// передаем колбек сохраняя привязку к контексту
const counter = {
  value: 0,
  increment(value) {
    console.log(this);
    this.value += value;
  },
  decrement(value) {
    this.value -= value;
  },
};
const updateCounter = function (value, operation) {
  operation(value);
};
updateCounter(10, counter.increment.bind(counter));
// updateCounter(10, counter.decrement); так не работает
updateCounter(4, counter.decrement.bind(counter));
console.log(counter);

//кнопки увеличить и уменьшить
const counterForUs = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

decrementBtn.addEventListener('click', function () {
  console.log('Click');
  counterForUs.decrement();
  console.log(counterForUs);
  valueEl.textContent = counterForUs.value;
});
incrementBtn.addEventListener('click', function () {
  console.log('Click +');
  counterForUs.increment();
  console.log(counterForUs);
  valueEl.textContent = counterForUs.value;
});
