import Image from "next/image";
import { Container } from "./container";
import { Typography } from "./typography";
import ProductImage from "/public/images/home-product.png";
import { getProducts } from "@/data/products";
import Link from "next/link";
import { getScopedI18n } from "@/locales/server";

export const ProductsGrid = async () => {
  const products = await getProducts();
  const t = await getScopedI18n("home");

  return (
    <Container>
      <div className="flex justify-center items-end">
        <Typography variant="h2" className="text-center mb-8">
          {t("products.title")}
        </Typography>

        <div className="relative">
          <Image className="w-28 h-auto" src={ProductImage} alt="Product" />
        </div>
      </div>
      <Typography variant="small" className="text-center max-w-lg mx-auto">
        {t("products.subtitle")}
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
        {products.map((product) => (
          <Link
            href={"/products/" + product.slug}
            key={product.title}
            className="flex flex-col items-center"
          >
            <Image
              className="w-auto h-[280px] object-contain rounded-xl"
              src={product.images[0]}
              alt={product.title}
            />
            <Typography variant="h3" className="mt-4">
              {product.title}
            </Typography>
            <Typography variant="small" className="text-center">
              {product.shortDescription}
            </Typography>
          </Link>
        ))}
      </div>
    </Container>
  );
};
