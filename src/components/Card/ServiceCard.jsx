"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button"; 
// import { Badge } from "@/components/ui/badge";

const ServiceCard = ({ service }) => {
  const { 
    _id, 
    title, 
    shortDescription, 
    image, 
    price, 
    rating, 
    totalReviews, 
    category, 
    features,
    availability 
  } = service;

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
      
      {/* Image Section */} 
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
            {category}
          </span>
        </div>
        
        {/* Rating Badge (Bottom Right of Image) */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur px-2 py-1 rounded-lg shadow-md">
            <Star className="h-3.5 w-3.5 text-orange-500 fill-orange-500" />
            <span className="text-xs font-bold text-slate-700">{rating}</span>
            <span className="text-[10px] text-slate-400">({totalReviews})</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-800 line-clamp-1 group-hover:text-primary transition-colors">
            {title}
            </h3>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {shortDescription}
        </p>

        {/* Features Preview (Show only first 2) */}
        <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>Available: {availability}</span>
            </div>
            {features.slice(0, 2).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                    <span>{feature}</span>
                </div>
            ))}
        </div>

        {/* Divider */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-semibold uppercase">Starting from</span>
            <span className="text-lg font-black text-primary">{price}</span>
          </div>
          
          <Link href={`/services/${_id}`}>
            <Button size="sm" className="rounded-xl font-bold shadow-lg shadow-primary/20 group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
              View Details <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;