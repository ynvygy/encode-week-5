/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	...nextConfig,
	env: {
		LOTTERY_ADDRESS: '0x29575D3a3EF69507B19E600f7e816C2dFe564E34',
		TOKEN_ADDRESS: '0xbaB72E7665149915c61f8ecAD5f762C2D81B497E'
	},
};
