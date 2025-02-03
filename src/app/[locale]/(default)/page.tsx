import { Advantages } from "@/components/advantages";
import { Vision } from "@/components/vision";
import { Features } from "@/components/features";
import { HomeHero } from "@/components/home-hero";
import { ProductsGrid } from "@/components/products-grid";
import { Cta } from "@/components/cta";
import Partners from "@/components/partners";

export default async function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="mb-20" />
      <ProductsGrid />
      <Partners />
      <Advantages />
      <Features />
      <Vision />
      <Cta />
    </>
  );
}
