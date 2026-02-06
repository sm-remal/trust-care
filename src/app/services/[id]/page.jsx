import { getSingleService } from "@/actions/services";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Star, ArrowLeft, UserRound, Stethoscope } from "lucide-react";
import BookingCard from "@/components/Card/BookingCard";

export default async function ServiceDetailsPage({ params }) {
  const { id } = await params;
  const service = await getSingleService(id);

  if (!service || !service._id) return <div className="h-screen flex items-center justify-center font-bold">Service Not Found</div>;

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-24">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <Image src={service.image} alt={service.title} fill className="object-cover" priority />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white px-4 py-1.5 rounded-full font-bold text-xs uppercase shadow-md">
                  {service.category}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                {service.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-md text-orange-600 font-bold">
                  <Star size={20} fill="currentColor" /> {service.rating}
                  <span className="text-slate-400 font-medium text-sm">({service.totalReviews} Reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <ShieldCheck size={20} className="text-green-500" /> Professional Verified
                </div>
              </div>
            </div>

            {/* Provider Info Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
                <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <UserRound size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Expertise</p>
                        <p className="font-bold text-slate-800">{service.providerType}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                        <Stethoscope size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Service Quality</p>
                        <p className="font-bold text-slate-800">Hospital Grade</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-black mb-4 text-slate-800">Service Description</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{service.fullDescription}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-slate-800 ml-1">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(service.features || []).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:border-primary/30 transition-all group">
                    <CheckCircle className="text-primary group-hover:scale-110 transition-transform" size={20} />
                    <span className="font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Sidebar */}
          <div className="lg:col-span-1">
            <BookingCard price={service.price} availability={service.availability} />
          </div>
                {/* Navigation */}
        <Link href="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 font-semibold transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
        </Link>
        </div>
      </div>
    </div>
  );
}