"use client";

import { useState } from "react";

export default function AddToCartButton() {
  const [add, setAdd] = useState<boolean>(false);

  return (
    <button onClick={() => setAdd(!add)}>
      {add ? "Added!" : "Add to Cart"}
    </button>
  );
}