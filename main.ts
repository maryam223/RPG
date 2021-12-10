
import * as readline from 'readline';
import Knight from './src/knight.class';
import Mage from './src/mage.class';
import Champion from './src/champion.class';
import Archer from './src/archer.class';




class Main {
	private knight: Knight;
	private mage: Mage;
	private archer: Archer;

	constructor() {
		this.knight = new Knight("unknown");
		this.archer = new Archer("unknown");
		this.mage = new Mage("unknown");

		let championStr: string[] = [];
		let opponent: Champion[] = [];
		let champion1: Champion = new Champion('unknown');

		console.log("Welcome to the game");

		let rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		function getRandomInt(max: number) {
			return Math.floor(Math.random() * max);
		  }

		async function ask() {
			return new Promise<void> (resolve => {
			  rl.question('Which Champion do you want to be ? [Knight/Archer/Mage] ', (answer) => {
				switch(answer) {
					case 'Knight':
						championStr[0] = answer;
						console.log('Great ! You will be a Knight');

						let mageOpp: Mage = new Mage("Bowser");
						let arrowOpp: Archer = new Archer("Arrow");
						opponent.push(mageOpp, arrowOpp);

						console.log(`Your opponents are Mage ${opponent[0].getName()} and Archer ${opponent[1].getName()}`)
						break;
					case 'Archer':
						championStr[0] = answer;
						console.log('Great ! You will be an Archer');

						let knightOpp: Knight = new Knight("Zorro");
						let mageOpp2: Mage = new Mage("Voldemort");
						opponent.push(knightOpp, mageOpp2);

						console.log(`Your opponents are Knight ${opponent[0].getName()} and Mage ${opponent[1].getName()}`)
						break;
					case 'Mage':
						championStr[0] = answer;
						console.log('Great ! You will be a Mage');

						let arrowOpp2: Archer = new Archer("RobinHood");
						let knightOpp2: Knight = new Knight("Lancelot");
						opponent.push(arrowOpp2, knightOpp2);

						console.log(`Your opponents are Archer ${opponent[0].getName()} and Knight ${opponent[1].getName()}`)
						break;
					default:
						console.log('Invalid answer!');
				}
				resolve();
			  });

			});

		}
		async function ask2() {
			return new Promise<void> (resolve => {
			rl.question('Your Name ? ', (name) => {
				if(championStr[0] === "Mage") {
					console.log(`You're now Mage ${name} and you have 100 health points` );
					let mage1: Mage = new Mage(name);
					champion1 = mage1;
					console.log(champion1.getName());
				}
				else if(championStr[0] === "Knight") {
					console.log(`You're now Knight ${name} and you have 100 health points`);
				}
				else if(championStr[0] === "Archer") {
					console.log(`You're now Archer ${name} and you have 100 health points`);
				}
				resolve();
			  });

			});

		}
		async function ask3() {
			return new Promise<void> (resolve => {
				rl.question('Who do you want to attack ? [Knight/Archer/Mage] ', (answer) => {
					switch(answer) {
						case 'Knight':

							if(opponent[0] instanceof Knight){
								champion1.attack(opponent[0]);
								if(getRandomInt(10) % 2 == 0) {
									opponent[0].defense();

								}
								if(getRandomInt(15) % 2 == 0) {
									opponent[0].attack(champion1);
									console.log("on vous a attaqué");

								}
								console.log('Knight health points : ' + opponent[0].getHealthPoints());
								console.log('My health points : ' + champion1.getHealthPoints());
							} else {
								champion1.attack(opponent[1]);
								if(getRandomInt(10) % 2 == 0) {
									opponent[1].defense(champion1);

								}
								if(getRandomInt(15) % 2 == 0) {
									opponent[1].attack(champion1);
									console.log("on vous a attaqué");

								}
								console.log('Knight health points : ' + opponent[1].getHealthPoints());
								console.log('My health points : ' + champion1.getHealthPoints());
							}

							break;
						case 'Archer':

							if(opponent[0] instanceof Archer) {
								champion1.attack(opponent[0]);
								if(getRandomInt(10) % 2 == 0) {
									opponent[0].defense(champion1);

								}
								if(getRandomInt(15) % 2 == 0) {
									opponent[0].attack(champion1);
									console.log("on vous a attaqué");

								}
								console.log('Archer health points : ' + opponent[0].getHealthPoints());
								console.log('My health points : ' + champion1.getHealthPoints());
							} else {
								champion1.attack(opponent[1]);
								if(getRandomInt(10) % 2 == 0) {
									opponent[1].defense(champion1);

								}
								if(getRandomInt(15) % 2 == 0) {
									opponent[1].attack(champion1);
									console.log("on vous a attaqué");

								}
								console.log('Archer health points : ' + opponent[1].getHealthPoints());
								console.log('My health points : ' + champion1.getHealthPoints());
							}
							break;
						case 'Mage':

							if(opponent[0] instanceof Mage) {
								champion1.attack(opponent[0]);
								if(getRandomInt(10) % 2 == 0) {
									opponent[0].defense();
								}
								if(getRandomInt(15) % 2 == 0) {
									opponent[0].attack(champion1);
									console.log("on vous a attaqué");

								}
								console.log('Mage health points : ' + opponent[0].getHealthPoints());
								console.log('My health points : ' + champion1.getHealthPoints());
							} else {
								champion1.attack(opponent[1]);
								if(getRandomInt(10) % 2 == 0) {
									opponent[1].defense(champion1);

								}
								if(getRandomInt(15) % 2 == 0) {
									opponent[1].attack(champion1);
									console.log("on vous a attaqué");

								}
								if(getRandomInt(10) % 2 == 0) {
									opponent[1].heal();
								}
								console.log('Mage health points : ' + opponent[1].getHealthPoints());
								console.log('My health points : ' + champion1.getHealthPoints());
							}

							break;
						default:
							console.log('Invalid answer!');
					}
					resolve();
				  });

			});

		}

		async function start() {
			await ask();
			await ask2();
			while(champion1.getHealthPoints() > 0 || opponent[0].getHealthPoints() > 0 && opponent[1].getHealthPoints() > 0) {
				await ask3();
			}
			rl.close();
		}

		start();

	}


}

var main:Main = new Main();