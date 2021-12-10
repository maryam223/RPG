import Knight from '../src/knight.class';
import Mage from '../src/mage.class';
import Champion from '../src/champion.class';
import Archer from '../src/archer.class';

describe("Knight", () => {

	let knight: Knight;
	let mage: Mage;
	let champion: Champion;
	let archer: Archer;


beforeEach(() => {
		knight = new Knight("Maryam");
		mage = new Mage("Jeanne");
		archer = new Archer("Antonia");
		champion = new Champion("");
	})

	test("Le Chevalier attaque le mage et le mage se defend", () => {

		knight.attack(mage);
		mage.defense();
		expect(mage.HealthPoints).toBe(95)
	})

	test("Le Chevalier attaque le mage et le mage se guerit", () => {
		for( let i=0; i < 10; i++) {
			knight.attack(mage)
		}
		mage.heal();
		mage.heal();
		mage.heal();
		mage.heal();
		expect(mage.HealthPoints).toBe(60)
	})

	test("Le Chevalier attaque le mage et le mage meurt", () => {
		for( let i=0; i < 11; i++) {
			knight.attack(mage)
		}
		expect(mage.getHealthPoints()).toBe("Le Champion Jeanne est dead")
	})

	test("Le Mage attaque le chevalier et le chevalier se defend", () => {
		mage.attack(knight)
		knight.defense()
		expect(knight.HealthPoints).toBe(100)
	})

	test("Le Chevalier attaque l'archer et l'archer se defend", () => {
		for( let i=0; i < 2; i++) {
			knight.attack(archer)
			archer.defense(knight)
		}

		expect(archer.HealthPoints).toBe(85)
	})

	test("Le Mage attaque l'archer et l'archer se defend puis attaque 3 fois pour retrouver son bouclier", () => {
		mage.attack(archer);
		archer.defense(mage);
		for( let i=0; i < 3; i++) {
			archer.attack(mage);
		}
		mage.attack(archer);
		archer.defense(mage);
		expect(mage.HealthPoints).toBe(30)
	})

	test("Le Mage attaque l'archer et l'archer se defend puis attaque 2 fois et ne récupère pas son bouclier", () => {
		mage.attack(archer);
		archer.defense(mage);
		archer.attack(mage);
		archer.attack(mage);
		mage.attack(archer);
		archer.defense(mage);
		expect(mage.HealthPoints).toBe(60)
	})

	test("Le Chevalier s'attaque lui même", () => {
		knight.attack(knight);
		expect(knight.attack(knight)).toBe("Je ne peux pas m'attaquer")
	})

	test("Le Mage se guerit dès le départ", () => {
		mage.heal();
		expect(mage.HealthPoints).toBe(100)
	})


	test("Le Mage attaque le chevalier", () => {
		for( let i=0; i < 20; i++) {
			mage.attack(knight);
		}
		expect(knight.HealthPoints).toBe(0)
	})

	test("Le Chevalier attaque alors qu'il est mort", () => {
		for( let i=0; i < 20; i++) {
			mage.attack(knight);
		}
		knight.attack(mage);
		expect(knight.attack(mage)).toBe("Je ne peux pas attaquer je suis mort")
	})


})
