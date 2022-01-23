const price = 500;
const keyName = 'time';
const keyValue = '12:30';

const playlist = {
  [keyName]: keyValue,
  name: 'Christmas',
  singer: 'Santa-Claus',
  rating: 100,
  traks: [
    'Christmas three',
    'Jingle Bells',
    'White Christmas',
    'Marshmello world',
  ],
  trackCount: 4,
  price,
  // что под капотом
  // getLastName: function () {
  //   console.log('Функция внутри объекта');
  // },
  // правильное написание
  getLastName(a) {
    console.log('Функция внутри объекта', a);
  },
};
// вызываем функцию внутри объекта
playlist.getLastName(5);

console.log(playlist);
playlist.text = 'Ohohohohoho, Merry Christmas!';
playlist.rating = 20;
// значение свойства
console.log(playlist.traks);

const propertyName = 'rating';
console.log(playlist.propertyName); //так не работает
console.log(playlist[propertyName]); //так работает

// 2
const playlist1 = {
  [keyName]: keyValue,
  name: 'Christmas',
  singer: 'Santa-Claus',
  rating: 100,
  tracks: [
    'Christmas three',
    'Jingle Bells',
    'White Christmas',
    'Marshmello world',
  ],
  // trackCount: 4,
  price,
  // поменять значение ключа
  changeName(newName) {
    console.log('Функция внутри объекта', newName);
    console.log('this inside', this);
    this.name = newName;
  },
  // изменить значение ключа, добавив в массив
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  // делаем подвижное свойство, чтобы цифра из него соответствовала
  // кол-ву значений в массиве из другого свойства
  // getTrackCount() {
  //   this.trackCount = this.tracks.length;
  // },
  getTrackCount() {
    return this.tracks.length;
  },
};
// вызываем функцию внутри объекта
console.log(playlist1);
playlist1.changeName('Lobster');
playlist1.addTrack('Deers with beers');
playlist1.addTrack('Merry me on Christmas ');
playlist1.updateRating(300);
console.log(playlist1.getTrackCount());
console.log(playlist1);

// 3
const feedback = {
  good: 7,
  neutral: 10,
  bad: 6,
};
// получает массив ключей и полусить доступ к ключам
const keys = Object.keys(feedback);
let totalFeedback = 0;
console.log(keys);
for (const key of keys) {
  console.log(key);
  // доступ к значениям
  console.log(feedback[key]);
  // totalFeedback += feedback[key];
}
console.log(totalFeedback);
// получает массив значений ключей
const values = Object.values(feedback);
console.log(values);
for (const value of values) {
  console.log(value);
  totalFeedback += value;
}
console.log(totalFeedback);
//
const friends = [
  { name: 'Alex', online: false },
  { name: 'Oleg', online: true },
  { name: 'Max', online: true },
  { name: 'Xandr', online: false },
];
console.table(friends);
// добавляет в конкретный обьект ключ
friends[2].love = 'I love you';
// добавляет во все объекты ключ
for (const friend of friends) {
  console.log(friend);
  friend.newPop = 555;
  console.log(friend.name);
}
console.table(friends);

// узнаем есть ли конкретный друг среди друзей
const findFriend = function (allfriends, name) {
  for (const friend of allfriends) {
    if (friend.name === name) {
      return `User ${name} is here!`;
    }
  }
  return `User ${name} is not found!`;
};
console.log(findFriend(friends, 'Xandr'));
console.log(findFriend(friends, 'Marina'));

// получаем все имена друзей
const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
};
console.log(getAllNames(friends));

//  получить массив всех друзей онлайн
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];
  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};
console.log(getOnlineFriends(friends));

// вернет объект с онлайн и оффлайн массивами друзей
const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    // 1
    // if (friend.online) {
    //   friendsByStatus.online.push(friend);
    // } else friendsByStatus.offline.push(friend);
    // 2
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
    // 3
    // friend.online
    //   ? friendsByStatus.online.push(friend)
    //   : friendsByStatus.offline.push(friend);
    // 4 продвинутый уровень
    //  friendsByStatus[friend.online ? 'online' : 'offline'].push(friend);
  }

  return friendsByStatus;
};
console.log(getFriendsByStatus(friends));
// посчитать количество ключей
const x = {
  a: 9,
  n: 8,
  u: 10,
  f: 3,
};
console.log(Object.keys(x).length);
