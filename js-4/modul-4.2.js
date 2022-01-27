// привет имя введенное в промт через колбэк
// const letMeSeeYourName = callback => {
//   const name = prompt('Имя пользователя');
//   callback(name);
// };
// const greet = name => {
//   console.log(`Привет ${name}`);
// };
// console.log(letMeSeeYourName(greet));

//
const makeProduct = (name, price, callback) => {
  const obj = {
    id: Math.round(Math.random() * 1000000),
    name,
    price,
  };
  callback(obj);
  // return obj;
};
const showProduct = product => {
  console.log(product);
};
makeProduct('chear', 1000, showProduct);

//
function makeDish(sheffName) {
  return function (dish) {
    console.log(`${sheffName} cook ${dish}`);
  };
}

const newMakeDish = makeDish('Oleg');
newMakeDish('pizza');

//
const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  },
};
product.showPrice();
