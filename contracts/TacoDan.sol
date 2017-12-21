pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract TacoDan is StandardToken {
  string public name = "TacoDan"; 
  string public symbol = "TCD";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 1000000000 * (10 ** decimals);

  function TacoDan() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
