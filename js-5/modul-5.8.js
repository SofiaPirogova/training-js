// 1
function User(config = {}) {
  const { name, surname } = config;
  this.name = name;
  this.surname = surname;
}
User.prototype.getFullName = function () {
  return `${this.name} ${this.surname}`;
};

function Student({ name, surname, year } = {}) {
  User.call(this, { name, surname });
  this.year = year;
}

// console.log(worker.getSalary())
Student.prototype = Object.create(User.prototype);
Student.prototype.getCourse = function () {
  const date = new Date();
  console.log(date);
  const currentYear = date.getFullYear();
  console.log(currentYear);
  return currentYear - this.year;
};
console.dir(Student);
const petya = new Student({ name: 'Petr', surname: 'Morozov', year: 2019 });
console.log(petya);
console.log(petya.getFullName());
console.log(petya.getCourse());

// 2
const animal = { jumps: null };
const rabbit = { jumps: true };
Object.setPrototypeOf(rabbit, animal);
console.log(1, rabbit.jumps);

delete rabbit.jumps;
console.log(2, rabbit.jumps);

delete animal.jumps;
console.log(3, rabbit.jumps);

const head = {
  glasses: 1,
};
const table = {
  pen: 3,
};
const bed = {
  sheet: 2,
  pillow: 2,
};
const pockets = {
  money: 2000,
};
Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);
console.log(pockets);
console.log(pockets.pen);
console.log(pockets.glasses);

// 3
function Rabbit() {}
Rabbit.prototype = { eats: true };
const rabbit2 = new Rabbit();
console.log(rabbit2);

// 4
function Humster() {
  this.food = [];
}
Humster.prototype.found = function (something) {
  this.food.push(something);
};

const speedy = new Humster();
const lazy = new Humster();

speedy.found('яблоко');
speedy.found('орех');

console.log(speedy.food);
console.log(lazy.food);
