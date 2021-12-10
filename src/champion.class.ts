export default class Champion {
	HealthPoints: number;
	shield: boolean;
	name: string;
	numberOfAttacks: number;

	constructor(name: string) {

		this.HealthPoints = 100;
		this.shield = true;
		this.name = name;
		this.numberOfAttacks = 0;
	}

	attack(champion: Champion): void | string {
		if(champion.getHealthPoints() <= 0) {
			return "Je ne peux plus attaquer" + this.name + " est dead";
		}
		if(this.HealthPoints == 0) {
			return "Je ne peux pas attaquer je suis mort";
		}
		champion.decreaseHealthPoints(10);
	}

	decreaseHealthPoints(pt: number): void {
		this.HealthPoints -= pt;

		if (this.HealthPoints <= 0) {
			this.HealthPoints = 0;

		}
	}

	heal(): void {

	}

	getHealthPoints(): number | string {
		if (this.HealthPoints <= 0) {
			return "Le Champion " + this.name + " est dead";

		} else {
			return this.HealthPoints;
		}


	}
	shieldBack(): void {
		if( this.numberOfAttacks == 3) {
			this.shield = true;
			this.numberOfAttacks = 0;
		}
	}

	getName(): string {
		return this.name;
	}

	defense(champion: Champion): void {

	}
}
