import { books } from './books.js';
console.log(books);
const divEl = document.getElementById('root');
// console.log(divEl);
const divLeftEl = document.createElement('div');
const divRightEl = document.createElement('div');

divEl.append(divLeftEl, divRightEl);

divLeftEl.classList.add('divLeft');
divRightEl.className = 'divRight';

const titleEl = document.createElement('h1');
titleEl.textContent = 'Библиотекарск';
divLeftEl.appendChild(titleEl);

const listLeftEl = document.createElement('ul');
const btnAddLeftEl = document.createElement('button');
btnAddLeftEl.textContent = 'Добавить';

divLeftEl.append(listLeftEl, btnAddLeftEl);
btnAddLeft.addEventListener('click', addBook);
// наполнить список книг

function renderList() {
  const booksListMarkup = books
    .map(
      ({ title }) =>
        `<li><p class="bookName">${title}</p><button type="button" data-action="edit">Редактировать</button><button type="button" data-action="delete">Удалить</button></li>`,
    )
    .join('');
  listLeftEl.insertAdjacentHTML('afterbegin', booksListMarkup);
  // псевдомассив сделали все элементы с классом bookName
  const bookName = document.querySelectorAll('.bookName');

  // console.log(bookName);
  // у псевдомассива есть forEach
  bookName.forEach(el => el.addEventListener('click', onRenderPreview));

  const btnEdit = document.querySelectorAll("button[data-action='edit']");
  const btnDelete = document.querySelectorAll("button[data-action='delete']");
  btnEdit.forEach(el => el.addEventListener('click', onEditBook));
  btnDelete.forEach(el => el.addEventListener('click', onDeleteBook));
}
renderList();

function onRenderPreview(event) {
  // console.log(event.target);
  // нашли объект книги, по клику на название слева
  const findBook = books.find(
    ({ title }) => event.target.textContent === title,
  );
  // console.log(findBook);
  const markup = bookMarkup(findBook);
  // console.log(markup);
  divRightEl.innerHTML = '';
  divRightEl.insertAdjacentHTML('afterbegin', markup);
}

function bookMarkup({ title, author, img, plot }) {
  return `<div>
		 <h2>${title}</h2>
		 <p>${author}</p>
		 <img src="${img}" alt="Обложка книги ${title}">
		 <p>${plot}</p>
	 </div>`;
}

function onEditBook(event) {
  const editBtn = event.target;
  const titleEdit = editBtn.previousElementSibling;
  const findeBook = books.find(({ title }) => titleEdit.textContent === title);
}
function onDeleteBook(event) {}
function addBook() {
  const newBook = {
    id: String(Date.now()),
    title: '',
    author: '',
    img: '',
    plot: '',
  };
  const markUp = createForm();
  divRight.innerHTML = '';
  divRight.insertAdjacentHTML('afterbegin', markUp);
}
function createForm() {
  return `<form>
    <label>
        Title
        <input name="title">
    </label>
    <label>
        Author
        <input name="author">
    </label>
    <label>
        Image
        <input name="img">
    </label>
    <label>
        Description
        <input name="plot">
    </label>
    <button type="button">Save</button>
</form>`;
}
