"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, PhoneCall } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "How do you verify your caregivers?",
    answer: "Safety is our priority. Every caregiver undergoes a mandatory background check, NID verification, and physical address validation. We also conduct face-to-face interviews and verify their previous work experience.",
  },
  {
    id: "item-2",
    question: "Can I request a replacement if I'm not satisfied?",
    answer: "Yes, absolutely. If you feel the assigned caregiver is not a good fit for your family, you can request a replacement. We will provide a new match within 24-48 hours without any additional matching fees.",
  },
  {
    id: "item-3",
    question: "Is there a minimum booking duration?",
    answer: "We offer flexible plans. You can book for a single shift (8-12 hours), daily care, or long-term monthly packages depending on your specific needs (Baby care, Elderly care, or Patient care).",
  },
  {
    id: "item-4",
    question: "How do I pay for the services?",
    answer: "We support secure digital payments including bKash, Nagad, and Bank Transfers. You can also pay via credit/debit cards through our secure payment gateway after the booking is confirmed.",
  },
  { 
    id: "item-5", 
    question: "How is the service pricing calculated?", 
    answer: "Pricing depends on the type of service (Baby, Elderly, or Patient care) and the duration of the shift. Once you provide your location and requirements in our booking form, we'll give you a transparent, all-inclusive quote." 
  },
];

const FAQS = () => {
  return (
    <section className="pt-16 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Illustration & Support Box */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>Support Center</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Any Questions? <br /> We have <span className="text-primary">Answers.</span>
              </h2>
              <p className="text-slate-600 mt-4 text-lg">
                Don't hesitate to reach out if you have more questions about our caregiving process.
              </p>
            </div>

            {/* Support Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <h4 className="font-bold text-slate-900">Still need help?</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-blue-50 transition-hover hover:bg-blue-100 cursor-pointer group">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Call us anytime</p>
                    <p className="text-sm font-bold text-slate-900">+880 1234 567 890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-2xl bg-emerald-50 transition-hover hover:bg-emerald-100 cursor-pointer group">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-emerald-600 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Chat with us</p>
                    <p className="text-sm font-bold text-slate-900">Live Support 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion Questions */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id} 
                  className="bg-white px-6 rounded-2xl border border-slate-100 shadow-sm transition-all data-[state=open]:border-primary/30 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-5 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQS;