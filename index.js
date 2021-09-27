let text ='Sonya';
console.log('My name is: ', text);
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);
// приведение к числу
const valueA = '5';
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // 'number'
// Парсит из строки целое число
console.log(Number.parseInt('7px')); // 5
// Парсит из строки дробное число
console.log(Number.parseFloat('12.46qwe79')); // 12.46
// проверка на число
console.log(Number.isNaN(valueA));

const age = 10;
const type = age >= 18 ? 'adult' : 'child';
console.log(type);

let cost;
const subscription = 'free';
// оператор ветвлений свитч
switch (subscription) {
  case 'free':
    cost = 70;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(cost)
// цикл while выполняется пока условие соблюдено
let counter = 0;

while (counter < 10) {
  console.log('counter: ', counter);
  counter += 1;
}
// остаток от деления в цикле
const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}
// прерываем цикл по условию
for (let i = 0; i < 10; i += 1) {
  if (i === 5) {
    console.log('Дошли до 5-й итерации, прерываем цикл!');
    break;
  }
  console.log(i);
}