export type IntegratedBridge =
  | {
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };

/**
 * Osmosis Zone List is a basic list of assets, in order as shown on the Osmosis Zone.
 */
export interface AssetList {
  chain_name: string;
  assets: Asset[];
}

export interface Asset {
  /**
   * Chain name as used in the Cosmos Chain Registry
   */
  chain_name: string;
  /**
   * Base denomination as used for the asset in the Cosmos Chain Registry
   */
  base_denom: string;
  /**
   * The entire IBC path, with the port and channel data for each hop
   */
  path?: string;
  /**
   * Whether the asset have verified status Osmosis Zone app.
   */
  osmosis_verified?: boolean;
  /**
   * Whether the asset can reliably be transferred to or from Osmosis.
   */
  osmosis_unstable?: boolean;
  /**
   * Whether the asset Deposit and Withdraw functions are disabled on Osmosis.
   */
  osmosis_disabled?: boolean;
  /**
   * Whether the asset should be temporarily unlisted on the Osmosis Zone app.
   */
  osmosis_unlisted?: boolean;
  /**
   * A custom on-hover tooltip message descirbing the asset on the Osmosis Zone app.
   */
  tooltip_message?: string;
  listing_date_time_utc?: string;
  /**
   * Whether the asset has been confrimed by a human to display and function correctly on Osmosis Zone.
   */
  osmosis_validated?: boolean;
  canonical?: {
    /**
     * Chain name as used in the Cosmos Chain Registry
     */
    chain_name: string;
    /**
     * Base denomination as used for the asset in the Cosmos Chain Registry
     */
    base_denom: string;
  };
  transfer_methods?: (ExternalInterface | IntegratedBridge | FiatOnramp)[];
  /**
   * The peg mechanism for synthetically created assets--most important for stablecoins.
   */
  peg_mechanism?: "collateralized" | "algorithmic" | "hybrid";
  twitter_URL?: string;
  /**
   * Properties that should not follow the Chain Registry, and behave or appear differently on Osmosis Zone.
   */
  /**
   * The symbol of an asset. For example BTC.
   */
  symbol?: string;
  logo_URIs?: {
    png?: string;
    svg?: string;
  };
  /**
   * [OPTIONAL] The coingecko id to fetch asset data from coingecko v3 api. See https://api.coingecko.com/api/v3/coins/list
   */
  coingecko_id?: string;
  /**
   * How the asset should be described. E.g., $USTC is named: 'Terra USD'.
   */
  name?: string;
  categories?: string[];
}

export interface ExternalInterface {
  type?: "external_interface";
  /**
   * The URL of the interface used for depositing the asset to this chain.
   */
  deposit_url?: string;
  /**
   * The URL of the interface used for withdrawing the asset to this chain.
   */
  withdraw_url?: string;
}

export interface FiatOnramp {
  type?: "fiat_onramp";
  name?: string;
  providerAssetId: string;
}
