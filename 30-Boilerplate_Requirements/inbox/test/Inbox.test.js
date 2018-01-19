//Interact with contract through js

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // This is the class
					  //This changes if we want to connect to for example Rinkeby or other ethereum networks
const web3 = new Web3(ganache.provider()); // This is the instance of Web3


class Car {
	park() {
		return 'stopped';
	}

	drive() {
		return 'vroom';
	}
}
	  // TestID
describe('CarWithoutBeforeEach', () => {
	it('can park', () => {
		const car = new Car();
					//ValueProducedByCode,ValueWeThinkItShouldBe
		assert.equal(car.park(), 'stopped');
	});

	it('can drive', () => {
		const car = new Car();

		assert.equal(car.drive(), 'vroom');
	});
});

let car; //First, undefined

beforeEach(() => {
	car = new Car(); // Each time this runs, car is assigned a fresh new car
});
	  // TestID
describe('CarWithBeforeEach', () => {
	it('can park', () => {
		assert.equal(car.park(), 'stopped');
	});

	it('can drive', () => {
		assert.equal(car.drive(), 'vroom');
	});
});













