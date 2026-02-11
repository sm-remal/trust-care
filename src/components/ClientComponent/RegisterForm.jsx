"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, User, Phone, ArrowRight, CreditCard } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { postUser } from "@/actions/auth";
import { signIn } from "next-auth/react";

//  Define Validation Schema
const registerSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
  nId: z.string().min(10, "National ID must be at least 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // Error will appear under confirmPassword field
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Get callbackUrl login
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  //  Initialize Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  //  Form Submit Handler
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await postUser(data);
      if (response.success) {
        toast.success("Account created successfully!");
        router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
      } else {
        toast.error(response.message || "Registration failed");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Google SignIN
  const handleSocialLogin = (provider) => {
    signIn(provider, { callbackUrl });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Full Name */}
      <div className="space-y-1">
        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
        <div className="relative group">
          <User className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${errors.fullName ? 'text-red-500' : 'text-slate-400'}`} />
          <Input 
            {...register("fullName")}
            placeholder="John Doe" 
            className={`h-12 pl-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 transition-all ${errors.fullName ? 'ring-red-200 border-red-400' : 'ring-primary/20'}`} 
          />
        </div>
        {errors.fullName && <p className="text-xs text-red-500 ml-1 italic">{errors.fullName.message}</p>}
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input 
            {...register("email")}
            type="email" 
            placeholder="name@example.com" 
            className="h-12 pl-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 ring-primary/20" 
          />
        </div>
        {errors.email && <p className="text-xs text-red-500 ml-1 italic">{errors.email.message}</p>}
      </div>

      {/* Phone & NID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input {...register("phone")} placeholder="017XXXXXXXX" className="h-12 pl-12 rounded-xl bg-slate-50 border-transparent transition-all" />
          </div>
          {errors.phone && <p className="text-xs text-red-500 ml-1 italic">{errors.phone.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-bold text-slate-700 ml-1">National ID</label>
          <div className="relative group">
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input {...register("nId")} placeholder="NID Number" className="h-12 pl-12 rounded-xl bg-slate-50 border-transparent transition-all" />
          </div>
          {errors.nId && <p className="text-xs text-red-500 ml-1 italic">{errors.nId.message}</p>}
        </div>
      </div>

      {/* Passwords */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input 
              {...register("password")}
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              className="h-12 pl-12 rounded-xl bg-slate-50 border-transparent transition-all" 
            />
          </div>
          {errors.password && <p className="text-xs text-red-500 ml-1 italic">{errors.password.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-bold text-slate-700 ml-1">Confirm Password</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input 
              {...register("confirmPassword")}
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              className="h-12 pl-12 rounded-xl bg-slate-50 border-transparent transition-all" 
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-xs text-red-500 ml-1 italic">{errors.confirmPassword.message}</p>}
        </div>
      </div>

      <Button disabled={loading} className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all mt-4 cursor-pointer">
        {loading ? "Processing..." : "Create Free Account"} <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      {/* Social Login Divider */}
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
        <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-400 tracking-widest bg-white px-4">Or sign up with</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button onClick={() => handleSocialLogin("google")} variant="outline" type="button" className="h-12 rounded-xl border-slate-200 font-bold active:scale-95 transition-all cursor-pointer hover:bg-slate-50">
          <FcGoogle size={20} className="mr-2" /> Google
        </Button>
        <Button variant="outline" type="button" className="h-12 rounded-xl border-slate-200 font-bold active:scale-95 transition-all text-[#1877F2] cursor-pointer hover:bg-slate-50">
          <FaFacebook size={20} className="mr-2" /> Facebook
        </Button>
      </div>
    </form>
  );
}