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
    <div className="min-h-screen bg-gradient-to-br from-[#E9E9F2] to-[#525298] flex items-center justify-center p-5">
      <div className="max-w-lg w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 sm:p-12">
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-[#525298] rounded-full shadow-lg">
            <AlertOctagon className="w-14 h-14 text-[#22B07D]" />
          </div>
          <h2 className="text-4xl font-extrabold text-center text-white mb-6">
            Connection Error
          </h2>
          <p className="text-center text-[#E9E9F2] mb-10 text-lg">
            We've encountered an issue with your blockchain VoIP connection. Our
            team is working to resolve it.
          </p>
          <div className="space-y-6 mb-10">
            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-[#22B07D] rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-white">
                  Network Status
                </span>
              </div>
              <p className="text-[#E9E9F2]">
                Our systems are currently experiencing difficulties. Please
                stand by as we work to restore services.
              </p>
            </div>
          </div>
          <div className="text-center space-y-4">
            <a
              href="/"
              className="inline-flex items-center justify-center space-x-2 bg-[#22B07D] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
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
          <p className="text-center text-[#E9E9F2] text-sm">
            BlockchainVoIP &copy; {new Date().getFullYear()} | Secure.
            Decentralized. Connected.
          </p>
        </div>
      </div>
    </div>
  );
}
