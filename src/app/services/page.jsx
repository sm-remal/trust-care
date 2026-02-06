import { getServices } from "@/actions/services";
import ServiceList from "@/components/ClientComponent/ServiceList";
import Image from "next/image";
import { HeartPulse, CheckCircle } from "lucide-react";

export default async function ServicesPage() {
  // Fetching data from MongoDB on the server
  const services = await getServices();

  return (
    <div className="min-h-screen bg-slate-50/50">
      
      {/* Static Server-side Banner */}
      <section className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2070&auto=format&fit=crop" 
          alt="Compassionate Caregiving"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[1px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-white px-4 py-2 rounded-full mb-6 border border-white/10">
            <HeartPulse size={18} className="text-primary animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase text-white">TrustCare Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Expert Care for Your <span className="text-primary italic">Loved Ones</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-8 text-white/80 font-medium">
            <span className="flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> 24/7 Availability</span>
            <span className="flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> Verified Professionals</span>
            <span className="flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> Premium Support</span>
          </div>
        </div>
      </section>

      {/* Passing data to the Client Component for interactivity */}
      <ServiceList initialServices={services} />

    </div>
  );
}