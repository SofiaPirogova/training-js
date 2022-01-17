const fan = {
  name: 'Molly',
  lastName: 'Spring',
  place: 7,
};

const arr = Object.keys(fan);
console.log(arr);
console.log(arr[0] + ' - ' + fan[arr[0]]);
console.log(Object.keys(fan)[0] + ' - ' + Object.values(fan)[0]);
console.log(fan.name);
const example = 'two-lesson';
// квадратные скобки потому что через точку нельзя использовать тире
console.log((fan[example] = 'Mango'));

for (let key of arr) {
  console.log(key + ' - ' + fan[key]);
}

// считаем зарплату общую работников
const salaries = {
  John: 100,
  Ann: 160,
  Peter: 130,
};

const arrValues = Object.values(salaries);
// console.log(arrValues);
let totalSalary = 0;
for (const el of arrValues) {
  totalSalary += el;
}
console.log(totalSalary);

/* Общая стоимость камней какого то вида*/
const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 3 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 200, quantity: 2 },
];
const calcTotalPrice = (stonesArr, stoneName) => {
  for (const el of stonesArr) {
    // 1
    // if (el.name === stoneName) {
    //   return el.price * el.quantity;
    // }
    // 2
    if (el.name !== stoneName) {
      continue;
    }
    return el.price * el.quantity;
  }
};
console.log(calcTotalPrice(stones, 'Изумруд'));

//  калькулятор
const calculator = {
  a: 0,
  b: 0,
  read(ai = 0, bi = 0) {
    //  взяли значение из вызова
    this.a = ai;
    this.b = bi;
  },
  sum() {
    // использовали полученные ключи для получения суммы
    return this.a + this.b;
  },
  // умножение
  mult() {
    return this.a * this.b;
  },
};
console.log(calculator);
calculator.read(5, 6);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mult());

// личный кабинет банка
const Transaction = {
  // положить
  DEPOSIT: 'deposit',
  // снять
  WITHDRAW: 'withdraw',
};

const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],

  // генерацию айдишника
  getRandomId() {
    // делает рандомное айди
    // return Math.round(Math.random(999999) * 1000000);
    // делает айди по порядку
    return this.transactions.length + 1;
  },

  // метод создает и возвращает объект транзакции.
  // Принимает сумму и тип транзакции
  createTransaction(amount, type) {
    return {
      id: this.getRandomId(),
      type,
      amount,
    };
  },
  // метод чтобы не могли ввести ничего кроме чисел в снятие и добавление
  validateAmount(amount) {
    // проверяем на тру или фолс
    // 1
    // if (typeof amount !== 'number') {
    //   console.log('Ошибка!Введите цифры!');
    //   return false;
    // } else {
    //   return true;
    // }
    // 2
    return typeof amount === 'number';
  },

  // метод отвечающий за добавление суммы к балансу
  // принимает сумму транзакции
  // вызывает createTransaction() для создания объекта транзакции
  // после чего добавляет его в историю транзакции
  deposit(amount) {
    // иф чтобы не могли ввести ничего кроме чисел - перенесли в отдельную функцию
    // 1
    // if (typeof amount !== 'number') {
    //   console.log('Ошибка!Введите цифры!');
    //   return;
    // }
    // 2
    // const isValid = this.validateAmount(amount);
    // console.log('isValid = ', isValid);
    // if (!isValid) return;
    // если фолс, то не допускает эту транзакцию
    // 3 запись покороче
    if (!this.validateAmount(amount)) return;

    this.balance += amount;
    const transac = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transac);
  },

  // метод отвечающий за снятие суммы с баланса
  // принимает сумму транзакции
  // вызывает createTransaction() для создания объекта транзакции
  // после чего доавляет его в историю транзакций
  // если amount больше чем текуший баланс, вывести сообщение
  // о том, что снятие такой суммы не возможно, недостаточно средств
  withdraw(amount) {
    // 1
    // if (typeof amount !== 'number') {
    //   console.log('Ошибка!Введите цифры!');
    //   return;
    // }
    // 2
    const isValid = this.validateAmount(amount);
    // console.log('isValid = ', isValid);
    if (!isValid) return;

    if (amount > this.balance) {
      return console.log('Недостаточно средств для выполнения операции');
    }
    this.balance -= amount;
    const transac = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transac);
  },

  // метод возвращает текущий баланс
  getBalance() {
    return this.balance;
  },
  // метод ищет и возвращает объект транзакции по id
  getTransactionDetails(id) {
    for (const transac of this.transactions) {
      // ищем транзакцию с нужным нам айди
      if (transac.id === id) {
        return transac;
      }
    }
    // если ничего не нашел
    return null;
  },

  // Метод возвращает количество средств
  // определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {
    let total = 0;
    for (const transac of this.transactions) {
      if (transac.type === type) {
        total += transac.amount;
      }
    }
    return total;
  },
};

// console.log(account.createTransaction(100, Transaction.DEPOSIT));
// изначально был какой аккаунт
console.log(JSON.stringify(account, null, 2)); //наглядно сверить
// положим 100р
account.deposit(100);
// пытаемся сбить с толку вводя строку
account.deposit('100');
account.deposit(80);
// смотрим как появилась транзакция в массиве транзакций
// console.log(JSON.stringify(account, null, 2)); // null,2 чтобы симпатично печаталось
console.log(account);
// снимем 50 р транзакция прошла
account.withdraw(50);
account.withdraw('30');
account.withdraw(20);
console.log(account);
// снимем 250р - транзакция не проходит, так как денег больше снимается,
// чем есть в балансе
account.withdraw(250);
console.log(account);
// смотрим баланс отдельно
console.log(account.getBalance());
// нашли конакретную транзацию по айди
console.log(account.getTransactionDetails(2));
// смотрим сумму по типу транзакции
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
