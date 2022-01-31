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

//
