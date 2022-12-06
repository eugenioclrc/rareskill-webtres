export default [
	{
		question: 'How can a smallest unit of ether called?',
		options: [
			{ text: 'Wei', check: true },
			{ text: 'GWei' },
			{ text: 'Sazbo' },
			{ text: 'Ether' },
			{ text: 'Finney' }
		],
		type: 'radio',
		answer: 'Source: https://docs.soliditylang.org/en/v0.8.16/units-and-global-variables.html',
		by: 'tomasfrancisco'
	},
	{
		question: 'Contract C is deployed. When boom() is called. Which of the following is true.',
		code: `pragma solidity 0.8.15;

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
			{ text: 'There are three contracts, A and B and C are destroyed.' },
			{ text: 'There are three contracts, B and C are destroyed but A is not.' },
			{ text: 'Boom cannot be called because B was not deployed.' },
			{ text: 'There are three contracts, B is destroyed, but A and C are not.' }
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
			{
				text: 'If the constructor loads external bytecode, it can be redeployed with create2 and different bytecode after self destruct',
				check: true
			},
			{
				text: 'Smart contracts bytecode can never be changed. Proxy contracts refer to other contracts which themselves are immutable, but a proxy contract can point to an arbitrary new contract.'
			},
			{
				text: 'After the contract has already been constructed, and extcodesize is greater than zero, solidity can use extcodecopy to modify its own bytecode'
			},
			{
				text: 'Although smart contracts are technically immutable, their bytecode does change when storage variables are changed, but only according to how the variables are configured.'
			},
			{ text: 'A proxy contract can change its bytecode' }
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
		question: 'Which of the following variable types can be stored in memory?',
		options: [
			{ text: 'uint' },
			{ text: 'boolean' },
			{ text: 'struct', check: true },
			{ text: 'array', check: true },
			{ text: 'address' },
			{ text: 'the output of a hash' }
		],
		type: 'checkbox',
		answer: `
In Solidity, the following variable types can be stored in memory:

  - struct
  - array
  
Note that other variable types, such as uint, address, and the output of a hash, are not valid for storage in memory. Instead, these types must be stored in storage.
`,
		by: 'https://chat.openai.com/'
	},
	{
		question: "What is Ethereum's primary hash function?",
		type: 'radio',
		options: [
			{ text: 'keccak256', check: true },
			{ text: 'md5' },
			{ text: 'sha1' },
			{ text: 'sha256' },
			{ text: 'sha2' }
		],
		answer: `[https://www.oreilly.com/library/view/mastering-ethereum/9781491971932/ch04.html#:~:text=Ethereum's Cryptographic Hash Function%3A Keccak,Institute of Science and Technology](https://www.oreilly.com/library/view/mastering-ethereum/9781491971932/ch04.html#:~:text=Ethereum's%20Cryptographic%20Hash%20Function%3A%20Keccak,Institute%20of%20Science%20and%20Technology).`,
		by: 'nicobevi'
	},
	{
		question: "What is Ethereum's primary hash function?",
		type: 'radio',
		options: [
			{ text: 'keccak256', check: true },
			{ text: 'md5' },
			{ text: 'sha1' },
			{ text: 'sha256' },
			{ text: 'sha2' }
		],
		answer: `[https://www.oreilly.com/library/view/mastering-ethereum/9781491971932/ch04.html#:~:text=Ethereum's Cryptographic Hash Function%3A Keccak,Institute of Science and Technology](https://www.oreilly.com/library/view/mastering-ethereum/9781491971932/ch04.html#:~:text=Ethereum's%20Cryptographic%20Hash%20Function%3A%20Keccak,Institute%20of%20Science%20and%20Technology).`,
		by: 'nicobevi'
	},

	{
		question: 'What is the difference between these two functions?',
		code: `
contract Difference {
	uint256 val;
	uint256 val2;
	
	function a(uint256 x) external {
		require(x < 10)
		val = x;
		val2 = x - 1;
	}

	function b(uint256 x) external {
		val = x;
		require(x < 10)
		val2 = x - 1;
	}

}
`,
		type: 'checkbox',
		options: [
			{ text: 'There may be unexpected behavior if x = 0', check: true },
			{
				text: "If x is greater than 10, the values of val and val2 won't change in function a but val will change in function b."
			},
			{ text: "If x is greater than 10, the values won't change in either function.", check: true },
			{ text: 'Function a will potentially save the user gas compared to b', check: true },
			{ text: 'Function b will potentially save the user gas compared to a' }
		],
		answer: `
**si x es igual a 0 podria existir un comportamiento inesperado, dependiendo de la version de solidity podria haber un underflow**

**si x es mayor a 10 los valores no van a cambiar en ninguna de las dos funciones por que al no cumplir el require revierte toda la transaccion, y las transacciones son atomicas, se corren todas o no se corren**

**La funcion a gasta potencialmente menos gas que la b por que el require corta antes con la evaluacion de la transaccion** ??`,
		by: '0x4non'
	},
	{
		question: 'See the smart contract below. What is the storage slot of y?',
		code: `
contract Difference {
	uint128 x;
	uint128 y;
	uint256 z;
	
}
`,
		type: 'radio',
		options: [
			{ text: 'It is the keccack256 of the smart contract address concatenated with 0x01' },
			{ text: '2' },
			{ text: '3' },
			{ text: '0', check: true },
			{ text: '1' },
			{ text: 'It is the keccack256 of the smart contract address concatenated with "y"' }
		],
		answer: `
Ethereum smart contract storage is a mapping uint256 to uint256. In this case the compiler will pack the first two elements into 1 slot (x, y) and the z value into another slot, in total 2 slots (0 and 1)
**Source:** [https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy-3ea](https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy-3ea)
`,
		by: 'ivaniuss'
	},
	{
		question: 'When a smart contract is verified on etherscan, which of the following is true?',
		type: 'radio',
		options: [
			{ text: 'If a contract is verified on etherscan, then you can trust the authors are honest' },
			{
				text: 'The smart contract bytecode of the compiler output matches the smart contract bytecode on the blockchain',
				check: true
			},
			{ text: 'Only the entity that deployed the smart contract can verify it on etherscan' },
			{ text: 'At least one person has used the smart contract after deployment' },
			{ text: 'The source code is stored on the blockchain' }
		],
		answer: `
“By uploading the source code, Etherscan will match the compiled code with that on the blockchain.” Etherscan dixit.
`,
		by: 'tomasfrancisco'
	},
	{
		question:
			'The DAO hack in 2016, that resulted in the split of Ethereum Classic, was hacked with what kind of exploit?',
		type: 'radio',
		options: [
			{ text: 'Compromised private keys' },
			{ text: 'Arithmetic underflow' },
			{ text: 'Re-entrancy', check: true },
			{ text: 'Insufficient access controls' },
			{ text: 'Arithmetic overflow' }
		],
		answer: `
  **Source:** [https://blog.chain.link/reentrancy-attacks-and-the-dao-hack/](https://blog.chain.link/reentrancy-attacks-and-the-dao-hack/)
  `,
		by: 'ivaniuss'
	},
	{
		question: 'EIP 1967 Proxy Storage Slots specifies which storage slots?',
		type: 'checkbox',
		options: [
			{ text: 'An implementation address', check: true },
			{ text: 'A proxy address' },
			{ text: 'A beacon contract address', check: true },
			{ text: 'A delegate address' },
			{ text: 'An admin address', check: true }
		],
		answer: `
Source: [https://eips.ethereum.org/EIPS/eip-1967](https://eips.ethereum.org/EIPS/eip-1967)
`,
		by: 'Magnetto'
	},

	{
		question: 'What is the difference between transfer and transferFrom in ERC20?',
		type: 'checkbox',
		options: [
			{ text: 'transferFrom could be re-entrant according to ERC20' },
			{ text: 'transfer can be used by an approved spender on behalf of another address' },
			{ text: 'transfer could be re-entrant according to ERC20' },
			{ text: 'transferFrom can only be used by the token owner' },
			{
				text: 'transferFrom can be used by an approved spender on behalf of another address',
				check: true
			},
			{ text: 'transfer can only be used by the token owner', check: true }
		],
		answer: `
Esto depende de si el token owner se refiere al dueño del balance y no al owner del contrato (que fue lo que pense yo cuando la respondi)
`,
		by: 'nicobevi'
	},

	{
		question: 'Which of the following are valid uint sizes?',
		type: 'checkbox',
		options: [
			{ text: 'uint32', check: true },
			{ text: 'uint16', check: true },
			{ text: 'uint40', check: true },
			{ text: 'uint24', check: true },
			{ text: 'uint8', check: true }
		],
		answer: `
**Source**: [https://docs.soliditylang.org/en/v0.8.17/types.html#integers](https://docs.soliditylang.org/en/v0.8.17/types.html#integers)
`,
		by: 'Magnetto'
	},
	{
		question: 'Which of the following is most costly in terms of gas?',
		type: 'radio',
		options: [
			{ text: 'Reading msg.sender' },
			{ text: 'Reading immutable variablesvalor en el stack' },
			{ text: 'Reading calldata' },
			{ text: 'Reading variables in memory' },
			{ text: 'Reading storage variables', check: true }
		],
		answer: `
  - [ ]  Reading msg.sender **// caller 2 gas**
  - [ ]  Reading immutable variables **// se agregan como constantes en el código, asumo que existirá alguna subrutina que hace un push del valor en el stack**
  - [ ]  Reading calldata **// calldataload 3 gas, calldatasize 2 gas, calldatacopy 3 gas**
  - [ ]  Reading variables in memory **// mload 3 gas**
  - [x]  Reading storage variables **// sload 100 gas**

  **Source**: [https://www.evm.codes/](https://www.evm.codes/)`,
		by: 'matta'
	},
	{
		question:
			'You have only one ether (plus a little to pay for gas). Can you win this game and get two ether?',
		type: 'checkbox',
		code: `
	function rollDice() external payable{
		require(msg.value == 1 ether, "You must bet one ether");

		if (uint256(blockhash(block.number - 1)) % 6 == 3) {
			payable(msg.sender).transfer(2 ether);
		}
	}`,

		options: [
			{
				text: "If the contract doesn't have 1 ether in it, you will lose the 1 ether you payed to play, even if you get the correct number"
			},
			{
				text: "If the contract doesn't have 2 ether in it, you will lose the 1 ether you payed to play, even if you get the correct number"
			},
			{ text: "You have a 1 in 6 chance of winning, so you probably shouldn't play" },
			{ text: 'You can reliably win this game', check: true }
		],
		answer: `
- [ ]  If the contract doesn't have 1 ether in it, you will lose the 1 ether you payed to play, even if you get the correct number
**Falso, debería fallar el transfer y revertir.**
- [ ]  If the contract doesn't have 2 ether in it, you will lose the 1 ether you payed to play, even if you get the correct number
    
    **Falso, debería fallar el transfer y revertir.**
    
- [ ]  You have a 1 in 6 chance of winning, so you probably shouldn't play
    
    ***Elegiría esta si no fuera porque no es aleatorio el factor que lo define, dado que está basada en información pública.***
    
- [x]  You can reliably win this game
    
    **Yo creo que sí podría ganarlo, explico debajo.**

1. Podría esperar a que llegue el momento de enviar la transacción, en donde no haya mucho tráfico en la red y sea probable que quede incluído en el bloque que espero.
2. En algún momento en el futuro puede haber varios bloques consecutivos, cuyo resultado de aplicarle el módulo 6 al blockhash de ellos de 3. Es sólo cuestión de enviar la transacción en ese momento. Ahora, la posibilidades de que haya por ej 3 bloques consecutivos que den ese valor es baja **0.463%,** por ahí el “realiably” hace que la descarte como respuesta.
3. Y sino, coordinar con un validador/miner por afuera, y que meta la tx cuando corresponda. Usaría algo como flashbots, y al final del bundle enviaría un % de la ganancia al bot.
`,
		by: 'matta'
	},

	{
		question: 'What does require(msg.sender == tx.origin) do?',
		type: 'radio',
		options: [
			{ text: 'It will only accept transactions from smart contracts' },
			{ text: 'It will block all transactions since tx.origin is never equal to msg.sender' },
			{
				text: 'It will accept transactions from smart contracts only if it is called from the constructor'
			},
			{ text: 'It will only accept transactions from regular wallets', check: true },
			{ text: "It doesn't do anything, tx.origin is the deprecated version of msg.sender" }
		],
		answer:
			'tx.origin is the address that initialized the transaction, which has to be an EOA. Checking that tx.origin == msg.sender will give us the security that msg.sender == EOA',
		by: 'Chiin'
	},

	{
		question: 'What is true about ERC721?',
		type: 'radio',
		options: [
			{ text: 'neither _mint() or _safeMint are potentially re-entrant', check: true },
			{ text: '_safeMint() is potentially re-entrant but _mint() is not' },
			{ text: '_mint() is potentially re-entrant but _safeMint() is not' },
			{ text: 'both _mint() and _safeMint() are potentially re-entrant' }
		],
		answer: `
La unica diferencia entre _mint() y _safeMint() es que _safeMint() valida que el receiver (si es un contrato) tenga implementado el metodo onERC721Received() por lo que esta preparado para recibir nfts y estos no quedaran trabados en el contrato.`,
		by: 'nicobevi'
	},

	{
		question: 'What is the difference between a view and pure function in Solidity?',
		type: 'checkbox',
		options: [
			{ text: 'Pure functions cannot make calls to arbitrary smart contracts', check: true },
			{
				text: 'Pure functions cannot access blockchain state, but view functions can',
				check: true
			},
			{ text: 'Pure functions will revert if they access blockchain state' },
			{ text: 'Pure functions cannot return any data, but view functions can' },
			{ text: 'A pure function cannot have any side effects, but a view function can' }
		],
		answer: `
**Source**: [https://docs.soliditylang.org/en/v0.8.17/contracts.html?highlight=pure#state-mutability](https://docs.soliditylang.org/en/v0.8.17/contracts.html?highlight=pure#state-mutability)
`,
		by: 'Magnetto'
	},

	{
		question: 'What is true about transferFrom and safeTransferFrom in ERC721?',
		type: 'radio',
		questions: [
			{ text: 'safeTransferFrom checks if the recipient is a smart contract', check: true },
			{ text: 'transferFrom may be re-entrant, but safeTransferFrom is not re-entrant' },
			{ text: 'transferFrom checks if the recipient is a smart contract' },
			{
				text: 'safeTransferFrom can be called by another smart contract, but transferFrom cannot be called by another smart contract'
			},
			{
				text: 'safeTransferFrom allows you to transfer multiple NFTs, but transferFrom only allows single transfers'
			}
		],
		answer: `
**Sources:** 

- [https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#IERC721-transferFrom-address-address-uint256-](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#IERC721-transferFrom-address-address-uint256-)
- [https://eips.ethereum.org/EIPS/eip-721](https://eips.ethereum.org/EIPS/eip-721)
`,
		by: 'juancito'
	}
];
