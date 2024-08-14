import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Spline from "@splinetool/react-spline";
import ConnectButton from "./ConnectionButton";

export default function AiLoader() {
  return (
    <main className="relative w-auto h-screen">
      <div className="top-[40%] left-[50%] absolute w-full font-medium text-[clamp(1.5rem,5vw,3rem)] text-center text-white text-wrap translate-x-[-50%] translate-y-[-50%] animate-pulse">
        Waiting for you wallet connection!
      </div>

      <video
        autoPlay
        muted
        loop
        className="w-full h-screen overflow-hidden object-cover"
      >
        <source src="/animation.mp4"></source>
      </video>
      <ConnectButton />
    </main>
  );
}
