require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stomach deny pumpkin update gesture canoe army gentle'; 
let testAccounts = [
"0x36568fbf1b511b445666e170bd15c1a4009a2d95a6c32b298473cbfcaea3e613",
"0xa6447fdb405c2810c3e5977b02e86aa44388df68a357c5f912fe4bd4f9218cb5",
"0xae906973f185ec4b55fffc75938584a3a2f3b7a1e49b7a08995f244735f64402",
"0x71cc9be19a4a2bd54f9867f56a29a66fb9480f2fa18ffd03b38f0fd7c37243af",
"0x44275f02b465e99b4841f3f0deabb111c813b3686b300d7568400d85a938abd9",
"0x49d0fd8f617005e61156e07f3090a49357db4dcc2ce6aada9d0774f05b1307ff",
"0x745959118213687ca64677f20ecf3eeb9eeb50f5245e5d0849934c77d75f4327",
"0x93f121adfa3d14e5763d6584bea3debbc9aed6e86053d3e088918a74c0b400eb",
"0xd4922f2251f810cdeb4b23810d97387b1c6d94349064e1a7ae65cd2d57defc89",
"0xf4976ec991cd42342744e5cc35b40e25eee458e9a8eaabc24506c582fa2df213"
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
            version: '^0.8.0'
        }
    }
};

