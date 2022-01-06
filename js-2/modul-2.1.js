const fn = function () {
  //  В переменной args будет полноценный массив
  const args = Array.from(arguments);
  console.log(args);
};
fn(2, 4, 5, 6);

const friends = ['Манго', 'Fruit', 'poly', 'alexander', 4, 5, 6];
console.log(friends.length);
console.table(friends);
const lastIndex = friends.length - 1;
console.log(friends[3]);
console.log(lastIndex);
// изменить элементы массива
for (let i = 0; i <= lastIndex; i += 1) {
  friends[i] += '-1';
}
// перебрать быстро массив
for (const friend of friends) {
  console.log(friend);
}
console.log(friends);
// посчитать общую сумму покупок в корзине
const cart = [54, 28, 105, 70, 92, 17, 120];
let totalCart = 0;

for (let i = 0; i < cart.length; i += 1) {
  // console.log(cart[i]);
  totalCart += cart[i];
}
for (const c of cart) {
  totalCart += c;
}
console.log('Total: ', totalCart);

// добавить налоги
for (let i = 0; i < cart.length; i += 1) {
  cart[i] = Math.round(cart[i] * 1.1);
}
console.log(cart);
// скрипт подсчитываюший сумму всех четных чисел в массиве
const numbersFun = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let totalFun = 0;
for (let i = 0; i < numbersFun.length; i += 1) {
  if (numbersFun[i] % 2 === 0) {
    console.log('Четное!');
    totalFun += numbersFun[i];
  }
}

for (const number of numbersFun) {
  if (number % 2 === 0) {
    totalFun += number;
  }
}
// логика от обратного
for (const number of numbersFun) {
  if (number % 2 !== 0) {
    console.log('Эту итерацию нужно пропустить', number);
    continue;
  }
  console.log(`${number} - четное!!!`);
  totalFun += number;
}
console.log(totalFun);
// поиск логина
const logins = ['butter', 'bread', 'knife', 'table'];
const loginToFind = 'knife';
// let messageLogin = `Пользователь ${loginToFind} не найден`;
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   if (login === loginToFind) {
//     messageLogin = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// перенесли в изначальную позицию месседж
// messageLogin = `Пользователь ${loginToFind} не найден` закоммент;
// }
// оптимизированная запись
// for (const login of logins) {
//   if (login === loginToFind) {
//     messageLogin = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }
// через инклюдс и тернарник
console.log(logins.includes(loginToFind));
const messageLogin = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден`
  : `Пользователь ${loginToFind} не найден`;
console.log(messageLogin);
// поиск самого маленького числа в массиве
const numAll = [52, 56, 34, 67, 25, 8, 34];
let smallestNum = numAll[0];
for (const number of numAll) {
  if (number < smallestNum) {
    smallestNum = number;
  }
}
console.log(smallestNum);
// объединяет все элементы массива в строку с запятыми
const words = ['I', 'Love', 'You', 'too'];
// под капотом
// let string = '';
// for (const word of words) {
//   string += word + ',';
// }
// // метод слайс не изменяет
// console.log(string.slice(0, string.length - 1));
// console.log(string);
// // по этому
// string = string.slice(0, string.length - 1);
const string = words.join(',');
console.log(string);
// скрипт меняющий регистр букв на противоположный
const stringWrong = 'JavaScript';
const letters = stringWrong.split('');
let stringInverse = '';
for (const letter of letters) {
  // if (letter === letter.toLowerCase()) {
  //   stringInverse += letter.toUpperCase();
  // } else {
  //   stringInverse += letter.toLowerCase();
  // }

  stringInverse +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log(stringInverse);
// сделать слак из строки для строки поиска
const title = 'Top 10 benefits of React framework';
const normalizedTitle = title.toLowerCase();
const wordsTitle = normalizedTitle.split(' ');
console.log(wordsTitle);
const slug = wordsTitle.join('-');
console.log(slug);
// короткая запись
const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);
// сосчитать сумму двух массивов
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const array3 = [3, 6, 7];
let totalArr = 0;
const arrays = array1.concat(array2, array3);
console.log(arrays);
for (const num of arrays) {
  totalArr += num;
}
console.log(totalArr);

//работа с капточками удалить добавить итд деструктивный метод массива
const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5'];
// Удаление по индексу
// const cardToRemove = 'Card-3';
// const indexRemove = cards.indexOf(cardToRemove);
// console.log(indexRemove);
// cards.splice(indexRemove, 1);
// console.log(cards);
// добавление по индексу
// const cardToInsert = 'Card-6';
// const indexInsert = 3;
// cards.splice(indexInsert, 0, cardToInsert);
// console.log(cards);
// обновление по индексу
const cardToUpdate = 'Card-4';
const cardReplace = 'Sun';
const indexUpdate = cards.indexOf(cardToUpdate);
cards.splice(indexUpdate, 1, cardReplace);
console.log(cards);
