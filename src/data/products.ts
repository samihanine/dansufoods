import { StaticImageData } from "next/image";
import ProductOneImage from "/public/images/product-1.png";
import ProductTwoImage from "/public/images/product-2.png";
import ProductThreeImage from "/public/images/product-3.png";

export type Product = {
  shortDescription: string;
  title: string;
  subtitle: string;
  description: string;
  images: StaticImageData[];
  tags: string[];
  slug: string;
};

export const products: Product[] = [
  {
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    title: "Product 1",
    subtitle: "Subtitle 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis et nun.",
    images: [ProductOneImage, ProductTwoImage, ProductThreeImage],
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    slug: "product-1",
  },
  {
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    title: "Product 2",
    subtitle: "Subtitle 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis et nun.",
    images: [ProductOneImage, ProductTwoImage, ProductThreeImage],
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    slug: "product-2",
  },
  {
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    title: "Product 3",
    subtitle: "Subtitle 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis et nun.",
    images: [ProductOneImage, ProductTwoImage, ProductThreeImage],
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    slug: "product-3",
  },
];

export const getProducts = async () => {
  return products;
};

export const getProductBySlug = async (slug: string) => {
  return products.find((product) => product.slug === slug);
};
