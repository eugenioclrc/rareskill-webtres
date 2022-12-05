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
    ***Teniendo en cuenta que el enunciado solo menciona el deploy del contrato C, y según el apartado “Solidity 201” de Secureum Epoch 0:***

![2.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/801e0c40-5cc9-499f-aaee-f228e57b5dc0/2.jpg)

**Fuente**: [https://secureum.substack.com/p/solidity-201](https://secureum.substack.com/p/solidity-201)
    `,
  },
]