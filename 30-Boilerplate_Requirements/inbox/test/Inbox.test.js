const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = 'Hi there!';

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	inbox = await new web3.eth.Contract(JSON.parse(interface)) 
		.deploy({ 
			data: bytecode, 
			arguments: [INITIAL_STRING] 
		}) 
		.send({ from: accounts[0], gas: '1000000' })

	inbox.setProvider(provider);
});

describe('Inbox', ()=>{
	// Make sure we've successfully launched the contract
	it('deploys a contract', ()=>{
		assert.ok(inbox.options.address);
	});

	it('has a default message', async ()=>{ // Async cause we're calling a method
		// Methods contains all the methods, message is the function, and finally
		// first set of () we pass arguments, 
		// second () is to customize the way that function gets called 
		const message = await inbox.methods.message().call();

		assert.equal(message, INITIAL_STRING);
	});

	it('can change the message', async ()=>{ 
		await inbox.methods.setMessage('Emilio').send({ from: accounts[0] });
		const message = await inbox.methods.message().call();
		assert.equal(message,'Emilio')
	});
});
