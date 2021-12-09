import Champion from './champion.class';

export default class Archer extends Champion{

	constructor(name: string) {
		super(name);
	}

	attack(champion: Champion): void {
		champion.decreaseHealthPoints(10);
		this.numberOfAttacks++;
	}

	defense(champion: Champion): void {
		this.shieldBack();

		if(this.shield){
			this.shield = false;
			this.HealthPoints = this.HealthPoints + 5;
			champion.decreaseHealthPoints(10);
			champion.decreaseHealthPoints(10);
			this.numberOfAttacks = 0;
		}
	}

}