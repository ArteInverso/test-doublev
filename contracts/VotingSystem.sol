// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract VotingSystem {
    mapping(address => bool) public hasVoted; // Almacena si un participante ha votado o no
    mapping(string => uint256) public voteCount; // Almacena el recuento de votos por candidato

    event Vote(address indexed voter, string indexed candidate); // Evento que se emite cuando se emite un voto

    // Modificador que asegura que un participante solo pueda votar una vez
    modifier onlyNotVoted() {
        require(!hasVoted[msg.sender], "Ya votaste.");
        _;
    }

    // Función para que un participante emita un voto para un candidato específico
    function vote(string memory candidate) public onlyNotVoted {
        voteCount[candidate]++;
        hasVoted[msg.sender] = true;

        emit Vote(msg.sender, candidate);
    }

    // Función para obtener el recuento de votos para un candidato específico
    function getVoteCount(string memory candidate) public view returns (uint256) {
        return voteCount[candidate];
    }
}