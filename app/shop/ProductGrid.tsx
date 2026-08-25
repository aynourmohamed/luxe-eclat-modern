"use client";

import { useState } from "react";
import CandleCard, { Candle } from "../components/CandleCard";

const allProducts: Candle[] = [
  { name: "Aromatherapy Candle", description: "Essential oils for relaxation and well-being.", price: 70, status: "in-stock", image: "/images/Aromatherapy candle no bg.png" },
  { name: "Body Care Candle", description: "This unique candle combines relaxation with self-care.", price: 150, status: "in-stock", image: "/images/candle and body .png" },
  { name: "Vanilla Candle", description: "This candle brings a rich, sweet scent that creates a cozy atmosphere.", price: 50, status: "in-stock", image: "/images/vanilla no bg.png" },
  { name: "Citrus Candle", description: "This candle delivers a zesty and invigorating fragrance.", price: 50, status: "in-stock", image: "/images/citrus.png" },
  { name: "Lavender Candle", description: "Relax and unwind with the calming aroma of lavender.", price: 50, status: "in-stock", image: "/images/lavender no bg.png" },
  { name: "Candle Care Kit", description: "Keep your candles burning brightly and safely.", price: 150, status: "in-stock", image: "/images/Candle kit no bg.png" },
  { name: "Candle Making Kit", description: "Everything you need to craft custom candles.", price: 120, status: "in-stock", image: "/images/candle-kit.png" },
  { name: "Oud Candle", description: "Rich, woody aroma for a luxurious ambiance.", price: 50, status: "in-stock", image: "/images/OUD candle no bg.png" },
  { name: "Unscented Candle", description: "Perfect for creating a cozy atmosphere without overpowering fragrances.", price: 30, status: "in-stock", image: "/images/unscented no bg.png" },
];

const PRODUCTS_PER_PAGE = 3;

export default function ProductGrid() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = allProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {currentProducts.map((candle) => (
          <CandleCard key={candle.name} candle={candle} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded-full border border-brand text-brand disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:bg-brand hover:text-white transition-colors"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            className={`w-9 h-9 rounded-full cursor-pointer transition-colors ${
              page === pageNum
                ? "bg-brand text-white"
                : "border border-brand text-brand hover:bg-brand hover:text-white"
            }`}
          >
            {pageNum}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 rounded-full border border-brand text-brand disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:bg-brand hover:text-white transition-colors"
        >
          Next
        </button>
      </div>
    </>
  );
}