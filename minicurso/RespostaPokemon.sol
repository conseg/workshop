// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.18;

contract Pokemon{
    string nome;
    string pokebola;
    string tipo;
    string nature;
    string ability;
    address owner;

    constructor(string memory nomeParam, string memory tipoParam, string memory pokebolaParam, string memory natureParam, string memory abilityParam){
        nome = nomeParam;
        pokebola = pokebolaParam;
        tipo = tipoParam;   
        nature = natureParam;
        ability = abilityParam;
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "VOCE NAO ESTA AUTORIZADO");
        _;
    }

    function getPokemon() view public returns(string memory){
        return nome;
    }
    function setPokemon(string memory nomePokemon) public onlyOwner{
        nome = nomePokemon;
    }

    function getPokebola() view public returns(string memory){
        return pokebola;
    }

    function getTipo() view public returns(string memory){
        return tipo;
    }

    function getNature() view public  returns(string memory){
        return nature;
    }
    function setNature(string memory novaNature) public onlyOwner{
        nature = novaNature;
    }

    function getAbility() view public returns (string memory){
        return ability;
    }
    
    function getOwner() public view returns (address) {
        return owner;
    }

    function tradePokemon(address receiver) public onlyOwner{
        owner = receiver;
    }

    function purchasePokemon() public payable{
        require(msg.value >= 1 gwei);
        payable(owner).transfer(msg.value);
        owner = msg.sender;
    }
}
