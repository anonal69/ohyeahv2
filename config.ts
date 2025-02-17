// config.ts

import { PublicKey } from "@solana/web3.js";
import { useTokenMeta } from "gamba-react-ui-v2";

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
  process.env.NEXT_PUBLIC_RPC_ENDPOINT ?? "https://mainnet.helius-rpc.com/";

// Platform explorer URL - Appears in welcome banner
export const PLATFORM_EXPLORER_URL = `https://explorer.gamba.so/platform/${PLATFORM_CREATOR_ADDRESS.toString()}`;

// Supported tokens
export const TOKENLIST = [
  // SOL
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    name: "Solana",
    symbol: "SOL",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // USDC
  {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    name: "USD Coin",
    symbol: "USDC",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // JUP
  {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    name: "Jupiter",
    symbol: "JUP",
    image:
      "https://assets.coingecko.com/coins/images/34188/standard/jup.png?1704266489",
    decimals: 6,
    baseWager: 1 * 1e6,
  },
  // OHYEAH
  {
    mint: new PublicKey("H8cstTfTxPEm5qP3UXgga8Bdzm2MCDGAghJTgovPy6Y1"),
    poolAuthority: new PublicKey(
      "H83nsJJe11WY7TjhiVoDq5xmiYs7rU2iY4FweJuahVz2",
    ),
    name: "KOOL-AID MAN",
    symbol: "OHYEAH",
    image: "https://i.ibb.co/nL7j9YG/photo-2024-03-02-12-25-25.jpg",
    decimals: 9,
    baseWager: 100 * 1e9,
  },
  // ADD NEW TOKENS HERE
  // USE TOKEN LAYOUT FOR LAYOUT STRUCTURE
  // {
  //   mint: new PublicKey(""),
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },
];
