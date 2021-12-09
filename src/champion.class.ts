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

	decreaseHealthPoints(pt: number): void {
		this.HealthPoints -= pt;

		if (this.HealthPoints <= 0) {
			this.HealthPoints = 0;

		}
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
}
