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

//
