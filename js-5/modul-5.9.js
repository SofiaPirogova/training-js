// 1
class User {
  constructor(config = {}) {
    const { username, age, numberOfPosts } = config;
    this.username = username;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
  }
  // getInfo() {
  //   return `User ${this.username} is ${this.age} yers old has ${this.numberOfPosts} posts`;
  // }
  // аналог
  get info() {
    return `User ${this.username} is ${this.age} yers old has ${this.numberOfPosts} posts`;
  }
}

const myUser = new User({ username: 'Jack', age: 25, numberOfPosts: 12 });
console.log(myUser);
// console.log(myUser.getInfo());
// аналог через get
console.log(myUser.info);

// 2
class Storage {
  constructor(goods) {
    // если не пришел парамтер гудс, будет записан пустой массив
    this.items = goods || [];
  }

  addItem(newProduct) {
    this.items.push(newProduct);
  }
  getItems() {
    return this.items;
  }
  deleteItem(id) {
    this.items = this.items.filter(el => el.id !== id);
    // через for
    // let tmpArr = [];
    // for (const item of this.items) {
    //   if (item.id !== id) {
    //     tmpArr.push(item);
    //   }
    // }
    // this.items = tmpArr;
  }
}

const sklad = new Storage([{ id: 1, name: 'chear', price: 1000 }]);
console.log(sklad);
sklad.addItem({ id: 2, name: 'table', price: 100 });
sklad.addItem({ id: 3, name: 'bed', price: 600 });
sklad.addItem({ id: 4, name: 'sofa', price: 780 });
console.log(sklad);
console.log(sklad.getItems());
sklad.deleteItem(2);
console.log(sklad.getItems());

// 3
class Worker {
  constructor(config = {}) {
    const { name, lastName, rate, days } = config;
    this.name = name;
    this.lastName = lastName;
    this.rate = rate;
    this.days = days;
  }
  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
  getSalary() {
    return this.rate * this.days;
  }
}
const worker = new Worker({
  name: 'Petya',
  lastName: 'Kykyruzov',
  rate: 10,
  days: 30,
});
console.log(worker.getFullName());
console.log(worker.getSalary());

class Boss extends Worker {
  constructor(config = {}) {
    const { countOfWorkers } = config;
    super(config);
    this.countOfWorkers = countOfWorkers;
  }
}
const boss = new Boss({
  name: 'Victor',
  lastName: 'Kykyruzov',
  rate: 40,
  days: 20,
  countOfWorkers: 20,
});
console.log(boss);

// 4 статические свойства
class Notes {
  static PRIORITY = {
    high: 'HIGH',
    medium: 'MEDIUM',
    low: 'LOW',
  };
  constructor() {
    this.notes = [];
  }
  addNote(item) {
    this.notes.push(item);
  }
}

const myCollection = new Notes();
console.log(myCollection);
myCollection.addNote({ text: 'number 1', priority: Notes.PRIORITY.high });
console.log(myCollection);

// 5 приватные свойства

class Client {
  #login;
  #email;
  constructor({ email, login } = {}) {
    this.#email = email;
    this.#login = login;
  }
  get loginClient() {
    return this.#login;
  }
  get emailClient() {
    return this.#email;
  }

  set loginClient(newLogin) {
    this.#login = newLogin;
  }
  set emailClient(newEmail) {
    this.#email = newEmail;
  }
}
const myClient = new Client({ email: 'log@mail.ru', login: 'Parka' });
console.log(myClient);
console.log(myClient.loginClient);
myClient.loginClient = 'Lamp';
myClient.emailClient = 'Lamp@mail.ru';
console.log(myClient);
