import AboutStats from "@/components/Home/AboutStats";
import FAQS from "@/components/Home/FAQS";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export const metadata = {
  title: "Trust Care | Trusted Baby Sitting & Elderly Care Service",
  description:
    "Trust Care is a trusted baby sitting & elderly care service platform. Easily book reliable caregivers for your family members anytime.",
  keywords: [
    "baby sitting service",
    "elderly care service",
    "home care service",
    "caregiver booking",
    "trust care",
  ],
  openGraph: {
    title: "Trust Care | Trusted Care Services",
    description:
      "Book trusted baby sitters and elderly caregivers easily with Care.xyz.",
    url: "https://care-xyz.vercel.app",
    siteName: "Care.xyz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Care.xyz Care Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <AboutStats></AboutStats>
      <Testimonials></Testimonials>
      <FAQS></FAQS>
    </div>
  );
}
