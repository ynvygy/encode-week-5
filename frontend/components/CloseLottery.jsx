import { useState } from "react";

export default function CloseLottery({contract}) {
	const [closedAt, setClosedAt] = useState(0);
	
	const closeLottery = async () => {
		try {
      const tx = await contract.closeLottery();
			const receipt = await tx.wait();
			setClosedAt(receipt.transactionHash)

    } catch (error) {
      console.error(error);
    }
	}

	return (
    <div>
      <button onClick={closeLottery}>CloseLottery</button>
			<p>It was closed at {closedAt}</p>
    </div>
  );
}