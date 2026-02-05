"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // আপনার অথেন্টিকেশন লজিক এখানে হবে
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <Input
                            type="email"
                            placeholder="name@example.com"
                            className="h-14 pl-12 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 ring-primary/20 transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                        <label className="text-sm font-bold text-slate-700">Password</label>
                        <Link href="/forgot-password" hidden className="text-xs font-bold text-primary hover:underline">
                            Forgot?
                        </Link>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="h-14 pl-12 pr-12 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 ring-primary/20 transition-all"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            <Button disabled={loading} className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all active:scale-95">
                {loading ? "Signing in..." : "Sign In"} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or continue with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button
                    variant="outline"
                    type="button"
                    className="h-12 rounded-xl border-slate-100 hover:bg-slate-50 font-bold flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                    <FcGoogle size={30} />
                    <span className="text-slate-700">Google</span>
                </Button>

                <Button
                    variant="outline"
                    type="button"
                    className="h-12 rounded-xl border-slate-100 hover:bg-slate-50 font-bold flex items-center justify-center transition-all active:scale-95 text-[#1877F2] hover:text-[#1877F2] cursor-pointer"
                >
                    <FaFacebook size={30} />
                    <span className="text-slate-700">Facebook</span>
                </Button>
            </div>
        </form>
    );
}