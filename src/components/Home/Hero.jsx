"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">     
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Professional Care for Your <span className="text-primary ">Loved Ones</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Reliable and compassionate caregiving services for children, the elderly, and those in need. Book a certified caretaker in minutes and give your family the peace of mind they deserve.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/services">
                <Button size="lg" className="h-12 px-8 text-md gap-2">
                  Explore Services <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="h-12 px-8 text-md">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center gap-6 border-t pt-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-slate-700">Verified Caretakers</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-slate-700">Secure Payments</span>
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
                alt="Caregiver with a child"
                width={800}
                height={500}
                className="h-[400px] w-full object-cover sm:h-[500px]"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-4 backdrop-blur shadow-lg border border-white/20 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    A+
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Highest Quality Service</p>
                    <p className="text-xs text-slate-600">Top-rated agency in Dhaka for home care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;