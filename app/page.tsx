"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import CandleCard from "./components/CandleCard";
import { picksForThisSeason } from "./data/picks";
import { features } from "./data/features";

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