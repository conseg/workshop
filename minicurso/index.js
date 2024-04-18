
import {Web3} from "web3";

// set a provider in the sepolia testnet using node rpc url
const web3 = new Web3("https://rpc.sepolia.org");

// interacting with the smart contract
const abi = [
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

const address = "0x93D1f7374F8aB3899DED2c1254f6a231721F3960";

// create a new contract object, providing the ABI and address
const contract = new web3.eth.Contract(abi, address);

// using contract.methods to get value
contract.methods
    .getPokemon()
    .call()
    .then(console.log);

contract.methods
    .getPokebola()
    .call()
    .then(console.log);

contract.methods
    .getNature()
    .call()
    .then(console.log);

contract.methods
    .getAbility()
    .call()
    .then(console.log);