"use client"

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Mother of two",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    quote: "TrustCare was a lifesaver when I had to return to work. The babysitter was professional, kind, and my kids absolutely loved her!",
  },
  {
    id: 2,
    name: "Rahim Khan",
    role: "Son of an elderly patient",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    quote: "Finding reliable elderly care in Dhaka is hard, but TrustCare made it easy. The nurse was very attentive to my father's medical needs.",
  },
  {
    id: 3,
    name: "Emily Das",
    role: "Working Professional",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    quote: "Excellent service! The booking process was smooth, and the special care assistant was highly trained. Highly recommended.",
  },
  {
    id: 4,
    name: "Tanvir Hossain",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    quote: "I used their patient care service for my recovery after surgery. Having a verified professional at home gave me peace of mind.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Trusted by <span className="text-primary">Families</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Real stories from families who found the perfect care through TrustCare.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <Card key={item.id} className="relative border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white">
              
              {/* Decorative Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-8 w-8 text-primary" />
              </div>

              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-sm text-slate-900 truncate">{item.name}</h4>
                  <p className="text-xs text-primary font-medium truncate">{item.role}</p>
                </div>
              </CardHeader>

              <CardContent>
                {/* Fully Colored Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-amber-400 text-amber-400" 
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed relative z-10">
                  {item.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;