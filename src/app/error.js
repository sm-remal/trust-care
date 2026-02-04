"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw, Home, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-white p-4">
      {/* Background soft blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Animated Error Icon */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-rose-200 rounded-full animate-ping opacity-20" />
          <div className="relative h-24 w-24 bg-rose-50 rounded-[2.5rem] flex items-center justify-center text-rose-500 shadow-xl border border-rose-100">
            <ShieldAlert size={48} strokeWidth={1.5} />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Something went <span className="text-rose-500 italic">wrong!</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-md mx-auto leading-relaxed">
            An unexpected error occurred while processing your request. Don't worry, our team has been notified.
          </p>
        </div>

        {/* Error Detail Box (Real-world Debug Info) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left overflow-hidden">
          <div className="flex items-center gap-2 mb-3 text-slate-400">
            <AlertTriangle size={16} />
            <span className="text-xs font-black uppercase tracking-widest">Error Logs</span>
          </div>
          <p className="text-sm font-mono text-rose-600 break-words leading-relaxed">
            {error?.message || "Internal Server Error: 500"}
          </p>
          {error?.digest && (
            <p className="text-[10px] text-slate-400 mt-2 font-mono">
              Error Digest: {error.digest}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            onClick={() => reset()}
            size="xl"
            className="h-14 px-10 rounded-full font-bold shadow-lg shadow-rose-200 hover:scale-105 transition-all bg-slate-900 hover:bg-slate-800"
          >
            <RotateCcw className="mr-2 h-5 w-5" /> Try Again
          </Button>

          <Link href="/">
            <Button
              variant="outline"
              size="xl"
              className="h-14 px-10 rounded-full border-2 font-bold text-slate-700 hover:bg-slate-50 transition-all"
            >
              <Home className="mr-2 h-5 w-5" /> Back to Home
            </Button>
          </Link>
        </div>

        {/* Support Link */}
        <p className="text-sm text-slate-400">
          If the problem persists, please contact our{" "}
          <Link href="/contact" className="text-primary font-bold hover:underline">
            Support Team
          </Link>
        </p>
      </div>
    </div>
  );
}