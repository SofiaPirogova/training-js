const styles = ['Джаз', 'Блюз'];
console.log(styles);
// добавляем рок н ролл в конец массива
styles.push('Рок-н-ролл');
console.log(styles);
// ищем индекс блюза
// const indexStyle = styles.indexOf('Блюз');
const indexStyle = Math.floor(styles.length / 2);
// заменяем блюз на классику
styles.splice(indexStyle, 1, 'Классика');
console.log(styles);
// удаляем первый элемент
// styles.splice(0, 1);
styles.shift();
console.log(styles);
// добавляем вначало рэпп и регги
styles.unshift('Рэп', 'Рэгги');
console.log(styles);
//возвращать меньшее из чисел
// 1
// const min = function (a, b) {
//   let result = null;
//   if (a < b) {
//     result = a;
//   } else {
//     result = b;
//   }

//   return result;
// };
// console.log(min(20, 34));
// 2
// const min = function (a, b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// };
// 3
const min = function (a, b) {
  return a < b ? a : b;
};
console.log(min(20, 34));
// вывести в функции любой массив с  нумерацией строки каждый элемент
const array = ['Mango', 'Poly', 'Ajax'];
let messageArr = '';
// мой вариант
// const logItems = function (array) {
//   for (const arr of array) {
//     messageArr = `${array.indexOf(arr) + 1} - ${arr} `;
//     console.log(messageArr);
//   }
// };
// logItems(array);
// вариант Сереги
const logItems = array => {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
  return 'Функция выполнена';
};
console.log(logItems(array));

// ищет самое большое число в массиве
const findLargestNumber = function (numbers) {
  let biggestNum = numbers[0];
  for (const num of numbers) {
    if (num > biggestNum) {
      biggestNum = num;
    }
  }
  console.log(biggestNum);
};
findLargestNumber([1, 56, 35, 754, 35, 31, 23]);

// возвращает среднее значение чисел произвольное количество аргументов
const calculateAverage = function () {
  console.log(arguments);
  let sum = 0;
  for (const arg of arguments) {
    sum += arg;
  }
  // console.log(sum);
  const result = sum / arguments.length;
  // console.log(result);
  return result;
};
console.log(calculateAverage(1, 2, 3, 4, 5, 6));
// вернуть копию по алфавиту
const alfa = ['Html', 'JavaScript', 'CSS'];
// const alfa = [5, 3, 6, 7];
// console.log(alfa);
// копировали массив
const alfaRight = Array.from(alfa);
// сортировка пузырьком
for (let i = alfaRight.length; i > 0; i -= 1) {
  for (let j = 0; j < i; j += 1) {
    if (alfaRight[j] > alfaRight[j + 1]) {
      const tmp = alfaRight[j];
      alfaRight[j] = alfaRight[j + 1];
      alfaRight[j + 1] = tmp;
    }
  }
}
console.log(alfaRight);

// посчитать тех овец, что не спят
const sheeps = [true, false, true, true, false, true];
const countSheeps = function (sheeps) {
  let countSheep = 0;
  for (const sheep of sheeps) {
    if (sheep === true) {
      countSheep += sheep;
    }
  }
  return countSheep;
};
console.log(countSheeps(sheeps));
//
