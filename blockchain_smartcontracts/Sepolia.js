const { Web3 } = require('web3'); 
const { contract } = require('web3-eth-contract'); 


const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "novaNature",
				"type": "string"
			}
		],
		"name": "setNature",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nomePokemon",
				"type": "string"
			}
		],
		"name": "setPokemon",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nomeParam",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tipoParam",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pokebolaParam",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "natureParam",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "abilityParam",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getAbility",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNature",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPokebola",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPokemon",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTipo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contractAddress = '0xa395886ffc1a072e5740996161484b08adf46ff8';
const publickey = '0x3d65Df41a5775ae4b06096E44aF22fcd58DceC3b';
const web3 = new Web3('https://rpc.sepolia.org');


const myContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(contractAddress); 

async function getPokemon() {
    try {
        const result = await myContract.methods.getPokemon().call();
        console.log('Resultado:', result);
    } catch (error) {
        console.error('Erro ao executar a função:', error);
    }
}

getPokemon();
