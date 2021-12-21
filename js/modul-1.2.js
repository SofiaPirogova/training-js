const x1 = 18;
const x2 = 30;
const number = 19;
console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
console.log(
  `Число ${number} попадает в отрезок между ${x2} и ${x1}?`,
  number > x1 && number < x2,
);
console.log(
  `Число ${number} попадает до ${x1} или после ${x2}?`,
  number < x1 || number > x2,
);

const isOnline = true;
const isFriend = true;
const isDnd = false;
// isDnd = true - включен режим беспокоить - значит нельзя открыть чат
const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можно открыть чат?', canOpenChat);

const subscription = 'pro';
const canAccessContent = subscription === 'pro' || subscription === 'vip';
console.log('Есть доступ к контенту?', canAccessContent);

const nameUser = 'Pavel';
if (nameUser === 'Alex') {
  console.log('hello');
} else {
  console.log('bye');
}
// тернарный оператор
const resultAccessofName =
  nameUser === 'Alex' ? console.log('hello') : console.log('bye');

const salary = 5000;
if (salary <= 500) {
  console.log('Джун разработчик');
} else if (salary > 500 && salary <= 2000) {
  console.log('Мидл разработчик');
} else {
  console.log('Сеньор разработчик');
}

let balance = 3000;
const payment = 2050;

// alert(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);

// if (payment <= balance) {
//   const resultOfOperation = balance - payment;
//   console.log(`На счету осталось ${resultOfOperation} кредитов`);
// } else {
//   console.log('На счету недостаточно средств для проведения операции!');
// }

console.log(
  `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`,
);
if (payment <= balance) {
  balance -= payment;
  console.log(`На счету осталось ${balance} кредитов`);
} else {
  console.log('На счету недостаточно средств для проведения операции!');
}
console.log('Операция завершена');
