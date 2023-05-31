import { useState } from "react";
import { ethers } from "ethers";

export default function DisplayBalance({provider}) {
	const [account, setAccount] = useState('');
	const [balance, setBalance] = useState(0);
	
	const displayBalance = async () => {
		try {
			const getBalance = await provider.getBalance(account);
			setBalance(ethers.utils.formatEther(getBalance));

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
      <button onClick={displayBalance}>Display Balance</button>
			{balance ? (<p>The Balance for account {account} is {balance}</p>) : (<></>)}
    </div>
  );
}