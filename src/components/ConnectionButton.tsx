"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Loader2 } from "lucide-react";

export default function ConnectButton() {
  const Wallet = useWallet();
  const handleClick = () => {
    const element = document.getElementsByClassName(
      "wallet-adapter-button"
    )[0] as HTMLElement | undefined;
    if (element) {
      element.click();
    }
  };

  return (
    <>
      <div className="top-[25%] left-[calc(50%)] absolute translate-x-[-50%]">
        <div
          onClick={handleClick}
          className="w-fit text-center btn btn-outline"
        >
          {!Wallet.connected && !Wallet.connecting && " Connect To wallet"}
          {Wallet.connecting && (
            <Loader2 className="mx-auto w-fit animate-spin" />
          )}
          {Wallet.connected && "Connected"}
        </div>
      </div>
      <div title="nohover" className="hidden">
        <WalletMultiButton />
      </div>
    </>
  );
}
