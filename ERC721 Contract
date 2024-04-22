// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
contract Pokemon is ERC721URIStorage {
   
    struct PokemonInfo {
        uint256 id;
        string urifoto;
        string name;
        string pokeball;
        string _type;
        string nature;
        string ability;
    }
    mapping(uint256 => PokemonInfo) private tokenNFT;

    constructor() ERC721("name", "CHRCNH") {}
    //mint: ["1","ipfs://bafybeianhmisqnzhnfkmvv6wrk2uunl6f5exyeab7ukm2z6juefyz5wvwi","pikashu","ultraball","eletrico","docile","thunderbolt"]
    function mint(PokemonInfo memory _params) external{
        _mint(0x3d65Df41a5775ae4b06096E44aF22fcd58DceC3b,_params.id);
        _setTokenURI(_params.id, _params.urifoto);
        tokenNFT[_params.id] = _params;
    }

      function getNFT(uint256 _tokenId) external view returns (
        string memory urifoto,
        string memory name,
        string memory pokeball,
        string memory _type,
        string memory nature,
        string memory ability
    ) {
        PokemonInfo memory nft = tokenNFT[_tokenId];
        return (
            nft.urifoto,
            nft.name,
            nft.pokeball,
            nft._type,
            nft.nature,
            nft.ability
        );
    }

    function tokenURI(uint256 tokenId) public view override(ERC721URIStorage) returns (string memory) {
        return ERC721URIStorage.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
