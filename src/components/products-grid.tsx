import Image from "next/image";
import { Container } from "./container";
import { Typography } from "./typography";
import ProductImage from "/public/images/home-product.png";
import { getProducts } from "@/data/products";
import Link from "next/link";

export const ProductsGrid = async () => {
  const products = await getProducts();

  return (
    <Container>
      <div className="flex justify-center items-end">
        <Typography variant="h2" className="text-center mb-8">
          Our products
        </Typography>

        <div className="relative">
          <Image className="w-28 h-auto" src={ProductImage} alt="Product" />
        </div>
      </div>
      <Typography variant="small" className="text-center max-w-lg mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-12">
        {products.map((product) => (
          <Link
            href={"/products/" + product.slug}
            key={product.title}
            className="flex flex-col items-center"
          >
            <Image
              className="w-full h-[400px] object-cover rounded-xl border-[3px] border-primary"
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
