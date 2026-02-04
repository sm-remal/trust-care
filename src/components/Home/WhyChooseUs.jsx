"use client"

import { ShieldCheck, Award, Zap, HeartHandshake, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Rigorous Screening",
    desc: "Every caregiver undergoes a multi-level background and NID verification process.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    bgColor: "bg-emerald-50",
  },
  {
    id: 2,
    title: "Certified Experts",
    desc: "Our staff is trained in professional caregiving, first aid, and emotional support.",
    icon: <Award className="w-6 h-6 text-blue-600" />,
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    title: "Instant Matching",
    desc: "Our smart algorithm finds the most suitable caregiver in your area within minutes.",
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    bgColor: "bg-amber-50",
  },
  {
    id: 4,
    title: "Personalized Care",
    desc: "Tailored care plans designed specifically for your family's unique requirements.",
    icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
    bgColor: "bg-rose-50",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Image Section */}
          <div className="relative">
            {/* Main Image - Professional Caregiver */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2043&auto=format&fit=crop" 
                alt="Professional caregiver with senior" 
                width={800}
                height={700}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-10 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  10+
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Years Experience</p>
                  <p className="text-xs text-slate-500">In Professional Caregiving</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Side: Content & Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                Why Trust Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Beyond Care: We Provide <br /> <span className="text-primary">Peace of Mind</span>
              </h3>
              <p className="text-slate-600 mt-4 text-lg">
                We don't just send a caregiver; we ensure your family receives the respect, safety, and professional attention they deserve.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.id} className="group p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Checkmark List */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              {["Verified NID", "24/7 Monitoring", "Easy Replacement"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;