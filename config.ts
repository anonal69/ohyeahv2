// config.ts

import { GambaStandardTokens, TokenMeta } from "gamba-react-ui-v2";

import { PublicKey } from "@solana/web3.js";

// Solana address you wish to receive fees
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  "7s3nxNnKcmJyBxxXeJb8AAJnRocJLCRhbrCcYhPKv5SP",
);

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = "play-Solcade";

// Toggle all live events acrossed gamba toast
export const LIVE_EVENT_TOAST = true;

// RPC - Can be configured in .env
export const RPC_ENDPOINT =
  process.env.NEXT_PUBLIC_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com";

// Platform explorer URL - Appears in welcome banner
export const PLATFORM_EXPLORER_URL = `https://explorer.gamba.so/platform/${PLATFORM_CREATOR_ADDRESS.toString()}`;

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,

  {
    mint: new PublicKey("H8cstTfTxPEm5qP3UXgga8Bdzm2MCDGAghJTgovPy6Y1"),
    symbol: 'OHYEAH',
    name: 'KOOL-AID MAN',
    image: "https://i.ibb.co/nL7j9YG/photo-2024-03-02-12-25-25.jpg",
    decimals: 9,
    baseWager: 10 * 1e6,
  },

  {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    symbol: 'JUP',
    name: 'Jupiter',
    image: "https://assets.coingecko.com/coins/images/34188/standard/jup.png?1704266489",
    decimals: 6,
    baseWager: 1 * 1e6,
  },

  // Uncomment and configure this part if you have a custom SPL token you want to add
  // {
  //   mint: new PublicKey("Your_Token's_PublicKey"),
  //   symbol: 'Your_Token_Symbol',
  //   name: 'Your_Token_Name',
  //   image: "Your_Token_Image_URL",
  //   decimals: Your_Token_Decimals,
  //   baseWager: Your_Base_Wager_Value,
  // }
];
