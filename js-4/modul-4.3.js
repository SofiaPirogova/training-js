const numbers = [5, 10, 15, 20, 25];
//TODO: замена for
numbers.forEach(
  function (number, index, array) {
    console.log(number);
    // console.log(this);
  },
  // { a: 5, b: 10 },
);

console.log(numbers);

//TODO: MAP
const doubleNams = numbers.map(number => {
  console.log(number);
  return number * 2;
});
console.log(numbers);
console.log('doubleNams:', doubleNams);
//
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 210, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 48, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 940, points: 24, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 130, points: 34, online: false },
  { id: 'player-5', name: 'Genry', timePlayed: 410, points: 21, online: true },
];
const playerName = players.map(player => {
  return player.name;
});
const playersIds = players.map(player => player.id);
console.log('playerName', playerName);
console.log('playersIds', playersIds);
const res = players.map(({ name, online }) => ({ name, online }));
console.log('res', res);

const updatedPlayersPoint = players.map(player => {
  return { ...player, points: player.points * 1.1 };
});
console.log('updatedPlayersPoint', updatedPlayersPoint);

//  меняем свойства по айдишнику создавая измененный массив
const playerIdToUpdate = 'player-3';
// 1
// const updatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     console.log('Нашли кого нужно обновить');
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// });
// 2
const updatedPlayers = players.map(player =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player,
);
console.log('updatedPlayers', updatedPlayers);

//TODO: filter поиск всех верных, удовлетворяющих условию
const numbersFilter = [5, 10, 15, 20, 25];
const filterNum = numbersFilter.filter(number => {
  return number > 15;
});
console.log('filterNum', filterNum);

const isOnlinePlayers = players.filter(player => player.online);
const isOfflinePlayers = players.filter(({ online }) => !online);
console.log('isOnlinePlayers', isOnlinePlayers);
console.log('isOfflinePlayers', isOfflinePlayers);

const hardcorePlayers = players.filter(player => player.timePlayed > 250);
console.log('hardcorePlayers', hardcorePlayers);

//TODO: find поиск первого верного
const unicumNumber = numbers.find(number => number === 10);
console.log('unicumNumber', unicumNumber);

const playerWithId = players.find(player => player.id === playerIdToUpdate);
console.log('playerWithId:', playerWithId);

// пример в функции
const findPlayerById = (allPlayer, playerId) => {
  return allPlayer.find(player => player.id === playerId);
};
console.log('findPlayerById: ', findPlayerById(players, 'player-4'));

//TODO: every работает на тру фолс, все ли тру или фолс
const isAllOnline = players.every(player => player.online);
console.log('isAllOnline: ', isAllOnline);

// TODO: some если хотя бы один удовлетворяет, вернет тру
const isAnyOnline = players.some(player => player.online);
console.log('isAnyOnline: ', isAnyOnline);

// TODO: reduce
const numbersReduce = [5, 10, 15, 20, 25];
const totalNum = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);
console.log('totalNum', totalNum);

//суммировать зарплаты
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0,
);
console.log('totalSalary: ', totalSalary);
//
const playersRed = [
  { id: 'player-1', name: 'Mango', timePlayed: 210, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 48, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 940, points: 24, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 130, points: 34, online: false },
  { id: 'player-5', name: 'Genry', timePlayed: 410, points: 21, online: true },
];
const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0,
);
console.log('totalTimePlayed', totalTimePlayed);
//  корзина товаров
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalCart = cart.reduce((total, { price, quantity }) => {
  return total + price * quantity;
}, 0);
console.log('totalCart: ', totalCart);

//получить массив всех курсов
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
const allTags = tweets.reduce((tags, tweet) => {
  // так будет ругаться линтер
  // tags.push(...tweet.tags);
  // return tags;
  // так заебца
  return [...tags, ...tweet.tags];
}, []);
console.log('allTags: ', allTags);
// введем статистику тегов
// 1 линтеры кричат
// const tagsStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});
// 2 имутабельно
const tagsStats = allTags.reduce((acc, tag) => {
  // if (acc[tag]) {
  //   return { ...acc, [tag]: acc[tag] + 1 };
  // }
  // return { ...acc, [tag]: 1 };

  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
console.log('tagsStats: ', tagsStats);
