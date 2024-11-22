import { Cta } from "@/components/cta";
import { ProductsGrid } from "@/components/products-grid";
import Qualities from "@/components/qualities";

export default function Page() {
  return (
    <>
      <ProductsGrid />
      <div className="bg-[#F9F9F7] mb-20">
        <Qualities />
      </div>
      <Cta />
    </>
  );
}
