import { Advantages } from "@/components/advantages";
import { Cta } from "@/components/cta";
import { ProductDetails } from "@/components/product-details";
import { getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ product: string; locale: string }>;
}) {
  const data = await params;
  const product = await getProductBySlug(data.product);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <ProductDetails product={product} />
      <Advantages />
      <Cta />
    </>
  );
}
