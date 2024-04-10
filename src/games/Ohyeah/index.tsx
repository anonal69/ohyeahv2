import { GambaUi, useWagerInput } from "gamba-react-ui-v2";
import React, { useState } from "react";

import { toast } from "sonner";
import { useGamba } from "gamba-react-v2";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export default function Ohyeah() {
  const game = GambaUi.useGame();
  const gamba = useGamba();
  const [contentToShow, setContentToShow] = useState("start"); // 'start', 'video', 'result'
  const walletModal = useWalletModal();
  const wallet = useWallet();
  const [wager, setWager] = useWagerInput();

  const connect = () => {
    if (!wallet.connected) {
      wallet.wallet ? wallet.connect() : walletModal.setVisible(true);
    }
  };

  const play = async () => {
    setContentToShow("video");

    try {
      await game.play({ bet: [2, 0], wager });
      const result = await gamba.result();
      console.log(result);

      setContentToShow(result.payout > 0 ? "win" : "loss");
    } catch (error) {
    toast.error("Error playing the game.");
      console.error("Error playing the game:", error);
    }
  };

  return (
    <>
      <GambaUi.Portal target="screen">
        <GambaUi.Responsive>
        <div className="flex justify-center items-center m-auto">
          {contentToShow === "start" ? (
            <img
            key={"start"}
              src="/games/ohyeah/start.png"
              alt="Start"
              className="w-full h-full object-contain"
            />
          ) : contentToShow === "video" ? (
            <video
              key={"loading"}
              autoPlay
              muted={false}
              playsInline
              className="w-full h-full object-contain"
              loop
            >
              <source src="/games/ohyeah/loading.mp4" type="video/mp4" />
            </video>
          ) : contentToShow === "win" ? (
            <video
              key={"win"}
              autoPlay
              muted={false}
              playsInline
              className="w-full h-full object-contain"
            >
              <source src="/games/ohyeah/win.mp4" type="video/mp4" />
            </video>
          ) : (
            <video
              key={"loss"}
              autoPlay
              muted={false}
              playsInline
              className="w-full h-full object-contain"
            >
              <source src="/games/ohyeah/loss.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        </GambaUi.Responsive>
      </GambaUi.Portal>
      <GambaUi.Portal target="controls">
        <GambaUi.WagerInput value={wager} onChange={setWager} />
        {wallet.connected ? (
          <GambaUi.PlayButton onClick={play}>Play</GambaUi.PlayButton>
        ) : (
          <GambaUi.Button main onClick={connect}>
            Play
          </GambaUi.Button>
        )}
      </GambaUi.Portal>
    </>
  );
}
