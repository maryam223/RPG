import Champion from './champion.class';

export default class Knight extends Champion {
	constructor(name: string) {
		super(name);
	}

	attack(champion: Champion): void | string {
		if (champion instanceof Knight) {
			return "Je ne peux pas m'attaquer"
		}
		if(this.HealthPoints == 0) {
			return "Je ne peux pas attaquer je suis mort"
		}

		champion.decreaseHealthPoints(10);
	}

	defense(): void {
		if (this.shield) {
			this.shield = false;
			this.HealthPoints += 10;

			console.log(this.getName() +' used his shield');
		}
	}

}
