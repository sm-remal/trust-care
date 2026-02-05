import LoginForm from "@/components/ClientComponent/LoginForm";
import Link from "next/link";
import { HeartPulse, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="container mx-auto px-7 min-h-screen flex bg-white">

            {/* Left Side: Visual Branding (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-between p-12">
                {/* Background Decorative Pattern */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary rounded-full blur-[120px]" />
                </div>

                <div></div>

                <div className="relative z-10 space-y-6">
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center">
                            <HeartPulse className="text-white h-6 w-6" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter">TrustCare</span>
                    </Link>
                    <h2 className="text-5xl font-extrabold text-white leading-tight">
                        The simplest way to <br />
                        <span className="text-primary italic">Care for family.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-md">
                        Join over 5,000+ families who trust us for professional and compassionate caregiving services.
                    </p>
                    <div className="space-y-4 pt-4">
                        {["Verified Caregivers", "24/7 Support", "Secure Payments"].map((text, i) => (
                            <div key={i} className="flex items-center gap-3 text-white/80 font-medium">
                                <CheckCircle2 className="h-5 w-5 text-primary" /> {text}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 text-slate-500 text-sm">
                    © 2026 TrustCare Inc. All rights reserved.
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-12 py-12">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Welcome Back</h1>
                        <p className="text-slate-500 font-medium">
                            New to TrustCare?{" "}
                            <Link href="/register" className="text-primary font-bold hover:underline">
                                Create an account
                            </Link>
                        </p>
                    </div>

                    <LoginForm />

                    <p className="text-center text-xs text-slate-400 px-8">
                        By signing in, you agree to our
                        <Link href="/terms" className="underline mx-1">Terms of Service</Link>
                        and
                        <Link href="/privacy" className="underline">Privacy Policy</Link>.
                    </p>
                </div>
            </div>

        </div>
    );
}