"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
}

const testimonials: Testimonial[] = [
  { quote: "This candle is pure magic – it leaves my skin soft and glowing!" },
  { quote: "The scent is incredible – a must-have for every cozy night!" },
  { quote: "I love how eco-friendly and beautifully crafted these candles are!" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-brand py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h2 className="text-2xl font-bold font-heading mb-6 text-black uppercase tracking-wide">
            All Kind Words Said By Our Customers
          </h2>
          <blockquote className="text-white italic text-lg mb-6">
            "{testimonials[current].quote}"
          </blockquote>

          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-8 h-8 flex items-center justify-center cursor-pointer transition-colors ${index === current
                    ? "bg-white text-brand font-bold rounded-full"
                    : "text-white hover:text-black"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <Image
          src="/images/Luxe Éclat candles with light background.jpg"
          alt="Luxe Éclat candles"
          width={500}
          height={400}
          className="rounded-lg object-cover w-full h-[250px] md:h-[400px]"
        />
      </div>
    </section>
  );
}