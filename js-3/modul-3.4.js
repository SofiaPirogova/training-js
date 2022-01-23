// меньшее число в массиве
const min = arr => {
  return Math.min(...arr);
};

console.log(min([1, 2, 4, 6, 67, 7]));

// через rest
const calculateAverage = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    sum += args[i];
  }
  const average = sum / args.length;
  return average;
};
console.log(calculateAverage(1, 3, 4, 5, 6));
//
// вернуть копию по алфавиту
const alfa = ['Html', 'JavaScript', 'CSS'];
const sortArr = array => {
  // const alfaRight = Array.from(array);
  const alfaRight = [...array];
  console.log(alfaRight);
  // сортировка пузырьком
  for (let i = alfaRight.length; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (alfaRight[j] > alfaRight[j + 1]) {
        // const tmp = alfaRight[j];
        // alfaRight[j] = alfaRight[j + 1];
        // alfaRight[j + 1] = tmp;
        [alfaRight[j], alfaRight[j + 1]] = [alfaRight[j + 1], alfaRight[j]];
      }
    }
  }
  return alfaRight;
};
console.log(sortArr(alfa));
// 2
const user = {
  name: 'Oleg',
  age: 18,
  hobby: 'html',
  premiun: true,
};
const printUserData = userObj => {
  const entries = Object.entries(userObj);
  console.log(entries);

  for (const [key, value] of entries) {
    // const [key, value] = entry;
    console.log(`${key} - ${value}`);
    // console.log(`${entry[0]} - ${entry[1]}`);
  }
};
printUserData(user);

// 3
const user1 = {
  name: 'Oleg',
  age: 18,
  hobby: 'html',
  premiun: true,
  obj: { a: 1, b: 2 },
};
// const printUser = userObj => {
//   const { name, age} = userObj;
//   console.log(`name: ${name}, age: ${age}`);
// };
const printUser = ({ name, age }) => {
  console.log(`name: ${name}, age: ${age}`);
};
console.log(printUser(user1));

// функия возвращает новй объект без свойства одного
const getObjectWithoutProperty = (obj, propertyKey) => {
  // 1
  // const result = { ...obj };
  // delete result[propertyKey];
  // 2
  const { [propertyKey]: tmp, ...result } = obj;
  return result;
};
console.log(user1);
console.log(getObjectWithoutProperty(user1, 'hobby'));

//чтобы выводились в консоль только те, что заполнили в промпте
const name1 = prompt('Введите имя');
const age = prompt('Введите возвраст');
const salary = prompt('введите зарплату');
// 1
const obj = {};
if (name1) {
  obj.name1 = name1;
}
if (age) {
  obj.age = age;
}
if (salary) {
  obj.salary = salary;
}
// 2
// const obj = {
//   ...(name1 && { name1 });
//   ...(age && { age });
//   ...(salary && { salary });
// };
console.log(obj);
