// config.ts

import { PublicKey } from "@solana/web3.js";
import { TokenMetadata } from "./types";
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
  process.env.NEXT_PUBLIC_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com";

// Platform explorer URL - Appears in welcome banner
export const PLATFORM_EXPLORER_URL = `https://explorer.gamba.so/platform/${PLATFORM_CREATOR_ADDRESS.toString()}`;


// List of tokens supported by this platform
export const TOKENS: Record<string, TokenMetadata> = {
  // SOL
  So11111111111111111111111111111111111111112: {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    symbol: "SOL",
    name: "Solana",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // USDC
  EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    symbol: "USDC",
    name: "USD Coin",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAM1BMVEUAAAAgcM8oeMcndckndcondco1fs1ChtFQj9RdmNdroNt4qd6TuuW81O/X5vXl7vn///9JjkDLAAAABXRSTlMAECDg8En8Fj4AAAFcSURBVFjDvZfRQsMgDEXp2minzuX/v9YXnaXJvbktzjw1QA6BQkhagzLbQ5Z2VCyRQXMdMRuR5fzsohcmyKg9IZgso/Y5YT/mfausLyWh73d3Z3okBPMI2CEw4OYI4J8QEMe6JU51rdw+bjwl0MXCPsU+ahlhxvMnakIofh9ZRQqgB2o3ZKrsDfzP3oXCX7oq5oBvhbnAdxwQMkDmwO/nFbiwA4B5SNfmFPWjriLAHg689aM+8JUwd/dbANQxCKxBPLRnATlFAsCDJAN6xCmA2Vpfh1bv+n0UEO/5YcCNARYcPyUNXaZOI6G6MYB2G8V44HU82M2zyhGpsZ9VxUQxKhuNytiF+l24jL5M30/bggnpquLzfPZ1ThIEFshC74QzDMfmXiVJKBA6tS/TtJ+2VyVPNAw4lqrSBiVZJqqWrj+zYHhWyfMHRZeAmAYLR6l2nZD15d+K7wjBo74A10JdTYrgUpYAAAAASUVORK5CYII=",
    decimals: 6,
    baseWager: 1e6,
  },
  H8cstTfTxPEm5qP3UXgga8Bdzm2MCDGAghJTgovPy6Y1: {
    mint: new PublicKey("H8cstTfTxPEm5qP3UXgga8Bdzm2MCDGAghJTgovPy6Y1"),
    poolAuthority: new PublicKey("H83nsJJe11WY7TjhiVoDq5xmiYs7rU2iY4FweJuahVz2"),
    symbol: 'OHYEAH',
    name: 'KOOL-AID MAN',
    image: "https://i.ibb.co/nL7j9YG/photo-2024-03-02-12-25-25.jpg",
    decimals: 9,
    baseWager: 100 * 1e9,
  },
  JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN: {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    symbol: 'JUP',
    name: 'Jupiter',
    image: "https://assets.coingecko.com/coins/images/34188/standard/jup.png?1704266489",
    decimals: 6,
    baseWager: 1 * 1e6,
  },
  // You can easily add more tokens here
  //
  // "000000000000000000000000000000000000000000": {
  //   mint: new PublicKey("000000000000000000000000000000000"),
  //   symbol: "",
  //   name: "",
  //   image: "",
  //   decimals: 9,
  //   baseWager: 1e9,
  // },
  //
};

// Fallback handler to utilize the tokens dictionary for metadata lookup
useTokenMeta.setFallbackHandler((mint) => {
  const mintAddress = mint.toString();
  const token = TOKENS[mintAddress];
  if (token) {
    return {
      ...token,
      mint: new PublicKey(token.mint),
    };
  }
  return undefined;
});
