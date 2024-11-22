import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getNavigation } from "@/data/navigation";
import { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";

export async function generateMetadata({}: {
  params: {
    locale: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const t = await getScopedI18n("home.meta");
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = await getNavigation();
  return (
    <>
      <Header links={links} />
      {children}
      <Footer links={links} />
    </>
  );
}
