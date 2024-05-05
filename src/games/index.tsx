// src/games/index.tsx

import { GameBundle } from "gamba-react-ui-v2";
import dynamic from "next/dynamic";

export const GAMES: GameBundle[] = [
  {
    id: "ohyeah",
    meta: {
      background: "#ff6490",
      name: "Ohyeah",
      image: "/games/logo.png",
      description: `Double or nothing, oh yeah! The classic casino game with a twist.`,
    },
    app: dynamic(() => import("./Ohyeah")),
  },
  {
    id: "dice",
    meta: {
      background: "#ff6490",
      name: "Dice",
      image: "/games/logo.png",
      description: `Dice challenges players to predict the outcome of a roll with a unique twist. Select a number and aim to roll below it to win. Adjusting your choice affects potential payouts, balancing risk and reward for an engaging experience.`,
    },
    app: dynamic(() => import("./Dice")),
  },
  {
    id: "slots",
    meta: {
      background: "#5465ff",
      name: "Slots",
      image: "/games/logo.png",
      description: `Slots is the quintessential game of luck and anticipation. Spin the reels and match symbols to win, with potential rewards displayed upfront. A fair and exciting game, Slots offers a classic casino experience tailored for digital enjoyment.`,
    },
    app: dynamic(() => import("./Slots")),
  },
  {
    id: "flip",
    meta: {
      background: "#ffe694",
      name: "Flip",
      image: "/games/logo.png",
      description: `Flip offers a straightforward yet thrilling gamble: choose Heads or Tails and double your money or lose it all. This simple, high-stakes game tests your luck and decision-making with every flip of the coin.`,
    },
    app: dynamic(() => import("./Flip")),
  },
  {
    id: "hilo",
    meta: {
      background: "#ff4f4f",
      name: "HiLo",
      image: "/games/logo.png",
      description: `HiLo is a game of foresight and luck, challenging players to guess whether the next card will be higher or lower. Make consecutive correct guesses to increase your winnings, and decide when to cash out for maximum rewards.`,
    },
    props: { logo: "/logo.svg" },
    app: dynamic(() => import("./HiLo")),
  },
  {
    id: "mines",
    meta: {
      background: "#8376ff",
      name: "Mines",
      image: "/games/logo.png",
      description: `Mines is a strategic game of risk and reward. Uncover squares to find hidden treasures, but beware of mines that could end your game instantly. With every square, the stakes get higher, offering a thrilling experience for daring players.`,
    },
    app: dynamic(() => import("./Mines")),
  },
  {
    id: "roulette",
    meta: {
      background: "#1de87e",
      name: "Roulette",
      image: "/games/logo.png",
      description: `Roulette brings the classic wheel-spinning game to life with a digital twist. Bet on where the ball will land and watch as the wheel decides your fate. With straightforward rules and the chance for big wins, Roulette is a timeless game of chance.`,
    },
    app: dynamic(() => import("./Roulette")),
  },
  {
    id: "plinko",
    meta: {
      background: "#7272ff",
      name: "Plinko",
      image: "/games/logo.png",
      description: `Plinko is played by dropping chips down a pegged board where they randomly fall into slots with varying win amounts. Each drop is a mix of anticipation and strategy, making Plinko an endlessly entertaining game of chance.`,
    },
    app: dynamic(() => import("./Plinko")),
  },
  {
    id: "limbo",
    meta: {
      background: "#ff7d7d",
      name: "Limbo",
      image: "/games/logo.png",
      description: `To play Limbo, set a target multiplier and place your bet. If the outcome surpasses your set multiplier, you win. The game challenges you to balance ambition with the risk of setting a high target. Limbo tests your strategy and luck, pushing for higher multipliers for bigger wins.`,
    },
    app: dynamic(() => import("./Limbo")),
  },
  {
    id: "keno",
    meta: {
      background: "#317aff",
      name: "Keno",
      image: "/games/logo.png",
      description: `Select up to 10 blocks and place your bets! Once the draw happens, watch closely to see if your numbers match the winning ones. Fewer numbers for a chance at bigger wins, or more numbers for better odds of winning smaller prizes.`,
    },
    app: dynamic(() => import("./Keno")),
  },
  {
    id: "crash",
    meta: {
      background: "#FF9800",
      name: "Crash",
      image: "/games/logo.png",
      description: `Predict a multiplier target and watch a rocket attempt to reach it. If the rocket crashes before the target, the player loses; if it reaches or exceeds the target, the player wins.`,
    },
    app: dynamic(() => import("./Crash")),
  },
];
