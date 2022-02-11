// практика прототипы
const Worker = function (config = {}) {
  const { name, surname, rate, days } = config;
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;
  // cчитает сколько воркеров сделали с прототипа
  Worker.count = Worker.count + 1;
};
Worker.count = 0;
console.dir(Worker);

Worker.prototype.getFullName = function () {
  return `${this.name} ${this.surname}`;
};
Worker.prototype.getSalary = function () {
  return this.rate * this.days;
};

const worker = new Worker({
  name: 'Ivan',
  surname: 'Ivanov',
  rate: 10,
  days: 31,
});

console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName());
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
console.dir(worker);

//TODO: унаследование от Worker
const Boss = function ({ workers, ...restProps } = {}) {
  // const { name, surname, rate, days, workers } = config;
  // // унаследование от Worker через вызов контекста.
  // Worker.call(this, { name, surname, rate, days });
  Worker.call(this, restProps);
  this.workers = workers;
};
// помогает унаследовать методы, прототипное наследование
Boss.prototype = Object.create(Worker.prototype);
// изменяем метод
Boss.prototype.getSalary = function () {
  return this.rate * this.days * this.workers;
};

const boss = new Boss({
  name: 'Andrey',
  surname: 'Petrov',
  rate: 50,
  days: 30,
  workers: 3,
});
console.log(boss);
console.log(boss.getSalary());
console.log(boss.getFullName());
