import Champion from './champion.class';

export default class Knight extends Champion {
	constructor(name: string) {
		super(name);
	}

	attack(champion: Champion): void {
		champion.decreaseHealthPoints(10);
	}

	defense(): void {
		if (this.shield) {
			this.shield = false;
			this.HealthPoints += 10;
		}
	}

}
