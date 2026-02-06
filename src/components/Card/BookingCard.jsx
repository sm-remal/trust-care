"use client";

import { Clock, CalendarDays, MapPin, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function BookingCard({service, price, availability }) {

  return (
    <div className="sticky top-28 bg-slate-900 rounded-xl p-8 text-white shadow-lg border border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />

      <div className="relative z-10 space-y-8">
        <div>
          <div className="flex items-center gap-2 text-primary mb-2">
            <Zap size={14} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Service Fee</span>
          </div>
          <h3 className="text-4xl font-black text-white mt-1">{price}</h3>
        </div>

        <div className="space-y-5 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-300 font-medium">
              <Clock size={20} className="text-primary" />
              <span className="text-sm">Shift Time</span>
            </div>
            <span className="text-sm font-bold">{availability}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-300 font-medium">
              <CalendarDays size={20} className="text-primary" />
              <span className="text-sm">Support</span>
            </div>
            <span className="text-sm font-bold">24/7 Instant</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-300 font-medium">
              <MapPin size={20} className="text-primary" />
              <span className="text-sm">Location</span>
            </div>
            <span className="text-sm font-bold text-right text-white/80">Major Areas</span>
          </div>
        </div>

        <div className="space-y-4">
          <Link href={`/booking/${service._id}`}>
            <Button className="w-full py-6 rounded-md mb-4 text-lg font-black bg-primary cursor-pointer">
              Proceed to Book
            </Button>
          </Link>

          <div className="flex items-center justify-center gap-2 text-slate-500">
            <ShieldCheck size={14} />
            <p className="text-[10px] font-bold uppercase tracking-wider uppercase font-medium">
              100% Secure Transaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}