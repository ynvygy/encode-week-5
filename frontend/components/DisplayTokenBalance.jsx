import { useState } from "react";
import { ethers } from "ethers";

export default function DisplayTokenBalance({token}) {
	const [account, setAccount] = useState('');
	const [balance, setBalance] = useState(0);
	
	const displayTokenBalance = async () => {
		try {
			const getBalance = await token.balanceOf(account);
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
      <button onClick={displayTokenBalance}>Display Token Balance</button>
			{balance ? (<p>The Balance for account {account} is {balance}</p>) : (<></>)}
    </div>
  );
}