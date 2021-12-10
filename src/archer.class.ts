import Champion from './champion.class';

export default class Archer extends Champion{

	constructor(name: string) {
		super(name);
	}

	attack(champion: Champion): void | string{
		if (champion instanceof Archer) {
			return "Je ne peux pas m'attaquer"
		}
		if(this.HealthPoints == 0) {
			return "Je ne peux pas attaquer je suis mort"
		}
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

			console.log(this.getName() +' used his shield and attack you twice');
		}
	}

}