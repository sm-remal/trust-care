import Image from "next/image";
import { Users, Heart, ShieldCheck, Target, CheckCircle2, Linkedin, Twitter } from "lucide-react";
import AboutStatsBadge from "@/components/ClientComponent/AboutUS";

export const metadata = {
    title: "About Us | TrustCare",
    description: "Learn about our mission to provide the best home care services in Bangladesh.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full">

            {/* 1. Hero Section - Server Rendered */}
            <section className="relative py-18 md:py-26 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2043&auto=format&fit=crop"
                        alt="Background"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        We're on a Mission to <br />
                        <span className="text-primary italic">Redefine Home Care</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        TrustCare started with a simple idea: everyone deserves professional, compassionate,
                        and verified care in the comfort of their own home.
                    </p>
                </div>
            </section>

            {/* 2. Our Story Section */}
            <section className="pt-24 pb-10">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
                                    alt="Our Story"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Client Component */}
                            <AboutStatsBadge />
                        </div>

                        <div className="space-y-6 text-slate-900">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
                                <Target className="h-4 w-4" /> Our Story
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold">
                                Founded to bridge the gap between <span className="text-primary">Need and Trust.</span>
                            </h2>
                            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                                <p className="text-justify hyphens-auto">
                                    In 2018, our journey began with a personal realization. We witnessed firsthand how stressful it was for families to find a reliable caregiver for their aging parents and newborns.
                                </p>

                                <p className="text-justify hyphens-auto">
                                    We decided to change that. TrustCare was born not just as a service platform, but as a promise of safety and compassion. We spent years building a rigorous screening process.
                                </p>

                                <p className="text-justify hyphens-auto">
                                    Today, we are proud to have helped thousands of families find peace of mind. Our mission remains to provide every household with a certified, background-verified family member you can trust.
                                </p>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {["Verified NID", "Trained Staff", "Compassion", "24/7 Support"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 font-bold text-slate-700">
                                        <CheckCircle2 className="h-5 w-5 text-green-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values Section */}
            <section className="py-10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-slate-900">The Values <span className="text-primary">We Live By</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<Heart className="h-10 w-10 text-rose-500" />}
                            title="Compassion First"
                            desc="We treat every patient like our own family member."
                        />
                        <ValueCard
                            icon={<ShieldCheck className="h-10 w-10 text-blue-500" />}
                            title="Verified Safety"
                            desc="Strict verification processes for every individual."
                        />
                        <ValueCard
                            icon={<Users className="h-10 w-10 text-amber-500" />}
                            title="Inclusivity"
                            desc="Specialized care for everyone, regardless of age."
                        />
                    </div>
                </div>
            </section>

            {/* 4. Team Section (Server Side List) */}
            <section className="pt-10 pb-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Meet Our <span className="text-primary">Leadership</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <TeamMember name="Ariful Islam" role="Founder & CEO" img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" />
                        <TeamMember name="Dr. Maria Sultana" role="Medical Director" img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" />
                        <TeamMember name="Nasir Uddin" role="Operations Head" img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" />
                        <TeamMember name="Farhana Ahmed" role="Customer Success" img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" />
                    </div>
                </div>
            </section>
        </div>
    );
}

function ValueCard({ icon, title, desc }) {
    return (
        <div className=" p-10 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="mb-6 inline-block">{icon}</div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">{title}</h3>
            <p className="text-slate-500 leading-relaxed">{desc}</p>
        </div>
    );
}

function TeamMember({ name, role, img }) {
    return (
        <div className="text-center group">
            <div className="relative h-72 w-full rounded-3xl overflow-hidden mb-4 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src={img} alt={name} fill className="object-cover" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">{name}</h4>
            <p className="text-primary font-medium text-sm">{role}</p>
        </div>
    );
}