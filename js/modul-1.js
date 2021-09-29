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
const maxi = 10;

for (let i = 0; i < maxi; i += 1) {
  console.log(`${maxi} % ${i} = `, maxi % i);
}
// прерываем цикл по условию
for (let i = 0; i < 10; i += 1) {
  if (i === 5) {
    console.log('Дошли до 5-й итерации, прерываем цикл!');
    break;
  }
  console.log(i);
}
// метод парс инт не изменяет сам по себе переменную, необходимо использовать лет  в этом случае
// и перезаписывать переменную.
let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth: ', elementWidth);
// возведение в степень через Math  и через альтернативу
const base = 2;
const power = 5;
console.log(Math.pow(base, power));
console.log(base ** power);
// генерация случайного числа
const colors = ['tomato', 'teal', 'yellow', 'black'];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
console.log(index);
const color = colors[index];
console.log(color);

// конкатенация строк
const me = 'я';
console.log('привет ' + me + ' Печкин');

// альтернатива шаблонные строки c интерполяцией
console.log(`привет ${me} Печкин`);
const textMe = `приятно ${me}`;
console.log(`привет ${me} Печкин ${textMe}`);

// если я хочу, чтобы первая буква была заглавной, а остальные строчными
let brand = 'samSuNG';
console.log(brand[0].toUpperCase());
console.log(brand.slice(1).toLowerCase());
brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
console.log(brand);

// входит ли нужное слово в эту строку includes
const blackListWord = ' распродажа';
const string1 = 'Да нечнется Распродажа';
const string2 = 'Веников нет';
console.log(string1.toLowerCase().includes(blackListWord));
console.log(string2.includes(blackListWord));

// результат, когда нет нужного куска текста -1
console.log('mango'.indexOf('num'));

console.log('10.7' > 5);