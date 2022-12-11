// source https://ventral.digital/posts/2021/10/17/secureum-bootcamp-ethereum-101-quiz
export default [
	{
		question: 'Which of the following EVM components is/are non-volatile across transactions?',
		options: [
			{ text: 'Stack' },
			{ text: 'Memory' },
			{ text: 'Storage', check: true },
			{ text: 'Calldata' },
			],
		type: 'checkbox',
		answer: `
> A stack machine is a computer processor or a virtual machine in which the primary interaction is moving short-lived temporary values to and from a push down stack.
> 

from [Stack machine - Wikipedia](https://en.wikipedia.org/wiki/Stack_machine)

> The EVM is a simple stack-based architecture consisting of the stack, volatile memory, non-volatile storage with a word size of 256-bit (chosen to facilitate the Keccak256 hash scheme and elliptic-curve computations) and Calldata.
> 

from point 59 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)

> Calldata is a read-only byte-addressable space where the data parameter of a transaction or call is held.
> 

from point 63 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)
`,
		by: 'patrickd'
	},

	{
		question: 'The number of transactions in a Ethereum block depend on',
		options: [
			{ text: 'Nothing. It is a constant'},
 			{ text: 'Gas used by transactions', check: true},
 			{ text: 'Block gas limit', check: true},
 			{ text: 'Block difficulty'}
		],
		type: 'checkbox',
		answer: `
> Block gas limit is set by miners and refers to the cap on the total amount of gas expended by all transactions in the block, which ensures that blocks can\`t be arbitrarily large. Blocks therefore are not a fixed size in terms of the number of transactions because different transactions consume different amounts of gas.
> 

from point 48 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)`,
		by: 'patrickd'
	},
	// 3
	{
		question: 'EVM Stores',
		options: [
			{ text: 'Most significant byte in the smallest memory address', check: true},
 			{ text: 'Most significant byte in the largest memory address'},
 			{ text: 'In Big-endian order', check: true},
 			{ text: 'In Little-endian order'}
		],
		type: 'checkbox',
		answer: `
> EVM uses big-endian ordering where the most significant byte of a word is stored at the smallest memory address and the least significant byte at the largest
> 

from point 65 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)`,
		by: 'patrickd'
	},
{
		question: 'Ethereum’s thread model is characterised by',
		options: [
			{ text: 'Trusted miners and users'},
 			{ text: 'Trusted users, untrusted miners'},
 			{ text: 'Trusted miners, untrusted users'},
 			{ text: 'Everyone is untrusted', check: true}
		],
		type: 'checkbox',
		answer: `> Given the aspirational absence of trusted intermediaries, everyone and everything is meant to be untrusted by default. Participants in this model include developers, miners/validators, infrastructure providers and users, all of whom could potentially be adversaries.
> 

from point 95 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)`,
		by: 'patrickd'
	},
// 5
{
		question: 'Ethereum smart contracts do not run into halting problems because',
		options: [
			{ text: 'EVM is not Turing Complete'},
 			{ text: 'EVM is Turing Complete'},
 			{ text: 'EVM is Turing Complete but is bounded by gas sent in transaction', check: true},
 			{ text: 'EVM is Turing Complete but is bounded by the stack depth'}
		],
		type: 'checkbox',
		answer: `> Turing-complete systems face the challenge of the halting problem i.e. given an arbitrary program and its input, it is not solvable to determine whether the program will eventually stop running. So Ethereum cannot predict if a smart contract will terminate, or how long it will run. Therefore, to constrain the resources used by a smart contract, Ethereum introduces a metering mechanism called gas.
> 

from point 10 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)`,
		by: 'patrickd'
	},

{
		question: 'Which of the following operation(s) touch(es) storage?',
		options: [
			{ text: 'SWAP'},
 			{ text: 'SLOAD', check: true},
 			{ text: 'DUP'},
 			{ text: 'PUSH'}
		],
		type: 'checkbox',
		answer: `> Most EVM instructions operate with the stack (stack-based architecture) and there are also stack-specific operations e.g. PUSH, POP, SWAP, DUP etc.
> 

from point 60 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)

> Storage is a 256-bit to 256-bit key-value store. [...] This is accessed with SLOAD/SSTORE instructions.
> 

from point 62 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)`,
		by: 'patrickd'
	},
	{
		question: 'The most gas-expensive operation is',
		options: [
			{ text: 'SLOAD'},
 			{ text: 'SSTORE'},
 			{ text: 'CREATE', check: true},
 			{ text: 'SELFDESTRUCT'}
		],
		type: 'checkbox',
		answer: `> SLOAD is 2100 gas and SSTORE is 20,000 gas to set a storage slot from 0 to non-0 and 5,000 gas otherwise. CREATE is 32000 gas and SELFDESTRUCT is 5000 gas.
> 

from point 78 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)`,
		by: 'patrickd'
	},
{
		question: 'Transaction T1 attempts to write to storage values S1 and S2 of contract C. Transaction T2 attempts to read the same storage values S1 and S2. However, T1 reverts due to an exception after writing S2. Which or the following is/are TRUE?',
		options: [
			{ text: 'T2 reads the value of S1 updated by T1'},
 			{ text: 'T2 reads the value of S1 prior to T1\'s attempted update', check: true},
 			{ text: 'T2 also reverts because of the dependency on T1'},
 			{ text: 'This scenario is not possible'}
		],
		type: 'checkbox',
		answer: `> Transaction properties: Atomic: it is all or nothing i.e. cannot be divided or interrupted by other transactions
> 

from point 32 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)

> A transaction reverts for different exceptional conditions such as running out of gas, invalid instructions etc. in which case all state changes made so far are discarded and the original state of the account is restored as it was before this transaction executed.
> 

from point 79 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)`,
		by: 'patrickd'
	},

// 9
{
		question: 'The gas tracking website https://etherscan.io/gastracker says that Low gas cost is 40 gwei. This affects',
		options: [
			{ text: 'The transaction gasPrice', check: true},
 			{ text: 'The transaction gasLimit'},
 			{ text: 'The transaction value'}
		],
		type: 'checkbox',
		answer: `> Gas price: The price a transaction originator is willing to pay in exchange for gas. The price is measured in wei per gas unit. The higher the gas price, the faster the transaction is likely to be confirmed on the blockchain. The suggested gas price depends on the demand for block space at the time of the transaction.
> 

from point 35 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)

> gasLimit: The maximum amount of gas the originator is willing to pay for this transaction value: The amount of ether (in wei) to send to the destination
> 

from point 33 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)`,
		by: 'patrickd'
	},
// 10
{
		question: 'Security of Ethereum DApps depend on',
		options: [
			{ text: 'Security of their smart contracts', check: true},
 			{ text: 'Security of their off-chain components', check: true},
 			{ text: 'Security of Ethereum', check: true},
 			{ text: 'None of the above'}
		],
		type: 'checkbox',
		answer: `> On-chain vs Off-chain: Smart contracts are “on-chain” Web3 components and they interact with “off-chain” components that are very similar to Web2 software. So the major differences in security perspectives between Web3 and Web2 mostly narrow down to security considerations of smart contracts vis-a-vis Web2 software.
> 

from point 90 of [Ethereum 101 - by Secureum](https://secureum.substack.com/p/ethereum-101)`,
		by: 'patrickd'
	},

];

