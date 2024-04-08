import { TAsset } from "@/components/sections/explore-assets/circle";

const EXPLORE_ASSETS: Omit<TAsset, "variation">[] = [
  {
    name: "ChainLink",
    symbol: "LINK",
    iconUri: "/assets/icons/link.svg",
    important: true,
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg",
    important: true,
  },
  {
    name: "USDT",
    symbol: "USDT",
    iconUri: "/assets/icons/usdt.svg",
    important: true,
  },
  {
    name: "Cosmos Hub",
    symbol: "ATOM",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
    important: true,
  },
  {
    name: "WBTC",
    symbol: "WBTC",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg",
    important: true,
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png",
    important: true,
  },
  {
    name: "dYdX",
    symbol: "DYDX",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg",
    important: true,
  },
  {
    name: "Kava",
    symbol: "KAVA",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg",
    important: false,
  },
  {
    name: "Solana",
    symbol: "SOL",
    iconUri: "/assets/icons/sol.svg",
    important: false,
  },
  {
    name: "Cronos",
    symbol: "CRO",
    iconUri: "/assets/icons/cro.svg",
    important: false,
  },
  {
    name: "Stride",
    symbol: "STRD",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg",
    important: false,
  },
  {
    name: "Celestia",
    symbol: "TIA",
    iconUri: "/assets/icons/tia.svg",
    important: false,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    iconUri: "/assets/icons/eth.svg",
    important: false,
  },
  {
    name: "Arbitrum",
    symbol: "ARB",
    iconUri: "/assets/icons/arb.svg",
    important: false,
  },
  {
    name: "USDC",
    symbol: "USDC",
    iconUri: "/assets/icons/usdc.svg",
    important: false,
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    iconUri: "/assets/icons/dot.svg",
    important: false,
  },
  {
    name: "Dymension",
    symbol: "DYM",
    iconUri: "/assets/icons/dym.svg",
    important: false,
  },
  {
    name: "Injective",
    symbol: "INJ",
    iconUri: "/assets/icons/inj.svg",
    important: false,
  },
];

export default EXPLORE_ASSETS;
