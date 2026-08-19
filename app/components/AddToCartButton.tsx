"use client";

import { useState } from "react";

export default function AddToCartButton() {
  const [add, setAdd] = useState<boolean>(false);

  return (
    <button
      onClick={() => setAdd(!add)}
      className={`px-6 py-2 rounded-full mt-2 transition-colors ${
        add
          ? "bg-green-600 text-white"
          : "bg-brand text-white hover:bg-[#a89aa4]"
      }`}
    >
      {add ? "Added!" : "Add to Cart"}
    </button>
  );
}