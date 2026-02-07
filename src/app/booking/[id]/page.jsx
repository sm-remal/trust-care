import { getSingleService } from "@/actions/services";
import BookingForm from "@/components/ClientComponent/BookingForm";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BookingPage({ params }) { 
    const { id } = await params;
    const service = await getSingleService(id);

    if (!service) return <div className="text-center py-20">Service not found!</div>; 

    return (
        <div className="min-h-screen bg-slate-50/50 pt-28 pb-20">
            <div className="container mx-auto px-9">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Service Summary Section */}
                    <div className="space-y-6">
                        <h1 className="text-3xl font-black text-slate-900">Confirm Your Booking</h1>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                            <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
                                <Image src={service.image} alt={service.title} fill className="object-cover" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-800">{service.title}</h2>
                            <p className="text-primary font-bold">{service.price}</p>
                        </div>
                        {/* Navigation */}
                        <Link href="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 font-semibold transition-colors group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
                        </Link>
                    </div>

                    {/* Dynamic Booking Form (Client Side) */}
                    <BookingForm service={service} />
                </div>
            </div>
        </div>
    );
}