"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are your candles made with natural ingredients?",
    answer:
      "Yes, all our candles are made with high-quality, natural ingredients such as soy wax, beeswax, and essential oils. We strive to provide eco-friendly products that are safe for both you and the environment.",
  },
  {
    question: "How do I care for my candles to make them last longer?",
    answer:
      "Trim the wick to about 1/4 inch before each use. Burn the candle until the wax melts evenly across the top. Keep the candle away from drafts. Always burn candles on a heat-resistant surface.",
  },
  {
    question: "What if my candle arrives damaged or defective?",
    answer:
      "We take great care in packaging our candles to ensure they arrive safely. However, if your candle arrives damaged, please contact us immediately with a photo of the damage, and we will assist you in processing a replacement or refund.",
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-brand font-heading text-3xl font-semibold mb-3">
          Help &amp; Support Center
        </h1>
        <p className="text-gray-600">
          Welcome to our Help &amp; Support Center! Find answers to common
          questions or contact us for further assistance.
        </p>
      </div>

      <section className="mb-16">
        <h3 className="text-brand font-heading text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left bg-[#e2d9d9] text-black font-heading text-lg transition-colors"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-brand transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-3 text-sm text-gray-700 bg-[#e2d9d9]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="text-center">
        <h3 className="text-brand font-heading text-xl font-semibold mb-2">
          Live Chat Support
        </h3>
        <p className="text-gray-600 mb-4">
          If you need immediate assistance, click the button below to chat
          with our support team.
        </p>
        <button className="bg-brand text-white text-sm px-8 py-3 rounded-full shadow-md hover:bg-white hover:text-brand border border-brand transition-transform hover:scale-105">
          Start Live Chat
        </button>
      </section>
    </div>
  );
}