/**
 * List of assets generated in `assetlist.json` on the Osmosis Zone frontend CMS.
 */
export interface AssetList {
  chain_name: string;
  assets: Asset[];
}

/**
 * Represents an asset present in the AssetList.
 */
export interface Asset {
  /** Name of the blockchain network. */
  chainName: string;
  /** Denomination of the asset on its source chain. */
  sourceDenom: string;
  /** Minimal denomination of the asset. */
  coinMinimalDenom: string;
  /** Symbol of the asset. */
  symbol: string;
  /** Number of decimal places for the asset. */
  decimals: number;
  /** URIs for the asset's logo in different formats. */
  logoURIs: {
    /** URI for the SVG format of the logo. */
    svg?: string;
    /** URI for the PNG format of the logo. */
    png?: string;
  };
  /** Coingecko ID of the asset. */
  coingeckoId: string;
  /** Categories that the asset belongs to. */
  categories: string[];
  /** Pegging mechanism used by the asset. */
  pegMechanism: string;
  /** Methods available for transferring the asset. */
  transferMethods: TransferMethod[];
  /** Counterparty chains associated with the asset. */
  counterparty: Counterparty[];
  /** Key identifying the variant group of the asset. */
  variantGroupKey: string;
  /** Name of the asset. */
  name: string;
  /** Indicates whether the asset is verified. */
  verified: boolean;
  /** Indicates whether the asset is unstable. */
  unstable: boolean;
  /** Indicates whether the asset is disabled. */
  disabled: boolean;
  /** Indicates whether the asset is in preview mode. */
  preview: boolean;
  /** Indicates the launch date of the asset */
  listingDate?: string;
}

/**
 * Represents a transfer method for the asset.
 */
interface TransferMethod {
  /** Name of the transfer method. */
  name: string;
  /** Type of the transfer method. */
  type: string;
  /** URL for depositing the asset. */
  depositUrl?: string;
  /** URL for withdrawing the asset. */
  withdrawUrl?: string;
  /** Counterparty chains associated with this transfer method. */
  counterparty?: Counterparty[];
  /** ID of the unwrapped asset. */
  unwrappedAssetId?: string;
  /** Chain information for the transfer. */
  chain?: {
    /** Port of the chain. */
    port: string;
    /** Channel ID of the chain. */
    channelId: string;
    /** Path of the transfer on the chain. */
    path: string;
  };
}

/**
 * Represents a counterparty chain associated with the asset.
 */
interface Counterparty {
  /** Name of the counterparty chain. */
  chainName: string;
  /** Denomination of the asset on the counterparty chain. */
  sourceDenom: string;
  /** Type of the counterparty chain. */
  chainType?: string;
  /** ID of the counterparty chain. */
  chainId?: string | number;
  /** Address associated with the chain. */
  address?: string;
  /** Symbol of the asset on the counterparty chain. */
  symbol: string;
  /** Number of decimal places for the asset on the counterparty chain. */
  decimals: number;
  /** URIs for the asset's logo in different formats on the counterparty chain. */
  logoURIs: {
    /** URI for the SVG format of the logo on the counterparty chain. */
    svg?: string;
    /** URI for the PNG format of the logo on the counterparty chain. */
    png?: string;
  };
}
