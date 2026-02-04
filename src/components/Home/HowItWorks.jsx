"use client"

import { Search, CalendarCheck, UserRoundCheck, HeartHandshake } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Search Service",
    desc: "Select the specific care category like baby sitting, elderly, or patient care.",
    icon: <Search className="w-7 h-7" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    shadow: "shadow-blue-200/50",
  },
  {
    id: "02",
    title: "Select Schedule",
    desc: "Choose your preferred date, shift, and location where you need the service.",
    icon: <CalendarCheck className="w-7 h-7" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    shadow: "shadow-purple-200/50",
  },
  {
    id: "03",
    title: "Verified Match",
    desc: "We assign a background-checked caregiver who best fits your requirements.",
    icon: <UserRoundCheck className="w-7 h-7" />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    shadow: "shadow-amber-200/50",
  },
  {
    id: "04",
    title: "Start Caring",
    desc: "Experience professional care and pay securely after the service session.",
    icon: <HeartHandshake className="w-7 h-7" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    shadow: "shadow-emerald-200/50",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            How <span className="text-primary">TrustCare</span> Works for You
          </h3>
          <p className="text-slate-500 mt-4 text-lg">
            A simple, secure, and transparent way to find the best care for your loved ones.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -z-10" />

          {steps.map((step) => (
            <div key={step.id} className="relative group flex flex-col items-center text-center">
              
              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-2 text-6xl font-black text-slate-100 group-hover:text-slate-200 transition-colors -z-10">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className={`w-20 h-20 rounded-3xl ${step.bgColor} flex items-center justify-center mb-8 shadow-lg ${step.shadow} transform transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-6`}>
                <div className={step.color}>
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm px-2">
                {step.desc}
              </p>

              {/* Bottom Decorative Indicator (Mobile) */}
              <div className="mt-6 w-8 h-1 bg-slate-100 rounded-full group-hover:bg-primary transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;