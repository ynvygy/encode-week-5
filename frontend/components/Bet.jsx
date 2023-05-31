import { useState } from "react";
import { ethers } from "ethers";

export default function Bet({contract, token, signer}) {
	const [amount, setAmount] = useState(0);
  const [votedAt, setVotedAt] = useState("");
	
	const bet = async () => {
		try {
      const allowTx = await token
        .connect(signer)
        .approve(contract.address, ethers.constants.MaxUint256);
      await allowTx.wait();
      const tx = await contract.connect(signer).betMany(amount);
			const receipt = await tx.wait();
			setVotedAt(receipt.transactionHash)

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
      <button onClick={bet}>Bet</button>
      { votedAt ? (<p>Bets placed {votedAt}</p>) : (<></>)}
    </div>
  );
}