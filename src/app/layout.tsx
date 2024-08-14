import WalletProvider from "@/components/provider";
import "./globals.css";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ height: "--webkit-fill-available" }} lang="en">
      <body className="">
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
