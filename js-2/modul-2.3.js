const logins = ['Mike', 'Oleg', 'Victor', 'Max'];

const findToLogin = function (allLogins, loginToFind) {
  // 1 variant
  // for (const login of allLogins) {
  //   if (login === loginToFind) {
  //     return 'I find this login!';
  //   }
  // }
  // return 'That login does not exist';
  // 2 variant
  // const message = allLogins.includes(loginToFind)
  //   ? 'I find this login!'
  //   : 'That login does not exist';
  // return message;

  return allLogins.includes(loginToFind)
    ? `I find this ${loginToFind} login!`
    : 'That login does not exist';
};

console.log(findToLogin(logins, 'Oleg'));
console.log(findToLogin(logins, 'Maria'));
// поменять регисры букв на противоположные
const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};
console.log(changeCase('fkrEFf'));
// переписываем
const title = 'Top 10 benefits of React framework';

const slugify = function (string) {
  // 1 вариант
  // const normalizedTitle = string.toLowerCase();
  // const wordsTitle = normalizedTitle.split(' ');
  // const slug = wordsTitle.join('-');
  // return slug;
  return string.toLowerCase().split(' ').join('-');
};
console.log(slugify(title));
// c произвольным количеством аргументов при вызове
// 1 вариант
// const fn = function () {
//   const args = Array.from(arguments);
//   for (const arg of args) {
//     console.log(arg);
//   }
// };
// 2 вариант
const fn = function (...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
    // console.log(arg);
  }

  return total;
};

console.log(fn(1, 4, 3, 5, 6));
console.log(fn(23, 54, 6));
// 3

const fnWithBenefits = function (text, b, ...args) {
  console.log(`${text} + ${b}`);
  console.log(args);
};

fnWithBenefits('Hello', 5, 3, 2, 2, 4);
// сравнить два массива на одинаковые числа
const filterNembers = function (array, ...args) {
  const uniqueElements = [];

  for (const arr of array) {
    if (args.includes(arr)) {
      console.log(`${arr} есть везде`);
      uniqueElements.push(arr);
    }
  }
  return uniqueElements;
};

console.log(filterNembers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
