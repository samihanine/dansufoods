import { Cta } from "@/components/cta";
import { Features } from "@/components/features";
import { ProductsGrid } from "@/components/products-grid";

export default function Page() {
  return (
    <>
      <ProductsGrid />
      <Features />
      <Cta />
    </>
  );
}
