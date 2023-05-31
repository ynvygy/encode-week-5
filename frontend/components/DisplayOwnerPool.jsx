import { useState } from "react";
import { ethers } from "ethers";

export default function DisplayOwnerPool({contract}) {
	const [balance, setBalance] = useState(0);
	
	const displayOwnerPool = async () => {
		try {
			const getBalance = await contract.ownerPool();
			setBalance(ethers.utils.formatEther(balance))

    } catch (error) {
      console.error(error);
    }
	}

	return (
    <div>
      <button onClick={displayOwnerPool}>Display owner pool</button>
			{balance ? (<p>The owner pool balance is: {balance}</p>) : (<></>)}
    </div>
  );
}