"use client";

import { useState, useEffect } from "react";

import { useWallet } from "@solana/wallet-adapter-react";

import AiLoader from "@/components/Ailoader";
import ContactsPage from "@/components/ContactsPage";

const Home = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const Wallet = useWallet();
  const PAGE_SIZE = 5;
  const contacts = [
    // Add more contacts here
    ...Array.from({ length: 10 }, (_, i) => {
      const id = i + 3;
      const name = `John Doe ${id}`;
      const phone = `123-456-${id}`;
      return { id, name, phone };
    }),
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const paginatedContacts = contacts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );
  const totalPages = Math.ceil(contacts.length / PAGE_SIZE);

  useEffect(() => {
    if (Wallet.publicKey) {
      setWalletAddress(Wallet.publicKey.toBase58());
    }
  }, [Wallet.publicKey]);

  return (
    <div>
      <main className="flex flex-col justify-center items-center h-screen">
        <div className="w-full h-full min-h-screen text-base-content">
          {!Wallet.connected && <AiLoader />}
          {Wallet.connected && <ContactsPage />}
        </div>
      </main>
    </div>
  );
};

export default Home;
