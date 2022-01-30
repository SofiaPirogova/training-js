// 1
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// const  [d, f] = b

// console.log(f);

// const array = [...a, c, d, ...f];

// console.log(array);
// // Result: ["a", "b", "c", 0, 1, 2, 3];

// 2
// const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// // Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// const b = [...a];

// // b.splice(3, 3, "a", "b", "c")
// // console.log(b);

// const c = b.splice(3, 3, 'a', 'b', 'c');
// console.log(c);
// const c = b.copyWithin(3, 0, 3);
// console.log(c);

// 3
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];
// const b = [...a];
// // const c = b.splice(5, 3, 0, 0, 0);
// const c = b.fill(0, 5, 8);
// console.log(b);

// // 4
// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];
// const b = [...a];
// // const c = b.lastIndexOf('n');
// // console.log(c);
// let index = 0;
// for (let i = 0; i < b.length; i += 1) {
//   if (b[i] === 'n') {
//     // console.log([i]);
//     index = i;
//   }
// }
// console.log(index);

// 5
// const a = [1, 2, 3, 4, 5, 6, 7];
// Result: [7, 6, 5, 4, 3, 2, 1];
// // const b = [];
// // for (let i = a.length - 1; i >= 0; i -= 1) {
// //   b.push(a[i]);
// // }
// // console.log(b);
// const b = [...a];
// const c = b.reverse();
// console.log(b);
// console.log(a);

// 6
// const a = [1, 2, [3, 4], [5, 6], 7];

// Result: [1, 2, 3, 4, 5, 6, 7];
// const b = [];

// for (let i of a) {
//   if (Array.isArray(i)) {
//     b.push(...i);
//   } else {
//     b.push(i);
//   }
// }
// console.log(b);

// const b = a.flat();

// console.log(b);

// 7
// Получить массив ключей
// function getKeys(object) {
//     let keys = [];
//     for (const key in object) {
//         keys.push(key);
//     }
//      return keys;
// }

// console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

// getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 });

// function getValues(object) {
//     let values = [];
//     for (const key in object) {
//         values.push(object[key]);
//     }
//     return values;
// }

// console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

// getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 })

// 8
// function reverseNumber(number) {
//   let reverseStrinr = '';
//   let number2 = 0;
//   let numberResult = 0;
//   if (number < 0) {
//     number2 = number * -1;
//   } else {
//     number2 = number;
//   }
//   const numberString = String(number2);

//   for (let i = numberString.length - 1; i >= 0; i -= 1) {
//     reverseStrinr += `${numberString[i]}`;
//   }
//   console.log(reverseStrinr);

//   numberResult = Number(reverseStrinr);
//   if (number < 0) {
//     numberResult = numberResult * -1;
//   }

//   return numberResult;
// }

// console.log(reverseNumber(-12345));
// console.log(reverseNumber(12345));

// 9
const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

function createObject(array) {
  const newObject = {};
  for (const key in array[0]) {
    newObject[key] = [];
  }
  console.log(newObject);
  for (const key in newObject) {
    for (const user of array) {
      newObject[key].push(user[key]);
    }
    newObject[key] = newObject[key].flat();
    // вот отсюда я мудрила

    let keyObj = newObject[key];

    let tmp = [];
    for (let i = 0; i < keyObj.length; i += 1) {
      if (i === keyObj.indexOf(keyObj[i])) {
        tmp.push(keyObj[i]);
      }
    }
    // console.log('tmp', tmp);
    newObject[key] = tmp;
    // до сюда мудрила
  }
  console.log(newObject);
}
createObject(users);
console.log(333);
