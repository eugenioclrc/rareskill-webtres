
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
  - [ ]  Reading msg.sender **// caller 2 gas**
  - [ ]  Reading immutable variables **// se agregan como constantes en el código, asumo que existirá alguna subrutina que hace un push del valor en el stack**
  - [ ]  Reading calldata **// calldataload 3 gas, calldatasize 2 gas, calldatacopy 3 gas**
  - [ ]  Reading variables in memory **// mload 3 gas**
  - [x]  Reading storage variables **// sload 100 gas**

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
		\`_safeMint(address to, uint256 tokenId, bytes data)\`Safely mints tokenId and transfers it to to. If to refers to a smart contract, it must implement IERC721Receiver.onERC721Received, **which is called upon a safe transfer. <- REENTRANCY ISSUE**
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
			{ text: "15 million gas" },
      { text: "2 megabyte data size" },
      { text: "There cannot be more than 400 transactions per block" },
      { text: "There cannot be more than 300 transactions per block" },
      { text: "4 megabyte size" },
      { text: "30 million gas", check: true },
      { text: "12.5 million gas" },
      { text: "1 megabyte data size" },
      { text: "There cannot be more than 150 transactions per block" },
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
			{ text: "0x100" },
      { text: "There is no limit" },
      { text: "0x140" },
      { text: "0x180" },
      { text: "0x200" },
      { text: "0x120" },
      { text: "0x40" },
      { text: "0x160" },
      { text: "0x60" },
      { text: "0x80", check: true },
		],
		type: 'radio',
		answer: `yo me jugaría por 0x80. El free pointer empieza en 0x80 (el valor mas bajo) y la función no parece necesitar memoria con lo cual no debería incrementar este puntero. Podría chequearse con un debugger?`,
		by: 'adriro'
	},
  // 30
	{
		question: 'Why does the gas cost of a public or external variable change when the name of the function changes?',
		options: [
			{ text: 'The longer the function name, the more space that is required to store it after compilation' },
			{ text: 'Its position in the bytecode changes relative to other functions', check: true },
			{ text: "The name of the function doesn't affect the gas cost, but if the arguments to the function change, the gas cost may change" },
			{ text: 'The function selector may have more leading zeros', check: true },
		],
		type: 'radio',
		answer: `Source: [https://github.com/jeffreyscholz/solidity-zero-finder-rust](https://github.com/jeffreyscholz/solidity-zero-finder-rust)

El compilador ordena las funciones en el bytecode por el valor hexadecimal de su selector. Por lo tanto los selectores con un valor hexa menor se verifican antes y consumen menos gas.`,
		by: 'Magnetto'
	},



];
