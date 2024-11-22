import { getScopedI18n } from "../locales/server";

export const getNavigation = async () => {
  const t = await getScopedI18n("navigation");

  const links = [
    { label: t("home"), href: "/" },
    { label: t("products"), href: "/products" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

  return links;
};
