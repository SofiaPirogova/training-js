import productJs from './product-6.1.js';
console.log(productJs);
// 1
const navEl = document.querySelector('.navigation');
console.log(navEl);
// добавила класс
navEl.classList.add('super-cool');
// удалила класс
navEl.classList.remove('super-cool');
// меняет класс
// navEl.classList.replace('navigation', 'pirog');
// есть ли такой класс у элемента
console.log(navEl.classList.contains('dfvf'));

// выбрать все с одним селектором
// const navLinksEl = navEl.querySelectorAll('.nav_link');
const navLinksEl = document.querySelectorAll('.navigation .nav_link');
console.log(navLinksEl);

// 2
const imageEl = document.querySelector('.hero__image');
console.log('imageEl', imageEl);
console.log(imageEl.src);

const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => {
  imageEl.src =
    'https://vplate.ru/images/article/orig/2019/04/serye-koty-harakter-i-tonkosti-uhoda-7.jpg';
  imageEl.alt = 'Это новый котик';
  console.log(imageEl);
  // добавляет и убирает класс в навигации
  navEl.classList.toggle('qwerty');
});

const heroTitle = document.querySelector('.hero__title');
console.log(heroTitle.textContent);
heroTitle.textContent = 'Я сладкий пирожочек';

// одно и тоже
console.log(imageEl.getAttribute('alt'));
console.log(imageEl.alt);
// удалить атрибут
// imageEl.removeAttribute('src');

const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.log(actions[0].dataset.action);
console.log(actions[1].dataset.action);
console.log(actions[2].dataset.action);

// ищем и заменяем класс у элемента с href portfolio
const currentPageUrl = './portfolio';
const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);
console.log(linkEl);
linkEl.classList.add('site-nav__link--current');

//  навигация по Дому.
const ulNavEl = document.querySelector('.site-nav');
// const firstNavItemEl = ulNavEl.querySelector('.site-nav__item');
const firstNavItemEl = ulNavEl.firstElementChild;
console.log(firstNavItemEl);
console.log(ulNavEl.children);
console.log(ulNavEl.children[1]);

//TODO: создавать новое
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Сделай мне Кусь';
console.log(titleEl);
// document.body.appendChild(titleEl);

const cucumberEl = document.createElement('img');
cucumberEl.src = 'https://a.d-cd.net/b897615s-1920.jpg';
cucumberEl.alt = 'cucumber';
cucumberEl.width = 340;
// document.body.appendChild(cucumberEl);

//TODO: вставка нескольких элементов
const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(cucumberEl);
heroEl.append(titleEl, cucumberEl);

// сразу два элемента повесить в дом дерево
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинетик';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);
// ulNavEl.appendChild(navItemEl);
ulNavEl.insertBefore(navItemEl, ulNavEl.firstElementChild);
// ulNavEl.insertBefore(navItemEl, ulNavEl.children[1]);
// ulNavEl.insertBefore(navItemEl, ulNavEl.lastElementChild);

//TODO: создание коллекций элементов
const colorPickerContainerEl = document.querySelector('.js-color-picker');

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#689708B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
// 1кнопка
// const option = colorPickerOptions[0];
// const buttonEl = document.querySelector('button');
// buttonEl.type = 'button'
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;
// массив кнопок

// cстарый способ
// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];
//   const newButtonEl = document.createElement('button');
//   newButtonEl.type = 'button';
//   newButtonEl.textContent = option.label;
//   newButtonEl.classList.add('color-picker__option');
//   newButtonEl.style.backgroundColor = option.color;

//   elements.push(newButtonEl);
// }
// console.log(elements);

// colorPickerContainerEl.append(...elements);

// новый способ
const elements = colorPickerOptions.map(option => {
  const newButtonEl = document.createElement('button');
  newButtonEl.type = 'button';
  newButtonEl.textContent = option.label;
  newButtonEl.classList.add('color-picker__option');
  newButtonEl.style.backgroundColor = option.color;
  return newButtonEl;
});
colorPickerContainerEl.append(...elements);

//TODO: переделываем на функцию, чтобы можно было повторить с другими разметками
const makeColorPickerOptions = options => {
  return options.map(option => {
    const newButtonEl = document.createElement('button');
    newButtonEl.type = 'button';
    newButtonEl.textContent = option.label;
    newButtonEl.classList.add('color-picker__option');
    newButtonEl.style.backgroundColor = option.color;
    return newButtonEl;
  });
};

const newElements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...newElements);

//  coздаем карточку продукта
const productCard = {
  name: 'Paper',
  description:
    'Lorem6 dsfvjoi svsikninebf dvsvfjiojpiviomvf jodfbd.v erfvjojefn.brjoj',
  price: 2000,
  available: true,
  onSale: true,
};

const productCardEl = document.createElement('article');
productCardEl.classList.add('product');
const nameCardEl = document.createElement('h2');
nameCardEl.classList.add('product__name');
nameCardEl.textContent = productCard.name;

const descrCardEl = document.createElement('p');
descrCardEl.classList.add('product__descr');
descrCardEl.textContent = productCard.description;

const priceCardEl = document.createElement('p');
priceCardEl.classList.add('product__price');
priceCardEl.textContent = `Цена: ${productCard.price}`;

productCardEl.append(nameCardEl, descrCardEl, priceCardEl);
imageEl.after(productCardEl);

console.log(productCardEl);

//TODO: работа с файлом из импорта
// создание одного элемента
// и в разметку пихание коллекции
const makeProductCard = ({ name, description, price }) => {
  const productCardEl = document.createElement('article');
  productCardEl.classList.add('product');
  const nameCardEl = document.createElement('h2');
  nameCardEl.classList.add('product__name');
  nameCardEl.textContent = name;

  const descrCardEl = document.createElement('p');
  descrCardEl.classList.add('product__descr');
  descrCardEl.textContent = description;

  const priceCardEl = document.createElement('p');
  priceCardEl.classList.add('product__price');
  priceCardEl.textContent = `Цена: ${price}`;

  productCardEl.append(nameCardEl, descrCardEl, priceCardEl);

  return productCardEl;
};
console.log(makeProductCard(productJs[1]));

const elementsCard = productJs.map(makeProductCard);
console.log(elementsCard);

const productsContainerEl = document.querySelector('.js-products');
productsContainerEl.append(...elementsCard);

//TODO: парс строк
const title2El = document.querySelector('.title2');
console.log(title2El.textContent);
console.log(title2El.innerHTML);
// перезаписывает все внутренности элемента
title2El.innerHTML = '<a href= "../modul-5.html"> site site site</a>';

//TODO: добавление через insertAdjacentHTML операция не деструктивная
title2El.insertAdjacentHTML(
  // 'beforebegin',
  // 'afterend',
  // 'afterbegin',
  'beforeend',
  '<a href= "../modul-5.html"> white pink blue</a>',
);
 