/**
 * Interface representing an upcoming asset.
 */
export interface UpcomingAsset {
  /**
   * The name of the asset.
   */
  assetName: string;
  /**
   * The symbol of the asset.
   */
  symbol: string;
  /**
   * The name of the blockchain or network where the asset originates.
   */
  chainName: string;
  /**
   * The URL to the logo image of the asset.
   */
  logoURL?: string;
  images: {
    image_sync?: unknown;
    png?: string;
    svg?: string;
    theme?: {
      primary_color_hex?: string;
      circle?: boolean;
      dark_mode?: boolean;
    };
  }[];
  socials?: {
    /**
     * The URL to the website of the project/asset.
     */
    website?: string;
    twitter?: string;
  };
  /**
   * The estimated launch date of the asset. Accepts dates in the formats: month name + year (e.g., March 2024), month name + day + year (e.g., March 22, 2024), and quarter + year (e.g., Q2 2024).
   */
  estimatedLaunchDateUtc?: string;
  /**
   * Indicates whether to show the launch date of the asset.
   */
  showLaunchDate: boolean;
}

/**
 * Interface representing the schema for upcoming assets.
 */
export interface LandingPageData {
  /**
   * Array containing details of upcoming assets.
   */
  upcomingAssets: UpcomingAsset[];
}
