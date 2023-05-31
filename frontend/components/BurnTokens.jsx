import { useState } from "react";
import { ethers } from "ethers";

export default function BurnTokens({contract, token, signer}) {
	const [amount, setAmount] = useState(0);
	const [txData, setTxData] = useState("");
	
	const burnTokens = async () => {
		try {
      const allowTx = await token
        .connect(signer)
        .approve(contract.address, ethers.constants.MaxUint256);
      await allowTx.wait();
			
      const tx = await contract
        .connect(signer)
        .returnTokens(ethers.utils.parseEther(amount));
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
      <button onClick={burnTokens}>Burn Tokens</button>
			{txData ? (<p>The transaction's hash is {txData}</p>) : (<></>)}
    </div>
  );
}