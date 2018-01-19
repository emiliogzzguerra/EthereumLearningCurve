// Small script file to look into contracts, and compile the contracts
// We're going to use Solidity Compiler
// ABI is the interpretation layer of Solidity code

const path = require('path');
const fs = require('fs');
const solc = require('solc'); // Solidity compiler

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source, 1));

