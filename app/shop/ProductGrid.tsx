"use client";

import { useState } from "react";
import CandleCard from "../components/CandleCard";
import { allProducts } from "../data/products";

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

      <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
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