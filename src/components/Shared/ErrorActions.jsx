"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function ErrorActions() {
  const router = useRouter();

  return (
    <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
      <Button 
        variant="outline" 
        size="xl" 
        onClick={() => router.back()}
        className="h-14 px-8 rounded-full border-2 font-bold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
      >
        <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
      </Button>
      
      <Button 
        size="xl" 
        onClick={() => router.push("/")}
        className="h-14 px-8 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all cursor-pointer"
      >
        <Home className="mr-2 h-5 w-5" /> Back to Home
      </Button>
    </div>
  );
}