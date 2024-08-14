"use client";
import React, { useEffect } from "react";
import { AlertOctagon, ArrowRight } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-[#E9E9F2] to-[#525298] p-5 min-h-screen">
      <div className="bg-white bg-opacity-10 shadow-2xl backdrop-blur-lg rounded-3xl w-full max-w-lg overflow-hidden">
        <div className="p-8 sm:p-12">
          <div className="flex justify-center items-center bg-[#525298] shadow-lg mx-auto mb-8 rounded-full w-24 h-24">
            <AlertOctagon className="w-14 h-14 text-[#22B07D]" />
          </div>
          <h2 className="mb-6 font-extrabold text-4xl text-center text-white">
            Connection Error
          </h2>
          <p className="mb-10 text-[#E9E9F2] text-center text-lg">
            We&apos;ve encountered an issue with your blockchain VoIP
            connection. Our team is working to resolve it.
          </p>
          <div className="space-y-6 mb-10">
            <div className="bg-white bg-opacity-20 p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#22B07D] rounded-full w-4 h-4 animate-pulse"></div>
                <span className="font-semibold text-lg text-white">
                  Network Status
                </span>
              </div>
              <p className="text-[#E9E9F2]">
                Our systems are currently experiencing difficulties. Please
                stand by as we work to restore services.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <a
              href="/"
              className="inline-flex justify-center items-center space-x-2 bg-[#22B07D] hover:bg-opacity-90 shadow-lg px-8 py-3 rounded-full font-bold text-white transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              <span>Return to Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="block text-[#E9E9F2] hover:text-white transition-colors duration-300"
            >
              Check System Status
            </a>
          </div>
        </div>
        <div className="bg-[#525298] bg-opacity-50 py-4">
          <p className="text-[#E9E9F2] text-center text-sm">
            BlockchainVoIP &copy; {new Date().getFullYear()} | Secure.
            Decentralized. Connected.
          </p>
        </div>
      </div>
    </div>
  );
}
