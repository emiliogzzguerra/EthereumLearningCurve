// Small script file to look into contracts, and compile the contracts
// We're going to use Solidity Compiler
// ABI is the interpretation layer of Solidity code

const path = require('path');
const fs = require('fs');
const solc = require('solc'); //  Solidity compiler

const lotteryPath = path.resolve(__dirname,'contracts','Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Lottery'];

