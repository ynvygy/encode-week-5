import { useState } from "react";

export default function ClaimPrize({contract, signer}) {
	const [amount, setAmount] = useState(0);
  const [claimed, setClaimed] = useState("");
	
	const claimPrize = async () => {
		try {
      const tx = await contract.connect(signer).prizeWithdraw(amount);
			const receipt = await tx.wait();
			setClaimed(receipt.transactionHash)

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
      <button onClick={claimPrize}>Claim Prize</button>
      { claimed ? (<p>Prize claimed {claimed}</p>) : (<></>)}
    </div>
  );
}