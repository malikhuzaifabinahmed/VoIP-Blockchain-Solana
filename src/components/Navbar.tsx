"use client";

import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import React from "react";
import ConnectButton from "./ConnectionButton";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">
          Voice <span className="text-pretty font-medium">over BlockChain</span>{" "}
        </div>
        <div className=" flex gap-3 ">
          <WalletMultiButton className="btn" />
          <WalletDisconnectButton className=" btn-circle " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
