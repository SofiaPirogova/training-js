//TODO: ченинг
const numbers = [1, 5, 2, 4, 3];
// старый способ слишними переменными
const greaterThenTwo = numbers.filter(num => num > 2);
const multByThree = greaterThenTwo.map(num => num * 3);
const sorted = multByThree.sort((a, b) => a - b);
console.log(sorted);
// ченнинг
const res = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);
console.log(res);
// найдем онлацн и отсортируем по ранк
const players = [
  { id: 'id-1', name: 'Mango', online: true, rank: 800 },
  { id: 'id-2', name: 'Poly', online: false, rank: 600 },
  { id: 'id-4', name: 'Ajax', online: true, rank: 100 },
  { id: 'id-3', name: 'Kiwi', online: true, rank: 400 },
];
const onlineAndSorted = players
  .filter(player => player.online)
  .sort((a, b) => a.rank - b.rank);
console.log('onlineAndSorted', onlineAndSorted);

//  пример ченнинга с объектами, важно вернуть что то, на чем будет вызываться метод
const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;
    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;
    return this;
  },
};
element.toggleHovered().changeClass('open');
console.log(element);

//TODO: lodash
//TODO: lodash библиотека
// https://github.com/lodash/lodash
//https://lodash.com/
console.dir(_);
// проверяет пустой ли
console.log(_.isEmpty({}));
console.log(_.isEmpty({ a: 1 }));

// get
const usr = {
  name: 'Mango',
  location: {
    coords: [1, 2],
    city: 'Lviv',
  },
};
// чтобы не было ошибок доступа к свойствам, если бы пришел поломанный объект
console.log(_.get(usr, 'location.city'));
// будет ошибка, если не придет location
console.log(usr.location.city);
// новая штука проверки без lodash
// ? если есть свойство, то делает дальше, если нет - underfined
console.log(usr?.location?.city);

// union() ищет уникальные элементы в массивах
console.log(_.union([1, 2, 3], [3, 4, 5], [5, 6, 7]));

// range() начало, до какого числа, какой шаг
console.log(_.range(1, 6, 2));

// sortBy() сортировка по нескольким свойствам
const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 30 },
  { user: 'barney', age: 34 },
];
console.log(_.sortBy(users, user => user.age));
console.log(_.sortBy(users, ['user', 'age']));

// sum()
console.log(_.sum([1, 2, 3, 4, 5]));

// sumBy()
const playersSortBy = [
  { id: 'player-1', name: 'Mango', timePlayed: 210, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 48, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 940, points: 24, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 130, points: 34, online: false },
  { id: 'player-5', name: 'Genry', timePlayed: 410, points: 21, online: true },
];
console.log(_.sumBy(playersSortBy, player => player.timePlayed));

// minBy()
// Самое маленькое время  у какого игрока Имя
console.log(_.minBy(playersSortBy, player => player.timePlayed).name);

// camelCase(), capitalize(),kebabCase(),lowerCase(),upperCase()
// преобразование строк
console.log(_.camelCase('lodash-is-very---good-library'));
