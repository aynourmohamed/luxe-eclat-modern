import type { Metadata } from "next";
import ProductGrid from "./ProductGrid";

export const metadata: Metadata = {
  title: "Shop | Luxe Éclat",
  description: "Browse our full collection of handcrafted candles.",
};

export default function ShopPage() {
  return (
    <div className="py-12 px-6 overflow-x-hidden">
      <h1 className="text-brand text-3xl font-heading font-semibold text-center mb-10">
        Our Products
      </h1>
      <ProductGrid />
    </div>
  );
}