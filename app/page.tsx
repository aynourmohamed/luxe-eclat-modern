"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import CandleCard, { Candle } from "./components/CandleCard";

// types
interface Feature {
  icon: string;
  caption: string;
}

// picks for this season
const picksForThisSeason: Candle[] = [
  {
    name: "Oud Scented Candle",
    description: "Rich, woody aroma for a luxurious ambiance.",
    price: 30.0,
    status: "in-stock",
    image: "/images/OUD candle no bg.png",
  },
  {
    name: "Aromatherapy Candle",
    description: "Essential oils for relaxation and well-being.",
    price: 50.0,
    status: "in-stock",
    image: "/images/aromatherapy candle.png",
  },
  {
    name: "Candle Making Kit",
    description: "Everything you need to craft custom candles.",
    price: 90.0,
    status: "in-stock",
    image: "/images/Candle kit no bg.png",
  },
];

// our features
const features: Feature[] = [
  { icon: "/images/box.png", caption: "Packages made from recycled materials" },
  { icon: "/images/oil 2.png", caption: "100% natural ingredients: Coconut, Soy, Beeswax" },
  { icon: "/images/secure payment.png", caption: "Secure transactions and checkout" },
  { icon: "/images/sustainability 2 no bg.png", caption: "Eco-friendly sustainability and cruelty-free" },
];

// page
export default function Home() {
  return (
    <div>
      <Hero />

      {/* picks for this season */}
      <section className="py-12 px-6 text-center bg-[#f9f7f6]">
        <h2 className="text-brand text-3xl font-semibold font-heading mb-8">
          Picks for this Season
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {picksForThisSeason.map((candle) => (
            <CandleCard key={candle.name} candle={candle} />
          ))}
        </div>
      </section>

      {/* why choose our candles/ our features */}
      <section className="py-12 px-6 text-center bg-white">
        <h2 className="text-brand text-3xl font-semibold font-heading mb-8">
          Why Choose Our Candles?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.caption} className="flex flex-col items-center">
              <Image
                src={feature.icon}
                alt={feature.caption}
                width={180}
                height={180}
                className="mb-3"
              />
              <p className="text-base text-[#555] font-medium">{feature.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </div>
  );
}