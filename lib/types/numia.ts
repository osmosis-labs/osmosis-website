/**
 * Interface representing a Token returned by the Numia endpoints
 */
export interface NumiaToken {
  /** Symbol of the token. */
  symbol: string;
  /** Denomination of the token. */
  denom: string;
  /** Name of the token. */
  name: string;
  /** Display of the token. */
  display: string;
  /**
   * Indicates if the token is main.
   * It can be either a boolean or a number ranging from 0 to 1.
   */
  main: boolean | number;
  /** Exponent of the token. */
  exponent: number;
  /** Volume in the last 24 hours of the token. */
  volume_24h: number | null;
  /** Change in volume in the last 24 hours of the token. */
  volume_24h_change: number | null;
  /** Price of the token. */
  price: number | null;
  /** Change in price in the last 24 hours of the token. */
  price_24h_change: number | null;
  /** Liquidity of the token. */
  liquidity: number | null;
  /** Change in liquidity in the last 24 hours of the token. */
  liquidity_24h_change: number | null;
}

export interface OsmoAPR {
  labels: string;
  symbol: string;
  apr: number;
}

export interface SupplyMetrics {
  lastUpdate: string;
  totalSupply: number;
  burntSupply: number;
  circulatingSupply: number;
}
export interface LandingPageMetrics {
  assets_in_chain: {
    value: number;
    growth_rate_seconds: number;
  };
  traders_last_30_days: {
    value: number;
    growth_rate_seconds: number;
  };
  cumulative_volume: {
    value: number;
    growth_rate_seconds: number;
  };
  volume_24h: {
    value: number;
    growth_rate_seconds: number;
  };
}
