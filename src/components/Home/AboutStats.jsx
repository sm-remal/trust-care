"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Users, Heart, Clock } from "lucide-react";


const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    let start = 0;
    const duration = 2000; 
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{value.includes('+') ? '+' : value.includes('%') ? '%' : value.includes('k') ? 'k+' : ''}</span>;
};

const stats = [
  { 
    id: 1, 
    label: "Happy Families", 
    value: "2000+", 
    icon: <Heart className="h-6 w-6 text-rose-600" />,
    bgColor: "bg-rose-50 border-rose-100", // Soft Pink/Red
    textColor: "text-rose-600"
  },
  { 
    id: 2, 
    label: "Verified Caregivers", 
    value: "500+", 
    icon: <Users className="h-6 w-6 text-blue-600" />,
    bgColor: "bg-blue-50 border-blue-100", // Soft Blue
    textColor: "text-blue-600"
  },
  { 
    id: 3, 
    label: "Hours of Care", 
    value: "50k", 
    icon: <Clock className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-50 border-amber-100", // Soft Amber/Orange
    textColor: "text-amber-600"
  },
  { 
    id: 4, 
    label: "Success Rate", 
    value: "99%", 
    icon: <CheckCircle2 className="h-6 w-6 text-emerald-600" />,
    bgColor: "bg-emerald-50 border-emerald-100", // Soft Emerald/Green
    textColor: "text-emerald-600"
  },
];

const AboutStats = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: About Content [cite: 23] */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Dedicated to Compassionate & <span className="text-primary">Reliable Care</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At TrustCare, our mission is to make caregiving easy, secure, and accessible for everyone[cite: 5, 10]. We understand that finding the right person to look after your loved ones is a big decision.
            </p>
            
            <div className="space-y-4 pt-4">
              {["Background Verified Caretakers", "24/7 Support & Monitoring", "Personalized Care Plans"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Smooth Colored Stats Grid  */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div 
                key={stat.id} 
                className={`p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl ${stat.bgColor}`}
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {stat.icon}
                </div>
                <h3 className={`text-4xl font-black mb-2 ${stat.textColor}`}>
                  <AnimatedNumber value={stat.value} />
                </h3>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStats;