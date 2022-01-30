// TODO: sort метод изменяет оригинальный массив
const numbers = [1, 9, 6, 2, 3];
// numbers.sort(); //по умолчанию по возростания сортирует по юникоду
numbers.sort((curEl, nextEl) => {
  return nextEl - curEl; //по убыванию
});
console.log(numbers);
const copy = [...numbers]; //чтобы не менять исходный массив
copy.sort();
console.log(copy);
console.log(copy.reverse()); //TODO:развернуть массив в обратном порядке

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
console.log(letters);

// кастомная сортировка сложных типов по игровому времени
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 210, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 48, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 940, points: 24, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 130, points: 34, online: false },
  { id: 'player-5', name: 'Genry', timePlayed: 410, points: 21, online: true },
];

const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});
console.table(sortedByBestPlayers);
// сортировка по первой букве имени
const byName = [...players].sort((a, b) => {
  const res = a.name[0] > b.name[0];
  if (res) {
    return 1;
  }
  if (!res) {
    return -1;
  }
});
console.table(byName);
console.log('abc'.charCodeAt(0));

// TODO: flat разглаживает массив на одн вложенность
// создает новый массив
const arrayFlat = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(arrayFlat.flat());
console.log(arrayFlat.flat(3));
console.log(arrayFlat);

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
// вместо этого
// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
// это
// const allTags = tweets.map(t => t.tags).flat();

// TODO: flatMap гладит один раз
// const allTags = tweets.flatMap(t => t.tags);
// console.log('allTags: ', allTags);
// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// console.log('tagsStats: ', tagsStats);
// сделаем ченнинг
const stats = tweets
  .flatMap(t => t.tags)
  .reduce((acc, tag) => {
    return {
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    };
  }, {});
console.log(stats);
