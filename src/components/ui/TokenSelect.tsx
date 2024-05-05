// components/ui/TokenSelect.tsx
import {
  GambaPlatformContext,
  GambaUi,
  TokenValue,
  useCurrentPool,
  useCurrentToken,
  useUserBalance,
} from "gamba-react-ui-v2";
import React, { useContext, useState } from "react";

import { Dropdown } from "@/components/ui/Dropdown";
import { PublicKey } from "@solana/web3.js";
import { TOKENLIST } from "../../../config";

export default function TokenSelect() {
  const [visible, setVisible] = useState(false);
  const context = useContext(GambaPlatformContext);
  const selectedToken = useCurrentToken();
  const balance = useUserBalance();
  const OHHYEAHTokenPublicKey = "H8cstTfTxPEm5qP3UXgga8Bdzm2MCDGAghJTgovPy6Y1";

  const setToken = (token: PublicKey) => {
    if (token.toString() === OHHYEAHTokenPublicKey) {
      const ohYeahPoolAuthority = TOKENLIST[3].poolAuthority;
      context.setPool(token, ohYeahPoolAuthority);
    } else {
      context.setPool(token);
    }
  };

  const click = () => {
    setVisible(!visible);
  };

  const tokensArray = Object.values(TOKENLIST);

  return (
    <div className="relative">
      <GambaUi.Button onClick={click}>
        {selectedToken && (
          <div className="min-w-32 max-sm:text-xs whitespace-nowrap flex items-center gap-2.5">
            <img
              className="w-5 h-5 rounded-full"
              src={selectedToken.image}
              alt="Token"
            />
            <TokenValue amount={balance.balance} />
          </div>
        )}
      </GambaUi.Button>
      <Dropdown visible={visible}>
        {tokensArray.map((token, index) => (
          <button
            key={index}
            className="flex items-center gap-2.5 px-2.5 py-2 hover:bg-gray-800 rounded-lg w-full text-left"
            onClick={() => setToken(token.mint)}
          >
            <img
              className="w-5 h-5 rounded-full"
              src={token.image}
              alt={token.symbol}
            />
            {token.symbol}
          </button>
        ))}
      </Dropdown>
    </div>
  );
}
