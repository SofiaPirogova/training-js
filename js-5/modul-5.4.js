// плагин для кнопок увеличить и уменьшить
// прототип
const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._value = initialValue;
  this._step = step;
  this._rootSelector = rootSelector;

  this._refs = this._getRefs(rootSelector);
  this._bindEvents();
  this.updateValueUI();
};

// получаем доступ к селекторам div и кнопкам
CounterPlugin.prototype._getRefs = function (rootSelector) {
  // console.log(rootSelector);
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');
  // console.log(refs.container);
  // console.log(refs.incrementBtn);
  return refs;
};

// привязываем логику увеличить уменьшить к событию клик
CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    this.increment();
    // обновляем значение посередине текст контента
    this.updateValueUI();
  });
  this._refs.decrementBtn.addEventListener('click', () => {
    this.decrement();
    this.updateValueUI();
  });
};

// логика увеличить и уменьшить кнопок
CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

//обновление значения текстового контента по середине
CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

// экземпляры
new CounterPlugin({ rootSelector: '#counter-1', step: 10 });
new CounterPlugin({ rootSelector: '#counter-2', step: 5 });
new CounterPlugin({ rootSelector: '#counter-3', step: 2, initialValue: 100 });
// const counter1 = new CounterPlugin({ rootSelector: '#counter-1', step: 10 });
// const counter2 = new CounterPlugin({ rootSelector: '#counter-2', step: 5 });
// const counter3 = new CounterPlugin({ rootSelector: '#counter-3', step: 2 });
// console.log(counter1);
// // counter1.increment();
// // counter1.decrement();
// // counter1.decrement();
// // console.log(counter1);
// console.log(counter2);
// console.log(counter3);
