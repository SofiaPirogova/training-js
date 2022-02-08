// пример коллбэка функции
// функция высшего порядка
const fnA = function (message, callback) {
  console.log(message);
  console.log(callback);
  callback(100);
};
// функция обратного вызова
const fnB = function (number) {
  console.log('Welcome! fnB', number);
};
fnA('fna qweqwe', fnB);

// пример
const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};
// const add = function (x, y) {
//   return x + y;
// };
// const sub = function (x, y) {
//   return x - y;
// };
// doMath(2, 3, add);
// doMath(5, 3, sub);
// как инлайн функции
doMath(2, 3, function (x, y) {
  return x + y;
});
doMath(5, 3, function (x, y) {
  return x - y;
});

//кнопка регистрация событий
const buttonRef = document.querySelector('.js-button');
console.log(buttonRef);
const handleBtnClick = function () {
  console.log('клик по кнопке ' + Date.now());
};

buttonRef.addEventListener('click', handleBtnClick);

// геопозиция
const onPositionSuccess = function (position) {
  console.log('Вот твоя геопозиция');
  console.log(position);
};
const onGetPositionError = function (error) {
  console.log('Не смогли найти геопозицию');
  console.log(error);
};
window.navigator.geolocation.getCurrentPosition(
  onPositionSuccess,
  onGetPositionError,
);

// отложенныц код
const callbackTime = function () {
  console.log('Через 3 секунды внутри колбека в таймауте');
};
console.log('В коде перед таймаутом');

setTimeout(callbackTime, 2000);
console.log('В коде после таймаута');

// фильтр массива в новый массив
// функция высшего порядка
const filter = function (array, test) {
  const filteredArray = [];
  for (const el of array) {
    // console.log(el);
    // console.log(test(el));
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};
// больше или равно трем
// коллбэк функция обратного вызова
const callbackFilter = function (value) {
  return value >= 3;
};

console.log(filter([1, 2, 3, 4, 5], callbackFilter));
// меньше или равно четырем
// коллбэк функция обратного вызова
console.log(
  filter([1, 2, 3, 4, 5, 7, 8, 5, 4], function (value) {
    return value <= 4;
  }),
);
// по аналогии перебираем объект
const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];
// коллбэк функция обратного вызова
const callbackFruits = function (fruit) {
  return fruit.quantity >= 120;
};
const filterFruits = filter(fruits, callbackFruits);
console.log(filterFruits);

// Замыкание
const makeFnA = function (parametr) {
  const inner = 'Значение внутренней переменной функции makeFnA';
  const innerFunction = function () {
    console.log(parametr);
    console.log(inner);
    console.log('Это вызов innerFunction');
  };
  return innerFunction;
};
const makefnB = makeFnA(555);
makefnB();
console.log(makefnB);
// пример
// 1 простой вариант
// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} cook ${dish}`);
// };
// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// 2 замыкание
const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} cook ${dish}`);
  };
  return makeDish;
};
const mango = makeSheff('Mango');
mango('котлеты');
mango('пирожок');

const poly = makeSheff('Poly');
poly('чай');
poly('кофе');

// округлятор пример замыкания
const floatingPoint = 3.456886;
const someInt = Math.round(floatingPoint); //3
const withDecimals = Number(floatingPoint.toFixed(2)); //3.46

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};
const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.2344435));
console.log(rounder3(5.4435));
console.log(rounder2(7.2344435));
console.log(rounder3(0.344435));

// стрелочные функции
const add = function (a, b, c) {
  return a + b + c;
};

const add1 = (a, b, c) => a + b + c;

console.log(add(5, 10, 15));
console.log(add1(5, 10, 15));
