import AboutStats from "@/components/Home/AboutStats";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <AboutStats></AboutStats>
      <Testimonials></Testimonials>
    </div>
  );
}
