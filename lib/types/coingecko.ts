export interface Coin {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id: any;
  platforms: { [key: string]: any };
  detail_platforms: { [key: string]: any };
  block_time_in_minutes: number;
  hashing_algorithm: any;
  categories: string[];
  preview_listing: boolean;
  public_notice: any;
  additional_notices: any[];
  localization: { [key: string]: string };
  description: { [key: string]: string };
  links: CoinLinks;
  image: Image;
  country_origin: string;
  genesis_date: any;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  community_data: CommunityData;
  developer_data: DeveloperData;
  status_updates: any[];
  last_updated: string;
}

export interface CoinLinks {
  homepage?: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name?: string;
  facebook_username: string;
  bitcointalk_thread_identifier: string;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: ReposUrl;
}

export interface Image {
  thumb: string;
  small: string;
  large: string;
}

export interface CommunityData {
  facebook_likes: any;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  reddit_accounts_active_48h: number;
  telegram_channel_user_count: number;
}

export interface DeveloperData {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  code_additions_deletions_4_weeks: CodeAdditionsDeletions4Weeks;
  commit_count_4_weeks: number;
  last_4_weeks_commit_activity_series: number[];
}

export interface CodeAdditionsDeletions4Weeks {
  additions: number;
  deletions: number;
}

export interface ReposUrl {
  github: string[];
  bitbucket: string[];
}
