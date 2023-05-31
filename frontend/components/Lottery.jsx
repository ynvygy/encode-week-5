import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from "wagmi";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

import lotteryJson from '../contractsdata/Lottery.json';
import lotteryTokenJson from '../contractsdata/LotteryToken.json'

import CheckState from "./CheckState"
import OpenBets from "./OpenBets"
import DisplayBalance from "./DisplayBalance"
import BuyTokens from "./BuyTokens"
import DisplayTokenBalance from "./DisplayTokenBalance";
import Bet from "./Bet";
import CloseLottery from "./CloseLottery"
import DisplayPrize from "./DisplayPrize"
import ClaimPrize from "./ClaimPrize"
import DisplayOwnerPool from "./DisplayOwnerPool"
import WithdrawTokens from "./WithdrawTokens"
import BurnTokens from "./BurnTokens"

export default function Lottery() {
	const router = useRouter();
	
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Lottery 
				</h1>
			</header>

			<div className={styles.buttons_container}>
				<WalletInfo />
			</div>
			<div className={styles.footer}>
	
			</div>
		</div>
	);
}

function WalletInfo() {
	const { data: signer, isError, isLoading } = useSigner();
	const { chain, chains } = useNetwork();
	const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
	const contract = new ethers.Contract(
		process.env.LOTTERY_ADDRESS,
		lotteryJson.abi,
		signer
	);

	const token = new ethers.Contract(
		process.env.TOKEN_ADDRESS,
		lotteryTokenJson.abi,
		signer
	)

	if (signer) return (
		<>
			<p>Your account address is {signer._address}</p>
			<p>Connected to the {chain.name} network</p>

			<CheckState provider={provider} contract={contract}></CheckState>
			<OpenBets provider={provider} contract={contract}></OpenBets>
			<DisplayBalance provider={provider}></DisplayBalance>
			<BuyTokens contract={contract} signer={signer}></BuyTokens>
			<DisplayTokenBalance token={token}></DisplayTokenBalance>
			<Bet contract={contract} token={token} signer={signer}></Bet>
			<CloseLottery contract={contract}></CloseLottery>
			<DisplayPrize contract={contract}></DisplayPrize>
			<ClaimPrize contract={contract} signer={signer}></ClaimPrize>
			<DisplayOwnerPool contract={contract}></DisplayOwnerPool>
			<WithdrawTokens contract={contract}></WithdrawTokens>
			<BurnTokens contract={contract} token={token} signer={signer}></BurnTokens>
		</>
	)
	if (isLoading) return (
		<>
			<p>Wait a while, the wallet is loading</p>
		</>
	)
	return (
		<>
			<p>Connect a wallet</p>
		</>
	)
}
