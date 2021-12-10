import Champion from './champion.class';

export default class Mage extends Champion {

	healing: number;
	superPotion: number;

	constructor(name: string) {
		super(name);
		this.healing = 3;
		this.superPotion = 100;
	}

	attack(champion: Champion): void | string {
		if (champion != this) {
			return "Je ne peux pas m'attaquer"
		}
		if(this.HealthPoints == 0) {
			return "Je ne peux pas attaquer je suis mort"
		}
		champion.decreaseHealthPoints(10);
		this.numberOfAttacks++;
	}

	defense(): void {
		if (this.shield) {
			this.shield = false;
			this.HealthPoints += 5;


			console.log(this.getName() +' used his shield');
		}
	}

	heal(): void {
		if(this.healing > 0) {
			if(this.HealthPoints + 20 >= 100) {
				this.HealthPoints = 100;
			}
			else {

				this.HealthPoints += 20;
			}

			console.log(this.getName() + 'Mage used potion');
			this.healing--;
		}
		if(this.numberOfAttacks >= 10) {
			this.HealthPoints = this.superPotion;
		}
	}
}
