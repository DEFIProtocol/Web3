/* @type import('hardhat/config').HardhatUserConfig */
module.exports ={
    solidity: {
        verision: '0.8.9',
        defaultNetwork: 'goerli',
        networks: {
            hardhat: {},
            goerli: {
                url: 'https://rpc.ankr.com/eth-goerli',
                accounts: [`0x${process.env.PRIVATE_KEY}`]
            }
        },
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};