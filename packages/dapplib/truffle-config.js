require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stool rice sad huge hidden indoor force gate'; 
let testAccounts = [
"0x991b094a6f3822c16035e74e3a93b382c28cee9e2a2819e219b6b992ac7d4894",
"0x9f5e13c0cd9b23003826a11ddbc16c7e25665d910e57148f3809ddaeee5bd2b7",
"0x2ecd17c4d6f49a220e765c1d82eb05a6ee47748e627295d47b5edef5f23939ea",
"0xbe6e2306c3807cdc9b91a6bcb6bf5a9a3324171b00a3055ff47cbad52bd658ac",
"0x12c6a987d7b95638adde3d0743c5909cde827f3fcd4bc493876ab84e12fe1a9e",
"0xa5f6ae949ca7bd1c26b4332f2ab876896c48ede2f479c6050fe989a530a94888",
"0x5262bfa00821c06c43b6b990a95f96fc8a7b87e15f922bc5a8d1fe7fa0ccad9a",
"0xb3900aac2a9423c66ae01a563f4180a66cc57c9c9f5044988506a7825bacc893",
"0x9739907a1adf95d32d9fa33f5ab40c8a52adf604867219d909e11c063180eabc",
"0x392369f91bbeb2b19b6f33bdd001fa70ba1e084fc62888d54c7d7a46a5cb4260"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
