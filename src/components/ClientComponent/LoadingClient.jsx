"use client";

import React from "react";

export default function LoadingClient({ children }) {
  return (
    <>
      <div className="relative flex flex-col items-center animate-in fade-in zoom-in duration-500">
        {children}
      </div>
      
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}