// const clock = 20;
// if (clock >= 10 && clock < 15) {
//   alert('Ты в универе');
// } else if (clock >= 15 && clock < 22) {
//   alert('учится');
// } else if ((clock >= 22 && clock <= 24) || (clock >= 0 && clock < 9)) {
//   alert('сон');
// } else if (clock === 9) {
//   alert('дорога до универа');
// } else {
//   alert('Иди проспись!');
// }
const min = 2;
const max = 10;
// for (let i = max; i >= min; i -= 10) {
//   console.log(i);
// }
for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// цикл while переприсвает пока не напечатается по смыслу фалсе
// делаем так, чтобы при отмене и при больше 100 закрывалось окно
let num = 0;
while (num < 100) {
  const numb = prompt('Введи число больше 100');
  if (numb === null) {
    break;
  } else {
    num = Number(numb);
  }
}
// логируем пароль
const login = prompt('Введи логин');
console.log('login = ', login);

if (login === 'Админ') {
  const password = prompt('Введи пароль');
  console.log('password = ', password);
  if (password === 'Я главный') {
    alert('Здравствуйте!');
  } else if (password === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }
} else if (login === null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}
// бесконечные циклы плюсует вводимые числа,
// при нажатии на отмену выдает сумму
let total = 0;
// let value = 0;
while (true) {
  const promptInput = prompt('Введи число');
  if (promptInput === null) {
    break;
  } else {
    total += Number(promptInput);
    // value = Number(promptInput);
    // total += value;
  }
}
alert(`Общая суммма чисел равна ${total}`);
const productName = 'Repair droid';
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
