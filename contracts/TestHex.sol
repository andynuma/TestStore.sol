pragma solidity ^0.4.19;

contract TestHex{
    
    struct ToDo{
        uint num;
        bytes32 text;
        bytes comment;
    }
    
    //mapping (uint => ToDo) todos;
    ToDo[] public todos;
    
    mapping(address => uint ) userToToDoId;
    
    function createToDo(uint _num, bytes32 _text) public {
        uint id = todos.push(ToDo(_num, _text,"0x1"))-1;
        userToToDoId[msg.sender] = id; 
    }
    
    function setComment(uint _id, bytes _comment) public {
        todos[_id].comment = _comment;
    }
    
    function getComment(uint _id) public returns(bytes){
        return todos[_id].comment;
    }
}