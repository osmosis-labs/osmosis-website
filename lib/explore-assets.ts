import type { TAsset } from "@/components/sections/explore-assets/circle";

const EXPLORE_ASSETS: Omit<TAsset, "variation">[] = [
  // Ring 1
  {
    name: "Ripple",
    symbol: "XRP",
    display: "XRP",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg",
    ring: 1,
  },
  {
    name: "Celestia",
    symbol: "TIA",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg",
    ring: 1,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    display: "ETH",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg",
    ring: 1,
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    display: "BTC",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg",
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
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg",
    ring: 1,
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.svg",
    ring: 1,
  },
  // Ring 2
  {
    name: "Injective",
    symbol: "INJ",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg",
    ring: 2,
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg",
    ring: 2,
  },
  {
    name: "Dymension",
    symbol: "DYM",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg",
    ring: 2,
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg",
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
    name: "Chainlink",
    symbol: "LINK",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg",
    ring: 2,
  },
  {
    name: "AtomOne",
    symbol: "ATONE",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg",
    ring: 2,
  },
  {
    name: "Babylon",
    symbol: "BABY",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg",
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
    name: "USDC",
    symbol: "USDC",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg",
    ring: 2,
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg",
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
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
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
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro_white.svg",
    ring: 3,
  },
  {
    name: "Luna",
    symbol: "LUNA",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg",
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
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet_white.svg",
    ring: 3,
  },
  {
    name: "Verona",
    symbol: "VERONA",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/verona-main.svg",
    ring: 3,
  },
  {
    name: "GenesisL1",
    symbol: "L1",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg",
    ring: 3,
  },
  {
    name: "Provenance",
    symbol: "HASH",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg",
    ring: 3,
  },
  {
    name: "Sentinel",
    symbol: "P2P",
    iconUri:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg",
    ring: 3,
  },
];

export default EXPLORE_ASSETS;
