![OSEANDAO](https://osean.online/theme-assets/images/bannerBridge.jpg)

## OSEAN DAO CONTRACTS
In this repository you will find under contracts directory:

1) OSEAN DAO CONTRACT (based on Thirdweb Vote with additional interfaces to allow onlyGovernance to swap OSEAN, BNB and USDT).
2) NFT GOVERNANCE CONTRACT (based on Thirdweb DropERC721. The contract has been altered to support voting for OZ governor with VotesUpgradeable.sol extension)
3) STAKING CONTRACTS based on Thirdweb Contracts.


## Getting Started

Create a project using this example:

```bash
npx thirdweb create --contract --template hardhat-javascript-starter
```

You can start editing the page by modifying `contracts/Contract.sol`.

To add functionality to your contracts, you can use the `@thirdweb-dev/contracts` package which provides base contracts and extensions to inherit. The package is already installed with this project. Head to our [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) to learn more.

## Building the project

After any changes to the contract, run:

```bash
npm run build
# or
yarn build
```

to compile your contracts. This will also detect the [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) detected on your contract.

## Deploying Contracts

When you're ready to deploy your contracts, just run one of the following command to deploy you're contracts:

```bash
npm run deploy
# or
yarn deploy
```

## Releasing Contracts

If you want to release a version of your contracts publicly, you can use one of the followings command:

```bash
npm run release
# or
yarn release
```

