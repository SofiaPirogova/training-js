// https://developer.mozilla.org/en-US/docs/Web/Events

// 1
/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 * конвенция наименования
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * одинаково на всем проекте должны начинаться разработчики например onTargetButtonClick onButtonSubmit
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Вешаю слушателя события на целевую кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Снимаю слушателя события с целевой кнопки');

  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log('Клик по целевой кнопке');
}

// 2
// /*
//  * - Событие submit
//  * - Действия браузера по умолчанию
//  * - Свойство elements
//  * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
//  */

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log('onFormSubmit -> name', name);
//     console.log('onFormSubmit -> value', value);
//   });
// }

// 3
// /*
//  * Паттерн «Объект ссылок»
//  *
//  * События
//  * - focus и blur
//  * - input и change
//  * - Чекбоксы и свойство checked
//  */

// const refs = {
//   input: document.querySelector('.js-input'),
//   nameLabel: document.querySelector('.js-button > span'),
//   licenseCheckbox: document.querySelector('.js-license'),
//   btn: document.querySelector('.js-button'),
// };

// // refs.input.addEventListener('focus', onInputFocus);
// // refs.input.addEventListener('blur', onInputBlur);
// // refs.input.addEventListener('change', onInputChange);
// // refs.input.addEventListener('input', onInputChange);

// refs.input.addEventListener('input', onInputChange);
// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onInputFocus() {
//   console.log('Инпут получил фокус - событие focus');
// }

// function onInputBlur() {
//   console.log('Инпут потерял фокус - событие blur');
// }

// function onInputChange(event) {
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange(event) {
//   refs.btn.disabled = !event.currentTarget.checked;
// }

// 4
// /*
//  * Типы событий: keypress, keydown, keyup
//  * - Ограничения keypress
//  * - Свойства KeyboardEvent.key и KeyboardEvent.code
//  */

// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeypress);
// refs.clearBtn.addEventListener('click', onClearOutput);

// function onKeypress(event) {
//   // console.log('event.key: ', event.key);
//   // console.log('event.code: ', event.code);

//   refs.output.textContent += event.key;
// }

// function onClearOutput() {
//   refs.output.textContent = '';
// }

// 5
// /*
//  * События мыши
//  * - mouseenter и mouseleave (это ховер)
//  * - mouseover и mouseout
//  * - mousemove (chatty event - болтливое событие)
//  * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
//  * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
//  */

// const boxRef = document.querySelector('.js-box');

// // boxRef.addEventListener('mouseover', onMouseEnter);
// // boxRef.addEventListener('mouseout', onMouseLeave);
// // boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add('box--active');
// }

// function onMouseLeave(event) {
//   const box = event.currentTarget;
//   box.classList.remove('box--active');
// }

// function onMouseMove(event) {
//   console.log(event);
// }

// 6

// /*
//  * 1. Открыть и закрыть по кнопке
//  * 2. Закрыть по клику в бекдроп: onBackDropClick
//  * 3. Закрыть по ESC: onEscapeKeypress
//  *
//  * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
//  */

// const refs = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// };

// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackdropClick);

// function onOpenModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   document.body.classList.add('show-modal');
// }

// function onCloseModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   document.body.classList.remove('show-modal');
// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     console.log('Кликнули именно в бекдроп!!!!');
//     onCloseModal();
//   }
// }

// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     onCloseModal();
//   }
// }
