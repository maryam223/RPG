import Champion from './champion.class';

export default class Mage extends Champion {

    healing: number;

	constructor(name: string) {
		super(name);
        this.healing = 3;
	}

	attack(champion: Champion): void {
		champion.decreaseHealthPoints(10);
	}

	defense(): void {
		if (this.shield) {
			this.shield = false;
			this.HealthPoints += 5;
		}
	}

    heal(): void {
        if(this.healing > 0) {
            this.HealthPoints += 20;
            this.healing--;
        }
    }
}
