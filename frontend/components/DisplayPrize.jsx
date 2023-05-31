import { useState } from "react";
import { ethers } from "ethers";

export default function DisplayPrize({contract}) {
	const [account, setAccount] = useState('');
	const [prize, setPrize] = useState(0);
	
	const displayPrize = async () => {
		try {
      const getPrize = await contract.prize(account);
      const prize = ethers.utils.formatEther(getPrize);
			setPrize(prize);

    } catch (error) {
      console.error(error);
    }
	}

	const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };

	return (
    <div>
			<input type="text" value={account} onChange={handleAccountChange} />
      <button onClick={displayPrize}>Display Prize</button>
			{prize ? (<p>The prize is {prize}</p>) : (<></>)}
    </div>
  );
}