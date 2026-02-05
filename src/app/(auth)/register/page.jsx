import RegisterForm from "@/components/ClientComponent/RegisterForm";
import Link from "next/link";
import { HeartPulse, ShieldCheck, Star } from "lucide-react";

export default function RegisterPage() {
    return (
        <div className="container mx-auto px-7 min-h-screen flex bg-white">

            {/* Left Side: Trust & Social Proof (Hidden on Mobile) */}
            <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative flex-col justify-center p-16 overflow-hidden">
                {/* Abstract shapes */}
                
                <div></div>

                <div className="relative z-10 space-y-8">
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/40">
                            <HeartPulse className="text-white h-6 w-6" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter italic">TrustCare</span>
                    </Link>
                    <h2 className="text-5xl font-black text-white leading-[1.1]">
                        Start your journey <br />
                        towards <span className="text-primary">Better Care.</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                <ShieldCheck className="text-primary h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Identity Verified Caregivers</h4>
                                <p className="text-slate-400">Every staff member is vetted with NID and background checks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-20 py-12">
                <div className="w-full max-w-lg space-y-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Create Account</h1>
                        <p className="text-slate-500 font-medium">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary font-bold hover:underline">
                                Sign in here
                            </Link>
                        </p>
                    </div>

                    <RegisterForm />

                    <p className="text-center text-[11px] text-slate-400 leading-relaxed">
                        By clicking "Create Free Account", you confirm that you agree to our
                        <Link href="/terms" className="underline mx-1 hover:text-primary">Terms of Service</Link>
                        and
                        <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                    </p>
                </div>
            </div>

        </div>
    );
}