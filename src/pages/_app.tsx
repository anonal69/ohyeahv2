// src/pages/_app.tsx
import "@/styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { GambaPlatformProvider, TokenMetaProvider } from "gamba-react-ui-v2";
import {
  LIVE_EVENT_TOAST,
  PLATFORM_CREATOR_ADDRESS,
  RPC_ENDPOINT,
  TOKENLIST,
} from "../../config";

import { AppProps } from "next/app";
import Footer from "@/components/layout/Footer";
import { GAMES } from "../games";
import { GambaProvider, SendTransactionProvider } from "gamba-react-v2";
import GameToast from "@/hooks/useGameEvent";
import React from "react";
import { Toaster } from "sonner";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useDisclaimer } from "@/hooks/useDisclaimer";

function MyApp({ Component, pageProps }: AppProps) {
  const { showDisclaimer, DisclaimerModal } = useDisclaimer();

  return (
    <ConnectionProvider
      endpoint={RPC_ENDPOINT}
      config={{ commitment: "processed" }}
    >
      <WalletProvider autoConnect wallets={[]}>
        <WalletModalProvider>
          <TokenMetaProvider tokens={TOKENLIST}>
          <SendTransactionProvider priorityFee={400_201}>
            <GambaProvider>
              <GambaPlatformProvider
                creator={PLATFORM_CREATOR_ADDRESS}
                defaultCreatorFee={0.05} // 5%
                defaultJackpotFee={0.01} // 1%
              >
                <Component {...pageProps} />
                <Footer />
                <Toaster
                  position="bottom-right"
                  richColors
                  toastOptions={{
                    style: { background: "#15151f" },
                  }}
                />
                {LIVE_EVENT_TOAST && <GameToast />}
                {showDisclaimer && <DisclaimerModal />}
              </GambaPlatformProvider>
            </GambaProvider>
          </SendTransactionProvider>
          </TokenMetaProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
