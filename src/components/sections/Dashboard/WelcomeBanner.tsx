import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export function WelcomeBanner() {
  return (
    <>
      <div className="image-container">
        <Image src="/banner.png" alt="logo" />
      </div>
      <div className="button-container">
        <Buttons>
          <button
            className="creative-button"
            onClick={() =>
              window.open("https://t.me/KOOL_AID_MAN_SOL", "_blank")
            }
          >
            Telegram
          </button>
          <button
            className="creative-button"
            onClick={() =>
              window.open(
                "https://x.com/koolaidmansol",
                "_blank",
              )
            }
          >
            Twitter
          </button>
          <button
            className="creative-button"
            onClick={() =>
              window.open(
                "https://dexscreener.com/solana/3zbz2skx3byyfgfxkvvqmcnumbqv2gtqau79vfbzyqv9",
                "_blank",
              )
            }
          >
            Dexscreener
          </button>
          <button
            className="creative-button"
            onClick={() => window.open("https://ohyeahgame.app/", "_blank")}
          >
            Website
          </button>
          <button
            className="creative-button"
            onClick={() =>
              window.open(
                "https://magiceden.io/marketplace/juic3dnfts",
                "_blank",
              )
            }
          >
            JUIC3D NFTs
          </button>
        </Buttons>
      </div>
    </>
  );
}
