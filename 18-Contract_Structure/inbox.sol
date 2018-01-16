pragma solidity ^0.4.17; // Solidity compiler checks the version

contract Inbox { // Contract Definition (VERY SIMILAR TO A CLASS)
    string public message; // Storage variable of the contract, public specifies who can access this variable
    // There are also local variables    
    
    function Inbox(string initialMessage) public { // Constructor of the contract
        message = initialMessage;                  // It's run automatically when contract is run
    }
    
    // Functions
     
    function setMessage(string newMessage) public { 
        message = newMessage;
    }
    //keyword  fn name      fn type     return types  
    function getMessage() public view returns (string){
        return message;
    }
    
    /* Function type declarations
    * public - Anyone can call this function! 
    * private - Only our contract can call this function.
    * view - Returns data and does not modify the contract's data
    * constant - Returns data and does not modify the contract's data
    * pure - Function will not modify or even read the contract's data
    * payable - When someone calls this function they might send ether along
    */   
}