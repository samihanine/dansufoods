import { StaticImageData } from "next/image";
import ProductTwoImage from "/public/images/product-2.png";
import ProductThreeImage from "/public/images/product-3.png";
import ExtraFrimImage from "/public/images/extra-firm.png";
import FirmImage from "/public/images/firm.png";
import PressedTofu from "/public/images/pressed-tofu.png";
import { getScopedI18n } from "@/locales/server";

export type Product = {
  shortDescription: string;
  title: string;
  subtitle: string;
  description: string;
  images: StaticImageData[];
  tags: string[];
  slug: string;
};

export const getProducts = async () => {
  const t = await getScopedI18n("home.products");
  const products: Product[] = [
    {
      shortDescription: t("product1.shortDescription"),
      title: t("product1.title"),
      subtitle: t("product1.subtitle"),
      description: t("product1.description"),
      images: [PressedTofu],
      tags: t("product1.tags").split(","),
      slug: t("product1.slug"),
    },
    {
      shortDescription: t("product2.shortDescription"),
      title: t("product2.title"),
      subtitle: t("product2.subtitle"),
      description: t("product2.description"),
      images: [ProductTwoImage, ProductThreeImage, FirmImage],
      tags: t("product2.tags").split(","),
      slug: t("product2.slug"),
    },
    {
      shortDescription: t("product3.shortDescription"),
      title: t("product3.title"),
      subtitle: t("product3.subtitle"),
      description: t("product3.description"),
      images: [ExtraFrimImage],
      tags: t("product3.tags").split(","),
      slug: t("product3.slug"),
    },
    /*
    {
      shortDescription: t("product4.shortDescription"),
      title: t("product4.title"),
      subtitle: t("product4.subtitle"),
      description: t("product4.description"),
      images: [ProductOneImage],
      tags: t("product4.tags").split(","),
      slug: t("product4.slug"),
    },
    */
  ];

  return products;
};

export const getProductBySlug = async (slug: string) => {
  return (await getProducts()).find((product) => product.slug === slug);
};
