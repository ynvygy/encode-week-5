import { useState } from "react";
import { ethers } from "ethers";

export default function BuyTokens({contract, signer}) {
	const [amount, setAmount] = useState(0);
	const [txData, setTxData] = useState("");
	
	const buyTokens = async () => {
		try {
			const tx = await contract.connect(signer).purchaseTokens({value: ethers.utils.parseEther(amount)})
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
      <button onClick={buyTokens}>BuyTokens</button>
			{txData ? (<p>The transaction's hash is {txData}</p>) : (<></>)}
    </div>
  );
}