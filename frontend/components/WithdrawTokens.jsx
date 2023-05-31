import { useState } from "react";
import { ethers } from "ethers";

export default function WithdrawTokens({contract}) {
	const [amount, setAmount] = useState(0);
	const [txData, setTxData] = useState("");
	
	const withdrawTokens = async () => {
		try {
			//const tx = await contract.ownerWithdraw(ethers.utils.parseEther(amount))
			const tx = await contract.ownerWithdraw(amount)
			const txReceipt = await tx.wait();
			setTxData(txReceipt.transactionHash)
    } catch (error) {
      console.error(error);
    }
	}

	const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

	return (
    <div>
			<input type="number" value={amount} onChange={handleAmountChange} />
      <button onClick={withdrawTokens}>Withdraw Tokens</button>
			{txData ? (<p>The transaction's hash is {txData}</p>) : (<></>)}
    </div>
  );
}