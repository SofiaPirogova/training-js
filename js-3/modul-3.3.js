// const x = [1, 2, 5];
// const y = [3, 6, 7];
// // const z = y.concat(x);
// // распылили массивы в один в обратном порядке, аналог конката spread
// const z = [104, ...y, ...x];
// console.log(z);
// // найти наименьшую температуру
// const temps = [34, 56, 2, 64, 23, 45];
// console.log(Math.min(...temps));

// const a = { x: 1, y: 2 };
// const b = { X: 0, z: 3 };
// // старый способ распыления объектов
// // const c = Object.assign({}, a, b);
// // или
// // const c = {};
// // Object.assign(c,a,b);
// const c = { ...a, name: 'Mango', ...b };
// console.log(c);

// // деструктуризация
// const playlist = {
//   name: 'Bla',
//   rating: 5,
//   tracks: [1, 2, 3],
//   trackCount: 3,
//   stats: {
//     followers: 250,
//     views: 3049,
//     likes: 343,
//   },
// };
// //причина почему была придумана деструктуризация
// // console.log(
// //   playlist.name,
// //   playlist.rating,
// //   playlist.tracks,
// //   playlist.trackCount,
// // );

// // улучшенный вид
// // const {
// //   rating,
// //   tracks: christmasTracks = [2, 7, 5, 4],
// //   author = 'Oleg',
// // } = playlist;
// // console.log(rating, christmasTracks, author);

// // деструктуризация вложенных объектов
// // const { name, rating, tracks, trackCount, stats } = playlist;
// // const { followers, views, likes } = stats;
// // console.log(views);
// //более лаконичный способ
// const {
//   name: nameBla,
//   rating,
//   tracks,
//   trackCount,
//   stats: { followers, views, likes },
// } = playlist;

// console.log(nameBla, rating, tracks, trackCount, followers, views, likes);
// // пропустить в массиве деструктуризация
// const rgb = [234, 133, 24];
// const [red, , blue] = rgb;
// console.log(red, blue);
// //
// const authors = {
//   kiwi: 2,
//   poly: 2,
//   ajax: 5,
//   mango: 4,
// };

// const ratings = Object.values(authors);
// console.log(ratings);
// // console.log(Math.max(...ratings));
// const entries = Object.entries(authors);
// console.log(entries);
// for (const entry of entries) {
//   // (const [name,rating] of entries)
//   const [name, rating] = entry;
//   // расшифровка строки выше
//   // const name = entry[0];
//   // const rating = entry[1];
//   console.log(name, rating);
// }

// const showPlaylist = function (userPlaylist) {
//   const { name, rating, tracks, trackCount, stats } = userPlaylist;
//   console.log(name, rating, tracks, trackCount, stats);
// };
// showPlaylist(playlist);

// //пример с разметкой
// const profile = {
//   avatar:
//     'https://нокса.рф/wa-data/public/shop/products/98/25/2598/images/25234/25234.750.JPG',
//   name: 'Von',
//   tag: 'smekalka',
//   location: 'London',
//   stats: {
//     followers: 5664,
//     views: 3455,
//     likes: 3453,
//   },
// };

// const makeProfileMarkup = function (userProfile) {
//   const {
//     avatar = 'https://sazhaemvsadu.ru/wp-content/uploads/2016/07/2769212065785fe2159dd04.51940508.jpg',
//     name,
//     tag,
//     location = 'Planet Earth',
//     stats: { followers, views, likes },
//   } = userProfile;
//   return `<div>
//    <img src ="${avatar}" alt = "user avatar" width = 200px />
//    <p>${name}<span>@${tag}</span></p>
//    <p>Location: ${location}</p>
//    <ul>
//      <li>Folloцers: ${followers}</li>
//      <li> Views: ${views}</li>
//      <li>Likes: ${likes}</li>
//    </ul>
//   </div>`;
// };

// const markup = makeProfileMarkup(profile);
// console.log(markup);
// // вставляем в начало  тега боди
// document.body.insertAdjacentHTML('afterbegin', markup);

// корзина товаров
const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return; //чтобы не выполнялся код ниже
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name) {
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const { price, quantity } of this.items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
console.table(cart.getItems());
console.log(cart.getItems());
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 70 });
cart.add({ name: 'lemon', price: 70 });
cart.add({ name: 'tomato', price: 80 });
cart.add({ name: 'tomato', price: 80 });
cart.add({ name: 'tomato', price: 80 });
cart.add({ name: 'orange', price: 20 });

console.table(cart.getItems());
console.log('Total:', cart.countTotalPrice());

cart.remove('tomato');
console.table(cart.getItems());
cart.clear();
console.log(cart.getItems());
