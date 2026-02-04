import ErrorActions from "@/components/Shared/ErrorActions";
import { AlertCircle } from "lucide-react";

export const metadata = {
  title: "Page Not Found | TrustCare",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[90vh] my-8 flex items-center justify-center bg-white overflow-hidden relative">
      
      {/* Background Decorative Elements (Server Rendered) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 text-center">
        {/* Large 404 Text with Gradient */}
        <div className="relative inline-block mb-8">
          <h1 className="text-[150px] md:text-[220px] font-black leading-none tracking-tighter text-slate-100 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white p-6 rounded-3xl shadow-2xl shadow-primary/20 animate-bounce">
                <AlertCircle className="h-16 w-16 text-primary" strokeWidth={2.5} />
             </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Oops! Page <span className="text-primary italic">Not Found.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            The page you're looking for might have been moved, deleted, or perhaps 
            never existed in the first place. Don't worry, we're here to help you get back.
          </p>
        </div>

        {/* Client Actions Component */}
        <ErrorActions />

        {/* Support Link */}
        <div className="mt-16 pt-8 border-t border-slate-100">
          <p className="text-slate-400 font-medium">
            Need help? <a href="/contact" className="text-primary hover:underline font-bold">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}