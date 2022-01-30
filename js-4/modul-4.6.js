// вывести четные
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
numbers.forEach(number => {
  if (number % 2 === 0) {
    console.log(number);
  }
});
//создать функцию фильтрующую массив по условию от a до b
const filterRange = (arr, a, b) => {
  const res = [];
  arr.forEach(el => {
    if (el >= a && el <= b) {
      res.push(el);
    }
  });
  return res;
  // return arr.filter(el => el >= a && el <= b);
};
console.log(filterRange(numbers, 3, 7));

// принимает массив чиселт и возвращает среднее
const getAverage = num => {
  const total = num.reduce((acc, curEl) => acc + curEl);
  return total / num.length;
};
console.log(getAverage(numbers));

// уникальные элементы
const numUni = [1, 2, 3, 4, 3, 4, 6, 7, 8, 7, 5];
// способ из конспекта
// const unique = numUni.filter((num, i, arr) => arr.indexOf(num) === i);
// console.log(unique);
// способ Сереги
const unique = arr => {
  // 1 через фор ич
  // const res = [];
  // arr.forEach(el => {
  //   if (!res.includes(el)) {
  //     res.push(el);
  //   }
  // });
  // return res;
  // 2 через редьюс
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
};
console.log(unique(numUni));

//
const numbersSort = [9, 8, 100, 2, 301, 4, 5, 6, -100];
// console.log(numbersSort.sort()); //не верно
// что под капотом правильной записи
// console.log(
//   numbersSort.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     return 0;
//   }),
// );
// сокращенная правильная запись
console.log(numbersSort.sort((a, b) => a - b));

// рандомная сортировка
const shuffle = arr => {
  return arr.sort((a, b) => Math.random() - 0.5);
};
console.log('shuffle', shuffle(numbersSort));
console.log('shuffle', shuffle(numbersSort));

const arrUsers = [
  { id: 500, name: 'Kolya' },
  { id: 456, name: 'Oleg' },
  { id: 533, name: 'Dima' },
  { id: 356, name: 'Nikita' },
  { id: 242, name: 'Alex' },
  { id: 2, name: 'Gabriel' },
];

console.log(arrUsers.sort((a, b) => a.id - b.id));

// разделяет массив на части заданного размера
const data = [1, 2, 3, 4, 5, 6, 7];
// const tmpArr = [];
// const step = 2;
// for (let i = 0; i < data.length; i += step) {
//   tmpArr.push(data.slice(i, i + step));
// }

// console.log(tmpArr);
const chunk = (arr, step) => {
  // 1
  // const tmpArr = [];
  // for (let i = 0; i < arr.length; i += step) {
  //   tmpArr.push(arr.slice(i, i + step));
  // }
  // return tmpArr;
  // 2
  let tmpIndex = 0;
  return arr.reduce((acc, cur, i) => {
    if (tmpIndex === i) {
      acc.push(arr.slice(tmpIndex, tmpIndex + step));
      tmpIndex += step;
    }
    return acc;
  }, []);
};
console.log(chunk(data, 3));
