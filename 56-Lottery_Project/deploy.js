// Take some compiled code, and deploy the contract into a network

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'best boring mass pen uphold defense hamster bless ivory rifle enough call',
	'https://rinkeby.infura.io/Q7nAXyOxqwAoAc180ozo'
);

const web3 = new Web3(provider);

const deploy = async () => { 
	// Watch accounts unlocked by provider
	const accounts = await web3.eth.getAccounts();

	console.log('Accounts available: ', accounts);
	console.log('Attempting to deploy from account: ', accounts[0]);

	//													ABI
	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode })
		.send({ gas: '1000000', from: accounts[0] });

	console.log('Our contract is deployed in the address:\n');
	console.log(result.options.address);
};

deploy();