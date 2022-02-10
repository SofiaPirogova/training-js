// наследование
class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    return (this.xp += amount);
  }
}
const mango = new Hero({ name: 'Mango', xp: 1000 });
console.log(mango);
mango.gainXp(500);

class Mage extends Hero {
  constructor({ spells, ...rest } = {}) {
    super(rest);
    this.spells = spells;
  }
  cast() {
    console.log(`${this.name} кидает ${this.spells}`);
  }
}
const tomato = new Mage({
  name: 'tomato',
  xp: 900,
  spells: ['abra', 'cadabra'],
});
console.log(tomato);
tomato.cast();
tomato.gainXp(700);

class Warrior extends Hero {
  constructor({ name, xp, weapon }) {
    super({ name, xp });

    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}
const avocado = new Warrior({
  name: 'avocado',
  xp: 150,
  weapon: 'stick',
});
console.log(avocado);
avocado.gainXp(1000);
console.log(avocado);
avocado.attack();

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);
    this.warcry = warcry;
  }
  babyRage() {
    console.log(this.warcry);
  }
}
const kiwi = new Berserk({
  name: 'kiwi',
  xp: 500,
  weapon: 'plug',
  warcry: 'Waaaaaa!',
});
console.log(kiwi);
kiwi.babyRage();
kiwi.attack();
kiwi.gainXp(20);
console.log(kiwi);
