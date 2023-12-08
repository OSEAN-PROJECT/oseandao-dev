import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Binance } from "@thirdweb-dev/chains"

const sdk = new ThirdwebSDK(Binance)
const explorerAPIUrl = "https://api.bscscan.com/api"; // e.g. https://api.etherscan.io/api
const explorerAPIKey = "NV23RSFR8N61X44WNDAF7WFHM8FQ7GJRUA"; // Generate API key on the explorer

const contractAddress = "0xd9CD1c1756E30A3fe76577b291EdD1d679981F47";


await sdk.verifier.verifyContract(
  contractAddress,
  explorerAPIUrl,
  explorerAPIKey,
);