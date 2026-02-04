import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import ContactForm from "@/components/ClientComponent/ContactForm";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | TrustCare",
  description: "Get in touch with TrustCare for reliable caregiving services in Bangladesh.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image 
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop" 
          alt="Contact Us Banner"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay for Text Clarity */}
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">Let’s Start a <span className="text-primary italic">Conversation</span></h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Have questions about our services or need a customized care plan? Our team is here to support you 24/7.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-18 pb-24 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Side: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
                <div className="space-y-6">
                  <ContactInfoCard 
                    icon={<Phone className="h-6 w-6 text-primary" />} 
                    title="Call Us" 
                    detail="+880 1234 567 890" 
                    subDetail="Available 24/7 for emergencies"
                  />
                  <ContactInfoCard 
                    icon={<Mail className="h-6 w-6 text-primary" />} 
                    title="Email Us" 
                    detail="support@trustcare.com" 
                    subDetail="We reply within 2 hours"
                  />
                  <ContactInfoCard 
                    icon={<MapPin className="h-6 w-6 text-primary" />} 
                    title="Visit Office" 
                    detail="House 12, Road 5, Dhanmondi" 
                    subDetail="Dhaka - 1205, Bangladesh"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4 pt-8 border-t border-slate-100">
                <p className="font-bold text-slate-900">Follow our updates</p>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Section - Simplified Real World Example */}
      <section className="h-[500px] w-full relative group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902341595167!2d90.3789643154316!3d23.75086718458925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087021181%3A0xabc66e5865840ca!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd" 
          className="w-full h-full border-none saturate-150 contrast-125 transition-all duration-500 group-hover:saturate-100" 
          allowFullScreen="" 
          loading="lazy" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-5 rounded-2xl shadow-2xl border-b-4 border-primary text-center pointer-events-none">
          <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 text-primary">
            <MapPin className="h-6 w-6" />
          </div>
          <p className="font-black text-slate-900 text-lg">TrustCare Office</p>
          <p className="text-sm text-slate-500">Dhanmondi, Dhaka</p>
        </div>
      </section>
    </div>
  );
}

// Helper Component (Server Rendered)
function ContactInfoCard({ icon, title, detail, subDetail }) {
  return (
    <div className="flex gap-6 group">
      <div className="h-14 w-14 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-lg mb-1">{title}</h4>
        <p className="text-slate-700 font-medium">{detail}</p>
        <p className="text-sm text-slate-400">{subDetail}</p>
      </div>
    </div>
  );
}