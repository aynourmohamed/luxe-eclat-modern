import { notFound } from "next/navigation";
import Image from "next/image";
import { allProducts } from "../../data/products";
import AddToCartButton from "../../components/AddToCartButton";
import BackButton from "../../components/BackButton";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const candle = allProducts.find((p) => p.slug === slug);

  if (!candle) {
    notFound();
  }

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <BackButton />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Image
          src={candle.image}
          alt={candle.name}
          width={400}
          height={400}
          className="object-cover rounded-2xl w-full h-[400px] mx-auto"
        />

        <div>
          <h1 className="text-brand text-3xl font-heading font-semibold mb-3">
            {candle.name}
          </h1>
          <p className="text-gray-600 mb-4">{candle.description}</p>
          <p className="text-2xl font-bold mb-2">${candle.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mb-6 capitalize">
            Status: {candle.status.replace("-", " ")}
          </p>
          <AddToCartButton candle={candle} />
        </div>
      </div>
    </div>
  );
}