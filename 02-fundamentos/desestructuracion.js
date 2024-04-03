const deadpool = {
	name: 'Wade',
	lastname: 'Winston',
	power: 'Regeneracion',
	age: 50,
	getName() {
		return `${this.name} ${this.lastname} ${power}`;
	},
};

// const name = deadpool.name;
// const lastname = deadpool.lastname;
// const power = deadpool.power;

// const { name, lastname, power, age = 0 } = deadpool;
// console.log(name, lastname, power, age);

// function printHero(hero) {
// 	const { name, lastname, power, age = 0 } = deadpool;
// 	console.log(name, lastname, power, age);
// }
// printHero(deadpool);

function printHero({ name, lastname, power, age = 0 }) {
	name = 'Carlos';
	console.log(name, lastname, power, age);
}

// printHero(deadpool);

const heros = ['Superman', 'Flash', 'Green Ligth', 'Wonder Woman'];

// const hero_1 = heros[0];
// const hero_2 = heros[1];
// const hero_3 = heros[2];

// console.log(hero_1, hero_2, hero_3);

// const [hero_1, hero_2, hero_3] = heros;
// console.log(hero_1, hero_2, hero_3);

const [, , hero_3, hero_4] = heros;
console.log(hero_3, hero_4);
