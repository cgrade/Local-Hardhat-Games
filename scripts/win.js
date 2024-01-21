// add the game address here and update the contract name if necessary
const gameAddr = "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    await game.giveMeAllowance(11000);
    await game.mint(10000);

    const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt.events[0].event);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
