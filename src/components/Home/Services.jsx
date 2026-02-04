"use client"
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Baby, UserCheck, HeartPulse, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Child Care",
    description: "Expert babysitters to ensure safety and fun for your little ones while you are away.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop",
    link: "/services/child-care",
    icon: <Baby className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Elderly Care",
    description: "Compassionate companions to support aging parents with daily activities and care.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2043&auto=format&fit=crop",
    link: "/services/elderly-care",
    icon: <UserCheck className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Patient Recovery",
    description: "Professional nursing assistance for post-surgery recovery or chronic illness management.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    link: "/services/sick-care",
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Special Home Care",
    description: "Dedicated support for special needs family members with personalized therapy plans.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    link: "/services/special-care",
    icon: <Home className="h-6 w-6 text-primary" />,
  },
];

const Services = () => {
  return (
    <section className="py-10" id="services">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Our Care <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-slate-600">
            Professional care solutions tailored to your family's unique needs.
          </p>
        </div>

        {/* 4 Column Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group relative overflow-hidden border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/50"
            >
              
              {/* Image Section with Zoom Effect */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <CardHeader className="">
                <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="">
                <CardDescription className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              {/* Footer / Button */}
              <CardFooter className="">
                <Link href={service.link} className="w-full">
                  <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;