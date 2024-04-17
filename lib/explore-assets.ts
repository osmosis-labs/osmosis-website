import { TAsset } from "@/components/sections/explore-assets/circle";

const EXPLORE_ASSETS: Omit<TAsset, "variation">[] = [
  // Ring 1
  {
    name: "Ripple",
    symbol: "XRP.core",
    display: "XRP",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png",
    ring: 1,
  },
  {
    name: "Celestia",
    symbol: "TIA",
    iconUri: "/assets/icons/tia.svg",
    ring: 1,
  },
  {
    name: "Ethereum",
    symbol: "WETH.grv",
    display: "ETH",
    iconUri: "/assets/icons/eth.svg",
    ring: 1,
  },
  {
    name: "WBTC",
    symbol: "WBTC",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg",
    ring: 1,
  },
  {
    name: "Cosmos Hub",
    symbol: "ATOM",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
    ring: 1,
  },
  {
    name: "Solana",
    symbol: "SOL",
    iconUri: "/assets/icons/sol.svg",
    ring: 1,
  },
  {
    name: "Binance Token",
    symbol: "BNB",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg",
    ring: 1,
  },
  // Ring 2
  {
    name: "Injective",
    symbol: "INJ",
    iconUri: "/assets/icons/inj.svg",
    ring: 2,
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png",
    ring: 2,
  },
  {
    name: "Dymension",
    symbol: "DYM",
    iconUri: "/assets/icons/dym.svg",
    ring: 2,
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    iconUri: "/assets/icons/dot.svg",
    ring: 2,
  },
  {
    name: "Aptos",
    symbol: "APT",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg",
    ring: 2,
  },
  {
    name: "Sui",
    symbol: "SUI",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg",
    ring: 2,
  },
  {
    name: "Arbitrum",
    symbol: "ARB",
    iconUri: "/assets/icons/arb.svg",
    ring: 2,
  },
  {
    name: "Stride",
    symbol: "STRD",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg",
    ring: 2,
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    iconUri: "/assets/icons/matic.svg",
    ring: 2,
  },
  {
    name: "dYdX",
    symbol: "DYDX",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg",
    ring: 2,
  },
  {
    name: "sei",
    symbol: "SEI",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg",
    ring: 2,
  },
  // Ring 3
  {
    name: "Akash",
    symbol: "AKT",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg",
    ring: 3,
  },
  {
    name: "Juno",
    symbol: "JUNO",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg",
    ring: 3,
  },
  {
    name: "Secret Network",
    symbol: "SCRT",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg",
    ring: 3,
  },
  {
    name: "Axelar",
    symbol: "AXL",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg",
    ring: 3,
  },
  {
    name: "Fantom",
    symbol: "FTM",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg",
    ring: 3,
  },
  {
    name: "Kava",
    symbol: "KAVA",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg",
    ring: 3,
  },
  {
    name: "Saga",
    symbol: "SAGA",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg",
    ring: 3,
  },
  {
    name: "Cronos",
    symbol: "CRO",
    iconUri: "/assets/icons/cro.svg",
    ring: 3,
  },
  {
    name: "Evmos",
    symbol: "EVMOS",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg",
    ring: 3,
  },
  {
    name: "Stargaze",
    symbol: "STARS",
    iconUri: "/assets/icons/stars.svg",
    ring: 3,
  },
  {
    name: "Filecoin",
    symbol: "FIL",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg",
    ring: 3,
  },
  {
    name: "Luna",
    symbol: "LUNA",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg",
    ring: 3,
  },
  {
    name: "Agoric",
    symbol: "BLD",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg",
    ring: 3,
  },
  {
    name: "Neutron",
    symbol: "NTRN",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg",
    ring: 3,
  },
  {
    name: "Fetchhub",
    symbol: "FET",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg",
    ring: 3,
  },
];

export default EXPLORE_ASSETS;
