const items = ['SAMSUNG', 'LG', 'ASUS', 'DELL', 'BENQ'];
const itemsInAlphabetOrder = [...items].sort();
const itemsInDesAlphabetOrder = [...items].sort().reverse();
const itemsInDesAlphabetOrder1 = [...items].sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});
console.log(itemsInAlphabetOrder);
console.log(itemsInDesAlphabetOrder);
console.log('itemsInDesAlphabetOrder1', itemsInDesAlphabetOrder1);

//TODO: localeCompare()
const boys = [
  { name: 'Oleg' },
  { name: 'Max' },
  { name: 'Victor' },
  { name: 'Nikita' },
  { name: 'Slava' },
  { name: 'Igor' },
];

const boysSort = [...boys].sort((a, b) => a.name.localeCompare(b.name));
console.log(boysSort);
const reverseBoysSort = [...boys].sort((a, b) => b.name.localeCompare(a.name));
const reverseBoysSort1 = [...boys]
  .sort((a, b) => a.name.localeCompare(b.name))
  .reverse();
console.log(reverseBoysSort);
console.log('reverseBoysSort1', reverseBoysSort1);

//уникальные в коллекции в массиве бъектов
const courses = [
  {
    name: 'Basic HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub Destop', 'GitHub'],
  },
  {
    name: 'Intermediate HTML+CSS',
    topics: ['VSCode', 'Terminal', 'Git', 'HTML', 'CSS', 'GitHub'],
  },
  {
    name: 'Basic JavaScript',
    topics: [
      'VSCode',
      'Type system',
      'Loops',
      'Fonctions',
      'Conditions',
      'Classes',
      'DOM',
      'Git',
      'GitHub',
    ],
  },
  {
    name: 'Intermediate  JavaScript',
    topics: [
      'VSCode',
      'NPM',
      'Bundlers',
      'Transpiling',
      'Promises',
      'Ajax',
      'Git',
      'GitHub',
    ],
  },
];

const allTopics = courses.flatMap(course => course.topics);
const uniqueTopics = allTopics.filter(
  (el, index) => allTopics.indexOf(el) === index,
);
// ченинг
const uniqueTopicsFilter = courses
  .flatMap(course => course.topics)
  .filter((el, index) => allTopics.indexOf(el) === index);
console.log(allTopics);
console.log(uniqueTopics);
console.log('uniqueTopicsFilter', uniqueTopicsFilter);

//берет четные цифры, суммирует их и умножает на последнюю цифру в массиве
const evenLast = numbers => {
  if (!numbers.length) return 0;
  return (
    numbers.reduce((acc, cur, ind) => (ind % 2 === 0 ? acc + cur : acc)) *
    numbers[numbers.length - 1]
  );
};
console.log('evenlast', evenLast([2, 3, 4, 5]));

//печатаем слова по цифрам
const switcher = array => {
  const alfa = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  const alfaArr = alfa.split(' ').reverse();
  // console.log(alfaArr);
  alfaArr.push('!', '?', ' ');

  const str = array.reduce((acc, cur) => (acc += alfaArr[Number(cur) - 1]), '');
  return str.toLowerCase();
};

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); //codewars

///Чтобы убрать все цифры в первом массиве, которые есть во втором массиве
const arrayDiff = (a, b) => {
  return a.filter(el => !b.includes(el));
};
console.log(arrayDiff([3, 4], [3]));

//6 kyu elimination tournament
const tourney = array => {
  const res = [array];

  const makeArr = curArr => {
    let tmp = 0;
    const arr = curArr.reduce((acc, cur, ind) => {
      if (ind % 2 === 0) {
        tmp = cur;
      } else {
        acc.push(tmp > cur ? tmp : cur);
      }
      return acc;
    }, []);

    if (curArr.length % 2 !== 0) {
      arr.unshift(tmp);
    }

    res.push(arr);
    // рекурсия, чтоюы функция зациклилась, вызывает себя же по условию до определенного момента
    if (arr.length > 1) {
      makeArr(arr);
    } else {
      return;
    }
  };
  makeArr(array);

  return res;
};

console.log(tourney([9, 5, 4, 7, 6, 3, 8, 2]));

//отфильтровали нечетные
const getEven = numbersArray => {
  return numbersArray.filter(num => num % 2 === 0);
};
console.log(getEven([2, 3, 4, 56, 6]));

//заполняем ноликами столько х , сколько во второй строке символов
// если вторая строка больше первой, то оставляем длину первой и заполняем 0
const flyBy = (lamps, drone) => {
  return ''
    .padStart(lamps.length < drone.length ? lamps.length : drone.length, 'o')
    .padEnd(lamps.length, 'x');
};
console.log(flyBy('xxxxxxxxx', '====T'));

// сумма цифр четная или нет
function oddOrEven(array) {
  const sum = array.reduce((acc, cur) => acc + cur, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
}
console.log(oddOrEven([1, 2, 3, 4]));

//
