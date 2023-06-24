const { expect } = require("chai");

describe("VotingSystem", function () {
  let votingSystem;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    const VotingSystem = await ethers.getContractFactory("VotingSystem");
    [owner, addr1, addr2] = await ethers.getSigners();

    votingSystem = await VotingSystem.deploy();
  });

  it("Debe permitir que los participantes voten y obtengan el recuento de votos correcto", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();

    // Los participantes addr1 y addr2 emiten sus votos
    await votingSystem.connect(addr1).vote("Candidato A");
    await votingSystem.connect(addr2).vote("Candidato B");

    // Se obtiene el recuento de votos para cada candidato
    const voteCountCandidateA = await votingSystem.getVoteCount("Candidato A");
    const voteCountCandidateB = await votingSystem.getVoteCount("Candidato B");

    // Se verifica que el recuento de votos sea el esperado
    expect(voteCountCandidateA).to.equal(1); // Solo se debe contar el voto válido de addr1
    expect(voteCountCandidateB).to.equal(1);
  });

  it("Debe evitar que los participantes voten dos veces", async function () {
    // El participante addr1 emite su voto
    await votingSystem.connect(addr1).vote("Candidato A");

    // Se verifica que intentar votar nuevamente genere un error con el mensaje correcto
    await expect(votingSystem.connect(addr1).vote("Candidato B")).to.be.revertedWith(
      "Ya votaste."
    );
  });
});