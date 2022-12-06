export default [
  {
    question: "How can a smallest unit of ether called?",
    options: [
        { text: "Wei", check: true },
        { text: "GWei" },
        { text: "Sazbo" },
        { text: "Ether" },
        { text: "Finney" }
    ],
    type: 'radio',
    answer: "Source: https://docs.soliditylang.org/en/v0.8.16/units-and-global-variables.html",
    by: 'tomasfrancisco'
  },
  {
    question: "Contract C is deployed. When boom() is called. Which of the following is true.",
    code:`pragma solidity 0.8.15;

contract A {
  // empty
}

contract B is A {
  function boom() external {
    selfdestruct(payable(msg.sender));
  }
}

contract C is B {
  // empty
}
`,
    options: [
      { text: 'There are three contracts, A and B are destroyed, but C is not.' },
      { text: 'There is one contract. C is destroyed.', check: true },
      { text: 'There are three contracts, A and B and C are destroyed.', },
      { text: 'There are three contracts, B and C are destroyed but A is not.', },
      { text: 'Boom cannot be called because B was not deployed.', },
      { text: 'There are three contracts, B is destroyed, but A and C are not.', },
    ],
    type: 'radio',
    answer: `
Teniendo en cuenta que el enunciado solo menciona el deploy del contrato C, y según el apartado “Solidity 201” de Secureum Epoch 0:

![2.JPG](/2.jpg)

**Fuente**: [https://secureum.substack.com/p/solidity-201](https://secureum.substack.com/p/solidity-201)
    `,
    by: 'bengalaQ'
  },


  {
    question: "How can a smart contract change it's bytecode?",
    options: [
        { text: "If the constructor loads external bytecode, it can be redeployed with create2 and different bytecode after self destruct", check: true },
        { text: "Smart contracts bytecode can never be changed. Proxy contracts refer to other contracts which themselves are immutable, but a proxy contract can point to an arbitrary new contract." },
        { text: "After the contract has already been constructed, and extcodesize is greater than zero, solidity can use extcodecopy to modify its own bytecode" },
        { text: "Although smart contracts are technically immutable, their bytecode does change when storage variables are changed, but only according to how the variables are configured." },
        { text: "A proxy contract can change its bytecode" }
    ],
    type: 'radio',
    answer: `
- [ ]  Smart contracts bytecode can never be changed. Proxy contracts refer to other contracts which themselves are immutable, but a proxy contract can point to an arbitrary new contract.
    
**FALSE, it is true what it says about proxies, but bytecode associated to accounts can change**
    
- [ ]  After the contract has already been constructed, and extcodesize is greater than zero, solidity can use extcodecopy to modify its own bytecode
    
**FALSE, extcodecopy can be used to copy the bytecode of another contract but not to modify its own**
    
- [ ]  Although smart contracts are technically immutable, their bytecode does change when storage variables are changed, but only according to how the variables are configured.
    
**FALSE, storage is separate from bytecode**
    
- [x]  If the constructor loads external bytecode, it can be redeployed with create2 and different bytecode after self destruct
    
**TRUE! We can use selfdestruct and create2 to deploy a contract with a different bytecode**
    
- [ ]  A proxy contract can change its bytecode
    
**FALSE, proxies change their implementation address**    
`,
    by: 'adriro'
  },
  {
    question: "Which of the following variable types can be stored in memory?",
    options: [
        { text: "uint" },
        { text: "boolean" },
        { text: "struct", check: true },
        { text: "array", check: true },
        { text: "address" },
        { text: "the output of a hash" }
    ],
    type: 'checkbox',
    answer: `
In Solidity, the following variable types can be stored in memory:

  - struct
  - array
  
Note that other variable types, such as uint, address, and the output of a hash, are not valid for storage in memory. Instead, these types must be stored in storage.
`,
by: 'https://chat.openai.com/'
  }
]