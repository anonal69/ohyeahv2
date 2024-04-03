import React from 'react';
import styled from 'styled-components';

const Welcome = styled.div`
  /* Your welcome banner styles */
`;

const Buttons = styled.div`
  /* Your buttons container styles */
`;

const Image = styled.img`
  width: 100%; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Ensure the image is displayed as a block element */
`;

export function WelcomeBanner() {
  return (
    <Welcome>
      <div className="image-container">
        <Image src="/banner.png" alt="logo" />
      </div>
      <div className="button-container">
        <Buttons>
          <button className="creative-button" onClick={() => window.open('https://t.me/KOOL_AID_MAN_SOL', '_blank')}>
            Telegram
          </button>
          <button className="creative-button" onClick={() => window.open('https://x.com/koolaidmansol?s=21&t=Hj99KZCum1FUaim2KVoteg', '_blank')}>
            Twitter
          </button>
          <button className="creative-button" onClick={() => window.open('https://dexscreener.com/solana/3zbz2skx3byyfgfxkvvqmcnumbqv2gtqau79vfbzyqv9', '_blank')}>
            Dexscreener
          </button>
          <button className="creative-button" onClick={() => window.open('https://kool-aid.xyz/', '_blank')}>
            Website
          </button>
          <button className="creative-button" onClick={() => window.open('https://magiceden.io/marketplace/juic3dnfts', '_blank')}>
            JUIC3D NFTs
          </button>
        </Buttons>
      </div>
    </Welcome>
  );
}
