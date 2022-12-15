export default [
	// 1
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
	// 2
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
	// 3
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
	// 4
	{
		question: 'Which of the following variable types can be stored in memory?',
		options: [
			{ text: 'uint', check: true  },
			{ text: 'boolean', check: true  },
			{ text: 'struct', check: true },
			{ text: 'array', check: true },
			{ text: 'address', check: true  },
			{ text: 'the output of a hash' }
		],
		type: 'checkbox',
		answer: `Source: https://ethereum.stackexchange.com/questions/32082/are-local-variables-stored-in-memory-or-on-the-stack-in-solidity
`,
		by: 'infamousdegen'
	},
	// 5
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
	// 6
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
	// 7
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
	// 8
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
	// 9
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
	// 10
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
	// 11
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
	// 12
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
	// 13
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
	// 14
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
  - [ ]  Reading msg.sender ** // caller 2 gas**
  - [ ]  Reading immutable variables ** // se agregan como constantes en el código, asumo que existirá alguna subrutina que hace un push del valor en el stack**
  - [ ]  Reading calldata ** // calldataload 3 gas, calldatasize 2 gas, calldatacopy 3 gas**
  - [ ]  Reading variables in memory ** // mload 3 gas**
  - [x]  Reading storage variables ** // sload 100 gas**

  **Source**: [https://www.evm.codes/](https://www.evm.codes/)`,
		by: 'matta'
	},
	// 15
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
	// 16
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
	// 17
	{
		question: 'What is true about ERC721?',
		type: 'radio',
		options: [
			{ text: 'neither _mint() or _safeMint are potentially re-entrant' },
			{ text: '_safeMint() is potentially re-entrant but _mint() is not', check: true },
			{ text: '_mint() is potentially re-entrant but _safeMint() is not' },
			{ text: 'both _mint() and _safeMint() are potentially re-entrant' }
		],
		answer: `
		\`_safeMint(address to, uint256 tokenId, bytes data)\` Safely mints tokenId and transfers it to to. If to refers to a smart contract, it must implement IERC721Receiver.onERC721Received, **which is called upon a safe transfer. <- REENTRANCY ISSUE**
		\`_mint(address to, uint256 tokenId) internal\`: Mints tokenId and transfers it to to.
		`,
		by: 'nicobevi - 0x4non'
	},
	// 18
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
	// 19
	{
		question: 'What is true about transferFrom and safeTransferFrom in ERC721?',
		type: 'radio',
		options: [
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
	},
	// 20
	{
		question: 'What is true about payable and non-payable functions?',
		options: [
			{ text: 'Payable functions are more gas efficient than non-payable ones', check: true },
			{ text: 'Non-payable functions are more gas efficient than payable ones' },
			{ text: 'Only payable functions can have self destruct functionality' },
			{ text: 'Both payable and non-payable functions can be view functions' }
		],
		type: 'radio',
		answer: `
![19.JPG](/19.jpg)

************************************************Como podemos observar en la imagen, existe una pequeña diferencia (a favor) en el uso de gas por parte de una función payable. Esto se debe a que en las funciones non-payable, existe un chequeo mediante OPCODES para asegurar que la cantidad de ETH enviada sea nula. Puntualmente este chequeo se hace mediante 3 OPCODES:***

- **CALLVALUE**: Para conocer la cantidad de ETH que se envió (toma el msg.value).
- **DUP1**: Duplica el primer valor en el stack.
- **ISZERO**: Se fija que el valor obtenido en CALLVALUE sea igual a cero.

************************Además, las funciones payable no pueden ser declaradas como view.***

![Remix: “pruebita” intenta ser payable y view a la vez pero falla miserablemente.](/Untitled.png)

Remix: “pruebita” intenta ser payable y view a la vez pero falla miserablemente.

**Fuente**: [https://coinsbench.com/solidity-payable-vs-regular-functions-a-gas-usage-comparison-b4a387fe860d](https://coinsbench.com/solidity-payable-vs-regular-functions-a-gas-usage-comparison-b4a387fe860d)
`,
		by: 'bengalaQ'
	},
	// 21
	{
		question: 'What does selfdestruct do?',
		options: [
			{ text: 'sends all the ether to the address specified in the first argument', check: true },
			{
				text: 'will revert (not self destruct) if the recipient address does not exist or cannot receive ether'
			},
			{ text: 'sends all the ether in a contract to the address that initiated the self destruct' },
			{ text: "removes a smart contract's bytecode and storage variables from the blockchain" },
			{
				text: 'after the transaction with selfdestruct completes, all function calls to the smart contract will revert'
			}
		],
		type: 'radio',
		answer: `
  **Sources:**

- [https://solidity-by-example.org/hacks/self-destruct/](https://solidity-by-example.org/hacks/self-destruct/?ref=hackernoon.com)
- [https://ethereum.stackexchange.com/questions/10793/contracts-state-after-a-selfdestruct](https://ethereum.stackexchange.com/questions/10793/contracts-state-after-a-selfdestruct)
- [https://docs.soliditylang.org/en/v0.8.17/introduction-to-smart-contracts.html#deactivate-and-self-destruct](https://docs.soliditylang.org/en/v0.8.17/introduction-to-smart-contracts.html#deactivate-and-self-destruct)

Not sure about this one:

> after the transaction with selfdestruct completes, all function calls to the smart contract will revert
> `,
		by: 'juancito'
	},
	// 21
	{
		question: 'What is true about private, internal, external, and public functions?',
		options: [
			{ text: 'Some of these are related to inheritance', check: true },
			{ text: 'public functions can be called by other smart contracts', check: true },
			{
				text: 'All of these except external could be used to describe variables in addition to functions',
				check: true
			},
			{
				text: 'There is no such thing as an internal function, it should be called a protected function'
			},
			{ text: 'external functions can only be called by smart contracts' }
		],
		type: 'checkbox',
		answer: `Source: [https://docs.soliditylang.org/en/latest/cheatsheet.html#function-visibility-specifiers](https://docs.soliditylang.org/en/latest/cheatsheet.html#function-visibility-specifiers)

Why #1? Inheriting contracts can access Public and Internal functions but not External and Private.
`,
		by: 'tomasfrancisco'
	},
	// 22
	{
		question: 'What does delegatecall do?',
		options: [
			{
				text: 'It executes a function that may be outside the smart contract, in the context of the current smart contract',
				check: true
			},
			{ text: 'It allows smart contracts to set a privilege level for certain functions' },
			{ text: 'It is used to defer execution for a later time' },
			{ text: "It's how smart contracts listen for commands from other smart contracts" },
			{ text: "It's how smart contracts forward calls to other contracts" }
		],
		type: 'radio',
		answer: `![Untitled](/Untitled2.png)

****************Fuente:**************** [https://www.evm.codes/#f4?fork=arrowGlacier](https://www.evm.codes/#f4?fork=arrowGlacier)
`,
		by: 'bengalaQ'
	},
	// 23
	{
		question: 'What is true about virtual functions?',
		options: [
			{ text: 'It allows the function to be modified by a child contract', check: true },
			{ text: 'It is used only in abstract contracts' },
			{ text: 'Virtual functions are less gas efficient than regular functions' },
			{ text: 'Virtual functions must be overriden by a child contract' },
			{ text: 'The virtual keyword has no effect after solidity 0.7.0' }
		],
		type: 'radio',
		answer: `
  - [x]  It allows the function to be modified by a child contract
    
    **TRUE, a child contract can override a function if the parent function is declared as virutal**
    
- [ ]  It is used only in abstract contracts
    
    **FALSE, it can be used on non-abstract contract**
    
- [ ]  Virtual functions are less gas efficient than regular functions
    
    **FALSE, resolution happens at compilation time**
    
- [ ]  Virtual functions must be overriden by a child contract
    
    **FALSE, a child contract can override the function but it isn't required**
    
- [ ]  The virtual keyword has no effect after solidity 0.7.0
    
    **FALSE, ???**
`,
		by: 'adriro'
	},
	// 24
	{
		question: 'What is true about block.timestamp?',
		options: [
			{ text: 'The timestamp is determined by the miner or validator', check: true },
			{ text: 'The number of milliseconds since 00:00:00 UTC 1 January 1970' },
			{ text: "The number of milliseconds since 1 January 1970 in the user's timezone" },
			{ text: 'The number of seconds since 00:00:00 UTC 1 January 1970', check: true },
			{ text: "The number of seconds since 1 January 1970 in the user's timezone" }
		],
		type: 'checkbox',
		answer: `
- [x]  The timestamp is determined by the miner or validator
    
    Sí! Y pueden hacerse los pillos con un márgen de error (que antes era de 900 milisegundos, ahora no lo sé).
    
- [ ]  The number of milliseconds since 1 January 1970 in the user's timezone
    
    **Nope. UTC1.**
    
- [x]  The number of seconds since 00:00:00 UTC 1 January 1970
    
    ***Yes. [https://docs.soliditylang.org/en/latest/units-and-global-variables.html#block-and-transaction-properties](https://docs.soliditylang.org/en/latest/units-and-global-variables.html#block-and-transaction-properties) ***
    
- [ ]  The number of milliseconds since 00:00:00 UTC 1 January 1970
    
    **No**
    
- [ ]  The number of seconds since 1 January 1970 in the user's timezone
    
    ***No, its in UTC.***
    
`,
		by: 'matta - adriro'
	},
	// 25
	{
		question: 'What is true about payable and non-payable functions?',
		options: [
			{ text: 'It makes a function call and reverts if a state change occurs', check: true },
			{ text: 'It is used for functions that have a fixed gas cost' },
			{ text: 'It returns constant variables' },
			{ text: 'It is only used for calls within a smart contract' },
			{ text: 'It is deprecated an not recommended for use, it is an older version of call' }
		],
		type: 'radio',
		answer: `**Sources:**

- [https://eips.ethereum.org/EIPS/eip-214#specification](https://eips.ethereum.org/EIPS/eip-214#specification)
- [https://kushgoyal.com/ethereum-solidity-how-use-call-delegatecall/](https://kushgoyal.com/ethereum-solidity-how-use-call-delegatecall/)
`,
		by: 'juancito'
	},
	// 26
	{
		question: 'As of 2022, what is the maximum smart contract size?',
		options: [
			{ text: '24 kb', check: true },
			{ text: 'Smart contracts do not have a size limit' },
			{ text: '20 kb' },
			{ text: '32 kb' },
			{
				text: 'Smart contracts do not have a size limit, but they become prohibitively expensive to deploy as they get large'
			},
			{ text: 'The maximum size of a smart contract is determined by the gas block limit' },
			{ text: '12 kb' }
		],
		type: 'radio',
		answer:
			'Source: [https://ethereum.org/en/developers/docs/smart-contracts/#limitations](https://ethereum.org/en/developers/docs/smart-contracts/#limitations)',
		by: 'Chiin'
	},
	// 27
	{
		question: 'What is wrong with this code and/or what could be improved?',
		code: `
  mapping (address => uint256) balance;

  function withdraw() external {
    (bool success, ) = tx.origin.call{value: balance[tx.origin]}("");
    require(success, "transfer failed");
    balance[tx.origin] = 0;
  }
`,
		options: [
			{ text: 'withdraw should be payable' },
			{ text: 'tx.origin can be a security vulnerability', check: true },
			{ text: 'withdraw will fail unless the code is changed to payable(tx.origin)' },
			{ text: 'the variable balance should have visibility set explicitly' },
			{ text: 'the code is re-entrant' }
		],
		type: 'checkbox',
		answer: `
- [ ]  withdraw should be payable
    
    **No. Payable en una función sólo se usa cuando se espera que esa función sea payable.**
    
- [x]  tx.origin can be a security vulnerability
    
    **Sí, si no se usa con cuidado sí… tx.origin es siempre una EOA, y msg.sender es el último caller que llamó.**
    
- [ ]  withdraw will fail unless the code is changed to payable(tx.origin)
    
    **No. El codigo no falla como esta ahora.**
    
- [ ]  the variable balance should have visibility set explicitly
    
    **No. No es relevante la visibilidad de balance.**
    
- [ ]  the code is re-entrant
    
    **No. Porque para que pueda ser re-entrant, deberías lograr que el call sea hacia un contrato y pueda volver a ingresar, pero como tx.origin es siempre una EOA, no posee código, por ende, imposible.**

`,
		by: 'matta'
	},
	// 28
	{
		question: 'What limits the block size in Ethereum as of 2022?',
		options: [
			{ text: '15 million gas' },
			{ text: '2 megabyte data size' },
			{ text: 'There cannot be more than 400 transactions per block' },
			{ text: 'There cannot be more than 300 transactions per block' },
			{ text: '4 megabyte size' },
			{ text: '30 million gas', check: true },
			{ text: '12.5 million gas' },
			{ text: '1 megabyte data size' },
			{ text: 'There cannot be more than 150 transactions per block' }
		],
		type: 'radio',
		answer: `**Source:** [https://ethereum.org/en/developers/docs/blocks/](https://ethereum.org/en/developers/docs/blocks/)`,
		by: 'ivaniuss'
	},

	// 29
	{
		question: 'What is the highest value the free memory pointer can achieve in this function?',
		code: `
function vote(uint256 choice) external payable {
  require(!close);
  require(msg.value == 1 ether);
  require(choice < HIGHEST_VOTE_INDEX);

  votes[choice] += 1;

  if (votes[choice] > THRESHOLD) {
    closed = true;
  }
}
`,
		options: [
			{ text: '0x100' },
			{ text: 'There is no limit' },
			{ text: '0x140' },
			{ text: '0x180' },
			{ text: '0x200' },
			{ text: '0x120' },
			{ text: '0x40' },
			{ text: '0x160' },
			{ text: '0x60' },
			{ text: '0x80', check: true }
		],
		type: 'radio',
		answer: `yo me jugaría por 0x80. El free pointer empieza en 0x80 (el valor mas bajo) y la función no parece necesitar memoria con lo cual no debería incrementar este puntero. Podría chequearse con un debugger?`,
		by: 'adriro'
	},
	// 30
	{
		question:
			'Why does the gas cost of a public or external variable change when the name of the function changes?',
		options: [
			{
				text: 'The longer the function name, the more space that is required to store it after compilation'
			},
			{ text: 'Its position in the bytecode changes relative to other functions', check: true },
			{
				text: "The name of the function doesn't affect the gas cost, but if the arguments to the function change, the gas cost may change"
			},
			{ text: 'The function selector may have more leading zeros', check: true }
		],
		type: 'checkbox',
		answer: `Source: [https://github.com/jeffreyscholz/solidity-zero-finder-rust](https://github.com/jeffreyscholz/solidity-zero-finder-rust)

El compilador ordena las funciones en el bytecode por el valor hexadecimal de su selector. Por lo tanto los selectores con un valor hexa menor se verifican antes y consumen menos gas.`,
		by: 'Magnetto'
	},
	// 31
	{
		question: 'What happens if a program enters an infinite loop in Ethereum?',
		options: [
			{ text: 'The transaction will revert', check: true },
			{
				text: 'The ethereum client will warn the user and not allow them to initiate the transaction.',
			},
			{ text: 'The compiler does not allow you to create programs with infinite loops' },
			{
				text: "The validator will reject the transaction after seeing it hasn't terminated past a certain time"
			},
			{
				text: 'The transaction will update the state of the blockchain until it runs out of gas. It will preserve any changes before the gas ran out.'
			}
		],
		type: 'checkbox',
		answer: `- [x]  The transaction will revert
    
**TRUE, the transaction will run until it reaches its gas limit, and eventually revert.**
    
- [ ]  The ethereum client will warn the user and not allow them to initiate the transaction.
    
**This may be true, clients simulate transactions and may alert the user, but will allow initiate transaction**
    
- [ ]  The compiler does not allow you to create programs with infinite loops
    
**FALSE, undecidable problem**
    
- [ ]  The validator will reject the transaction after seeing it hasn't terminated past a certain time
    
**FALSE, its bounded by gas not time**
    
- [ ]  The transaction will update the state of the blockchain until it runs out of gas. It will preserve any changes before the gas ran out.
    
**FALSE, reverted transactions don't persist state**
`,
		by: 'adriro - reviewed by infamousdegen'
	},
	// 32
	{
		question: 'What is wrong with this code?',
		code: `valueToSend = totalValue / contributors.length * 1 ether`,
		options: [
			{ text: 'the valueToSend might be zero, even if totalValue is not', check: true },
			{ text: 'arithmetic underflow' },
			{ text: 'arithmetic overflow' },
			{ text: 'nothing is wrong with the code' },
			{ text: 'totalValue might not be divisible by contributors.length' }
		],
		type: 'radio',
		answer: `
\`\`\`solidity
totalValue = 10;
contributors = [1, 2, ..., 100];
valueToSend = totalValue / contributors.length * 1 ether;
console.log(valueToSend); // Logs 0
\`\`\`
`,
		by: 'Chiin'
	},
	// 33
	{
		question: 'What is the minimum valid calldatasize for this function?',
		code: `
function foo(uint256[] memory x, uint256[] memory y) external view returns(uint256) {
	// code
}`,
		options: [
			{ text: '132', check: true },
			{ text: '256' },
			{ text: '260' },
			{ text: '68' },
			{ text: '64' },
			{ text: '128' },
			{ text: '224' }
		],
		type: 'radio',
		answer: `ABI encoded dynamic arrays have:

1. offset to data
2. length of the array
3. ABI encoded data for each element

The minimum valid calldata should correspond to both empty arrays, that will have both offsets and both lengths. 32 * 4 = 128 bytes. We need to account also for the function selector which is 4 bytes.

The answer is 132 bytes.
`,
		by: 'adriro'
	},
	// 34
	{
		question: 'What solidity version introduced arithmetic underflow and overflow protection?',
		options: [
			{ text: '0.7.0' },
			{ text: '0.7.6' },
			{
				text: 'None, you should always use SafeMath if you are worried about overflow and underflow'
			},
			{ text: '0.8.0', check: true },
			{ text: '0.6.0' }
		],
		type: 'radio',
		answer: `**Sources:**

**Arithmetic operations revert on underflow and overflow. You can use \`unchecked { ... }\`
to use the previous wrapping behaviour.**

[https://docs.soliditylang.org/en/v0.8.16/080-breaking-changes.html](https://docs.soliditylang.org/en/v0.8.16/080-breaking-changes.html)`,
		by: '0x4non'
	},
	// 35
	{
		question: 'How is an ethereum address created?',
		options: [
			{
				text: 'An ethereum address is the last 20 bytes of the hash of the public key',
				check: true
			},
			{ text: 'An ethereum address is the public key of an ECDSA signature scheme' },
			{
				text: "An ethereum address is a random string. It's relationship to the secret phrase is kept in the user account"
			},
			{ text: 'An ethereum address is the hash of the public key' },
			{
				text: 'An ethereum address is the hash of the block number the wallet was created on, and the public key'
			}
		],
		type: 'radio',
		answer: `**ChatGPT;**
An ethereum address is the last 20 bytes of the hash of the public key. An ethereum address is created by taking the public key of an ECDSA (Elliptic Curve Digital Signature Algorithm) signature scheme and then applying the Keccak-256 hash function to it. The resulting hash is then truncated to the last 20 bytes to obtain the ethereum address. This process ensures that the ethereum address is unique and cannot be easily derived from the public key.
`,
		by: '0x4non'
	},
	// 36

	{
		question: 'Which of the following is true if 51% of the network is malicious?',
		options: [
			{
				text: 'They can fork the protocol (but if and only if they maintain more than 51% control of the hash power or staked ether)',
				check: true
			},
			{ text: 'The nodes can steal your ether', check: true },
			{ text: 'They can conduct a denial of service', check: true },
			{ text: 'The nodes can censor you', check: true }
		],
		type: 'checkbox',
		answer: `
- ******************Si tienen el 51% del control sobre el hash power o el staked ETH podrían introducir una blockchain alterna a la actual, validándola ya que generan el mayor consenso.******************
- ************************************************Se podrían generar transacciones que alteren el balance de una cuenta, y validar las mismas ya que tienen el mayor consenso.************************************************
- *********************************************************************************Todas las transacciones podrían ser rechazadas ya que se tiene el mayor consenso.*********************************************************************************
- *********************************************************************************************************************************************************Similar a la justificación anterior. Todas las transacciones de una cuenta en particular podrían ser rechazadas, censurando a un usuario en concreto.*********************************************************************************************************************************************************

****************Fuente (me gustó por el ejemplo de la película para entender descentralización):**************** [https://www.coindesk.com/learn/what-is-a-51-attack/](https://www.coindesk.com/learn/what-is-a-51-attack/)
`,
		by: 'bengalaQ'
	},
	// 37
	{
		question: 'Which of the following is true about generating random numbers on Ethereum?',
		options: [
			{
				text: 'combining the blockhash with other random data like block.difficulty (pre merge), block.coinbase and msg.sender makes it safer'
			},
			{ text: 'as long as randomness relies on private variables, it is unpredictable' },
			{ text: 'using block.timestamp is unreliable because the miner can manipulate it' },
			{
				text: 'a commit reveal scheme can produce safe randomness under certain assumptions',
				check: true
			},
			{ text: 'using the blockhash is reliable' },
			{
				text: 'randomness is difficult to generate securely because the blockchain is deterministic',
				check: true
			}
		],
		type: 'checkbox',
		answer: `
The blockchain is deterministic, which makes it very difficult to generate a random value and even so, if the value is something we don't want, we can simply reverse the transaction.

The commit reveal is a good approach.

**Sources:**

[https://github.com/kadenzipfel/smart-contract-attack-vectors/blob/master/vulnerabilities/weak-sources-randomness.md](https://github.com/kadenzipfel/smart-contract-attack-vectors/blob/master/vulnerabilities/weak-sources-randomness.md)
`,
		by: '0x4non'
	},
	// 38
	{
		question: 'What is the difference between create and create2?',
		options: [
			{ text: 'the user has more control over the address in create compared to create2' },
			{
				text: 'the user has more control over the address in create2 compared to create',
				check: true
			},
			{ text: 'create2 takes a salt parameter', check: true },
			{ text: 'the user can predict the address in create2 but not create' },
			{ text: 'create is for creating one smart contract in a single transaction' },
			{ text: 'create2 can create multiple smart contracts.' }
		],
		type: 'checkbox',
		answer: `**Source:** 
- [https://blog.openzeppelin.com/getting-the-most-out-of-create2/](https://blog.openzeppelin.com/getting-the-most-out-of-create2/)
- [https://consensys.net/diligence/blog/2019/02/smart-contract-security-newsletter-16-create2-faq/#:~:text=The important difference is in,salt value%2C and the init_code](https://consensys.net/diligence/blog/2019/02/smart-contract-security-newsletter-16-create2-faq/#:~:text=The%20important%20difference%20is%20in,salt%20value%2C%20and%20the%20init_code%20) .

`,
		by: 'ivaniuss'
	},
	{
		question:
			'What is the difference in the calldata between function myFunction(uint64 x) and myFunction(uint256 x)?',
		options: [
			{ text: 'There is no difference', check: true },
			{
				text: 'it depends on which ethereum hardfork is being used, but as of 2022 the representation is the same'
			},
			{
				text: 'it will depend on the number x holds, but myFunction(uint256 x) can create larger calldata'
			},
			{ text: 'the calldata for myFunction(uint64 x) will be smaller than myFunction(uint256 x)' },
			{ text: 'it depends on which version of solidity is being used' }
		],
		type: 'radio',
		answer: `I think there is no difference on the calldata, the function signature for both functions of course will be different, but the calldata is the same, and is represented in 32 bytes (uint256).
`,
		by: '0x4non'
	},
	{
		question:
			'What is the layout of y in memory right after loadY executes, `uint8[] memory y = x`?',
		code: `
uint8[] x = [1, 2, 3, 4];

function loadY() extenal {
	uint8[] memory y = x;
}
`,
		options: [
			{ text: '0x1234' },
			{ text: '0x01020304' },
			{ text: '0x0001000200030004' },
			{
				text: '0x0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000004',
				check: true
			}
		],
		type: 'radio',
		answer: `**Sources:**

- [https://docs.soliditylang.org/en/v0.8.15/internals/layout_in_memory.html](https://docs.soliditylang.org/en/v0.8.15/internals/layout_in_memory.html)
`,
		by: 'nicobevi'
	}
];
