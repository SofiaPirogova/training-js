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
