require('dotenv').config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

var mainnetKeystore = require('fs').readFileSync('./keystore/mainnet/UTC--2017-12-21T11-47-19.754430712Z--da238d03b67ecd0dfe4857372ec295b172b013aa').toString();
var mainnetPass = require('fs').readFileSync('./keystore/mainnet.pass').toString();
var mainnetWallet = Wallet.fromV3(mainnetKeystore, mainnetPass)
var mainnetProvider = new WalletProvider(mainnetWallet, "https://mainnet.infura.io/");

var rinkebyKeystore = require('fs').readFileSync('./keystore/rinkeby/UTC--2017-12-21T11-47-19.754430712Z--ac0b61ca6f76f2bed08e785f46e2e676724a21d3').toString();
var rinkebyPass = require('fs').readFileSync('./keystore/rinkeby.pass').toString();
var rinkebyWallet = Wallet.fromV3(rinkebyKeystore, rinkebyPass)
var rinkebyProvider = new WalletProvider(rinkebyWallet, "https://rinkeby.infura.io/");


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      gas: 4712388,
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: rinkebyProvider,
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
      network_id: "4"
    },
    mainnet: {
      provider: mainnetProvider,
      gas: 4600000,
      gasPrice: web3.toWei("40", "gwei"),
      network_id: "1"
    }
  }
};
