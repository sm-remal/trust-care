"use client";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

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

  return <span>{count}+</span>;
};

export default function AboutStatsBadge() {
  return (
    <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
      <p className="text-4xl font-bold"><AnimatedNumber value="5" /></p>
      <p className="text-sm uppercase tracking-wider font-semibold">Years of Excellence</p>
    </div>
  );
}