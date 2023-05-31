import { useState } from "react";

export default function OpenBets({provider, contract}) {
	const [openedAt, setOpenedAt] = useState(0);
	const [duration, setDuration] = useState(0);
	
	const openBets = async () => {
		try {
			const currentBlock = await provider.getBlock("latest");
      const tx = await contract.openBets(currentBlock.timestamp + Number(duration));
			const receipt = await tx.wait();
			setOpenedAt(receipt.transactionHash)

    } catch (error) {
      console.error(error);
    }
	}

	const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

	return (
    <div>
			<input type="number" value={duration} onChange={handleDurationChange} />
      <button onClick={openBets}>Open Bets</button>
			<p>It was opened at {openedAt}</p>
    </div>
  );
}