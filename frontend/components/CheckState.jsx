import { useState } from "react";

export default function CheckState({provider, contract}) {
	const [isOpen, setIsOpen] = useState(false);
	const [blockDate, setBlockDate] = useState(0);
	const [closingTime, setClosingTime] = useState(0);
	const [isLoading, setLoading] = useState(false);

	const checkState = async () => {
		try {
      const openStatus = await contract.betsOpen();
			setIsOpen(openStatus);

			const blockNumber = await provider.getBlockNumber();
			const currentBlock = await provider.getBlock(blockNumber);
			const currentBlockDate = new Date(currentBlock.timestamp * 1000).toLocaleString();
			setBlockDate(currentBlockDate);
	
			const closingTime = await contract.betsClosingTime();
			const closingTimeDate = new Date(closingTime.toNumber() * 1000).toLocaleString();
			setClosingTime(closingTimeDate);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
	}

	if (isOpen) {
    return (
      <div>
        <p>The current status is {isOpen ? 'Open' : 'Closed'}</p>
				<p>The current block date is {blockDate}</p>
				<p>THe current closing time is {closingTime}</p>
      </div>
    );
  }

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <button onClick={checkState}>Check State</button>
    </div>
  );
}
