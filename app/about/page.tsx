import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Luxe Éclat",
  description: "The story behind Luxe Éclat's dual-purpose candles.",
};

export default function AboutPage() {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-brand font-heading text-4xl font-semibold mb-4">
          Our Story
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Illuminate your world with Éclat — candles that don&apos;t just
          burn, they nourish.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div className="relative w-full h-80">
          <Image
            src="/images/aromatherapy candle.png"
            alt="Handcrafted candle"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-brand font-heading text-2xl font-semibold mb-3">
            More Than a Candle
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every Luxe Éclat candle is hand-poured with natural waxes and
            essential oils — but the ritual doesn&apos;t end when the flame
            goes out. As the wax melts, it transforms into a warm, nourishing
            oil you can massage directly into your skin. One candle, two
            rituals: a moment of calm while it burns, and a moment of
            self-care once it melts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        <div>
          <h3 className="text-brand font-heading text-xl font-semibold mb-2">
            Natural Ingredients
          </h3>
          <p className="text-gray-600 text-sm">
            Made with natural waxes and essential oils — nothing synthetic,
            nothing harsh on your skin.
          </p>
        </div>
        <div>
          <h3 className="text-brand font-heading text-xl font-semibold mb-2">
            Dual Purpose
          </h3>
          <p className="text-gray-600 text-sm">
            Light it for ambiance. Once melted, use the warm oil as a
            soothing body moisturizer.
          </p>
        </div>
        <div>
          <h3 className="text-brand font-heading text-xl font-semibold mb-2">
            Mindful Ritual
          </h3>
          <p className="text-gray-600 text-sm">
            Every candle is designed to turn an everyday moment into a small
            act of self-care.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-brand font-heading text-2xl font-semibold mb-3">
          A Note From Us
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We believe skincare and self-care shouldn&apos;t be separate from
          the moments you already love. That&apos;s why we created candles
          that give back — light one, breathe in the scent, and when it
          melts, let it care for your skin too.
        </p>
      </div>
    </div>
  );
}