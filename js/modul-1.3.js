const stars = 2;
let price;
// свитч работает только со строгим равенством
switch (stars) {
  case 1:
  case 2:
    price = 20;
    break;
  case 3:
    price = 50;
    break;
  case 4:
    price = 57;
    break;
  case 5:
    price = 120;
    break;
  default:
    console.log('Такого кол-ва звёзд нет');
}

console.log('price:' + price + '$');

const option = 12;
let message = '';

switch (option) {
  case 1:
    message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
    break;
  case 2:
    message = 'Курьер доставит завтра в 18:00';
    break;
  case 3:
    message = 'Посылка будет отправлена сегодня';
    break;
  default:
    message = 'Вам перезвонит менеджер';
}
console.log(message);

for (let i = 2; i < 5; i += 1) {
  console.log(i);
}
// создать переменные
const employers = 7;
const minSalary = 500;
const maxSalary = 5000;
let totalSalary = 0;
// перебрать работников в цикле
for (let i = 1; i <= employers; i += 1) {
  // сгенирировать случайную зп для каждого работника
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary,
  );
  console.log(`Зп работника номер ${i} - ${salary}`);
  // прибавить зп каждого сотрудника к финальной общей	зарплате
  totalSalary += salary;
}
// вывести в консоль общую зарплату
console.log('Сумма зарплат: ', totalSalary);

const min = 5;
const max = 13;
let total = 0;
// for (let i = min; i <= max; i += 1) {
//   // console.log(i);
//   if (i % 2 === 0) {
//     console.log('четное', i);
//     total += i;
//   }
// }
// логика от обратного правильная, сначала выкидываются нечетные числа
for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    // console.log('не четное', i);
    continue;
  }
  console.log('четное', i);
  total += i;
}
console.log(total);
// скидка в зависимости от стоимости покупки
let totalSpent = 2000;
let paymentSpent = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('бронзовый партнер, скидка 2%');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('серебряный партнер, скидка 5%');
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log('золотой партнер, скидка 10%');
  discount = 0.1;
} else {
  console.log('не партнер, скидка 0%');
}
paymentSpent = paymentSpent - paymentSpent * discount;
console.log(
  `Оформляем заказ на сумму ${paymentSpent} со скидкой ${discount * 100}`,
);

totalSpent += paymentSpent;
console.log(`Общая сумма потраченного в магазине ${totalSpent}`);

// часы
const minutesTotal = 2465;
let hours;
let minutes;
let result;
let days;
days = Math.floor(minutesTotal / 1440);
// флор приводит к наимеьшему целому числу
hours = Math.floor(minutesTotal / 60);
// падстарт добавляет нолики, стринг приводит к строке, иначе не работает подстарт
hours = String(hours).padStart(2, '0');
// остаток от деления
minutes = minutesTotal % 60;
minutes = String(minutes).padStart(2, '0');
// result = `${hours}:${minutes}`;

if (minutesTotal <= 1440) {
  result = `${hours}:${minutes}`;
} else {
  result = `${days}д ${hours}:${minutes}`;
}
console.log(result);

//кнопка прибавить
const btnAdd = document.querySelector('button[data-add]');
const valueInput = document.querySelector('input[data-value]');
let totalBtn = 0;
const outputEl = document.querySelector('.js-output span');
const resetBtn = document.querySelector('button[data-reset]');
// смотрим что написано на кнопке
console.log(btnAdd.textContent);
// console.log(outputEl);

btnAdd.addEventListener('click', () => {
  // проверяем что работает клик
  console.log('click hehehehe');
  // получаем введеное значение в инпут
  console.log(valueInput.value);
  // преобразуем значение в число
  const value = Number(valueInput.value);
  console.log(value);
  // прибавляем к друг другу числа
  totalBtn += value;
  outputEl.textContent = totalBtn;
  console.log(totalBtn);
  // очищаем поле от прошлого числа
  valueInput.value = '';
});
resetBtn.addEventListener('click', function () {
  totalBtn = 0;
  outputEl.textContent = totalBtn;
});
