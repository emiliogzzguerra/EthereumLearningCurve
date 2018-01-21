//Interact with contract through js

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); 
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
	// Get a list of all accounts
	accounts = await web3.eth.getAccounts();

	// Use one of those accounts to deploy
	// the contract

	// Deployment breakdown:            teaches web3 which objects inbox has
	// returns a javascript ready object in the actual blockchain
	inbox = await new web3.eth.Contract(JSON.parse(interface)) 

	// tells web3 we want to deploy a new copy of this contract w arguments
	// for the constructor function of Inbox.sol
	// creates object that can then be deployed!
		.deploy({ data: bytecode, arguments: ['Hi there!'] }) 

	// instructs web3 to send a transaction that creates this contract
	// from this account with this ammount of gas
		.send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', ()=>{
	it('deploys a contract', ()=>{
		console.log(inbox);
	});
});
