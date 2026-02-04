import AboutStats from "@/components/Home/AboutStats";
import FAQS from "@/components/Home/FAQS";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

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
