Backend: yarn ts-node --files ./scripts/deployLottery.ts

Frontend:
- Edit hardhat.config.ts with addresses
- npm run dev

For fast testing:
- Open bets with 200
- Buy tokens with 0.03 (this is the matic value, with the current ratio it should return 3 LTO tokens)
- Wait for lottery to end (should take about 2 minutes)
