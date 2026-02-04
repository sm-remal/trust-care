"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
          <Input placeholder="John Doe" className="h-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 ring-primary/20" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
          <Input type="email" placeholder="john@example.com" className="h-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 ring-primary/20" required />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
        <Input placeholder="How can we help you?" className="h-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 ring-primary/20" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
        <Textarea placeholder="Type your message here..." className="min-h-[150px] rounded-2xl bg-slate-50 border-none focus-visible:ring-2 ring-primary/20 p-4" required />
      </div>

      <Button disabled={loading} className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
        {loading ? "Sending..." : "Send Message"} <Send className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
}