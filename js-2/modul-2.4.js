// поиск самого длинного слова в строке
const text = 'Привет , я сегодня очень умная';
const findLongestWord = function (string) {
  const words = string.split(' ');

  let longest = words[0];
  for (const word of words) {
    if (longest.length < word.length) {
      longest = word;
    }
  }
  return longest;
};
console.log(findLongestWord(text));
//
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQl'];

const addCourse = name => {
  courses.push(name);
};
addCourse('MongoDB');
console.log(courses);

const removeCourse = (array, name) => {
  let position = array.indexOf(name);
  if (position < 0) {
    console.log('Нет такого курса');
    return;
  }
  array.splice(position, 1);
};

removeCourse(courses, 'CSS');
console.log(courses);

const updateCourse = (array, oldName, newName) => {
  let position = array.indexOf(oldName);
  if (position < 0) {
    console.log('Нет такого курса');
    return;
  }
  // 1 вариант
  // array[position] = newName;
  // 2 вариант лучше использовать, чтобы не было проблем с присвоением по ссылке
  array.splice(position, 1, newName);
};
updateCourse(courses, 'React', 'Node Js');
console.log(courses);
// 1 v
// const hello = name => {
//   console.log(`Hello, ${name || 'my guest'}!`);
// };
// 2 v
const hello = (name = 'my guest') => {
  console.log(`Hello, ${name}!`);
};
hello();
hello('Mark');
//необычный тернарник
const dogs = [
  'Little',
  'Iwant some more!',
  'That is a lot for me!',
  '101 dogs!',
];
const howManyDogs = (dogs, number) => {
  const respond =
    number <= 2
      ? dogs[0]
      : number <= 4
      ? dogs[1]
      : number == 101
      ? dogs[3]
      : dogs[2];
  return respond;
};

console.log(howManyDogs(dogs, 7));
// перевести строковые числа в числа
const stringToNumber = array => {
  const resultArr = Array.from(array);
  for (let i = 0; i < resultArr.length; i += 1) {
    resultArr[i] = Number(resultArr[i]);
  }
  return resultArr;
};
console.log(stringToNumber(['1', '3', '6']));
