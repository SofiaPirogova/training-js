// 1
const each = function (array, callback) {
  const newArray = [...array];
  for (let i = 0; i < newArray.length; i += 1) {
    newArray[i] = callback(newArray[i]);
  }

  return newArray;
};
const arr = [1, 2, 3, 4];
const func = elem => {
  return elem + 1;
};
console.log(each(arr, func));
// аналог через мап
console.log(arr.map(func));

// 2 логируем вызовы замыкание
const makeCounter = () => {
  let counter = 0;

  return () => {
    counter += 1;
    console.log(counter);
  };
};
const count = makeCounter();
count();
count();
count();
count();
count();
count();

// замыкание
// const savePassword = password => {
//   return string => {
//     return string === password;
//   };
// };
const savePassword = password => string => string === password;

const checkPassword = savePassword('Пароль');

console.log(checkPassword('мой пароль'));
console.log(checkPassword('Пароль'));

// скидка замыкание
const saveDiscount = discount => {
  return price => {
    const newPrice = price - price * discount;
    return newPrice;
  };
};

const getPriceAfterDiscount = saveDiscount(0.3);
console.log(getPriceAfterDiscount(1000));

//умножение двух соседних чисел
const adjacentElementsProduct = array => {
  let result = array[0] * array[1];
  for (let i = 0; i < array.length; i += 1) {
    console.log('i:', array[i]);
    if (array[i] * array[i + 1] > result) {
      result = array[i] * array[i + 1];
      console.log(result);
    }
  }
  return result;
};
// console.log(adjacentElementsProduct([1, 2, 3])); //6
console.log(adjacentElementsProduct([1, 5, 10, 9])); //90

//
function gordon(a) {
  const arr = a.split(' ');
  const vowels = ['e', 'i', 'o', 'u'];
  let res = [];
  for (const word of arr) {
    let newWord = '';
    for (let i = 0; i < word.length; i += 1) {
      if (word[i] === 'a' || word[i] === 'A') {
        newWord += '@';
        continue;
      }
      if (vowels.includes(word[i].toLowerCase())) {
        newWord += '*';
        continue;
      }
      newWord += word[i].toUpperCase();
    }
    newWord += '!!!!';
    res.push(newWord);
  }
  return res.join(' ');
}
console.log(gordon('What feck damn cake'));
