import { ethers } from "hardhat";
import { Lottery__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config();

const BET_PRICE = 1;
const BET_FEE = 0.2;
const TOKEN_RATIO = 100;

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "");

  const provider = new ethers.providers.AlchemyProvider(
    "maticmum",
    process.env.ALCHEMY_API_KEY
  );

  const signer = wallet.connect(provider);

  const lotteryFactory = new Lottery__factory(signer);
  const contract = await lotteryFactory.deploy(
    "LotteryToken",
    "LT0",
    TOKEN_RATIO,
    ethers.utils.parseEther(BET_PRICE.toFixed(18)),
    ethers.utils.parseEther(BET_FEE.toFixed(18))
  );
  const deployTx = await contract.deployTransaction.wait();
  console.log(
    `The lottery contract was deployed at ${contract.address} at block ${deployTx.blockNumber}`
  );

  await contract.deployed();
  const tokenAddress = await contract.paymentToken();

  console.log(
    `The lottery token contract was deployed at ${tokenAddress}`
  );

  const tokenFactory = await ethers.getContractFactory("LotteryToken");
  tokenFactory.attach(tokenAddress);
};

main().catch((error) =>{
    console.error(error);
    process.exitCode = 1;
})

// token 0xf5577f0faACC38bE8854F383fB36B3913278e9e2
// lottery 0xFBD21b0eaAfa7F5109d29d39107667B7381db965