import { HeartPulse } from "lucide-react";
import LoadingClient from "@/components/ClientComponent/LoadingClient";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      {/* Background Blur Elements (Server Rendered) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      
      <LoadingClient>
        {/* Icon Section */}
        <div className="relative mb-10">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping duration-1000" />
          <div className="relative h-24 w-24 bg-primary rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-primary/40 animate-bounce-slow">
            <HeartPulse className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">
            Trust<span className="text-primary italic">Care</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">
              Processing
            </span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </LoadingClient>

      {/* Static Branding (Server Rendered) */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2">
        <div className="h-[1px] w-12 bg-slate-200 mb-2" />
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em]">
          Premium Caregiving Service
        </p>
      </div>
    </div>
  );
}