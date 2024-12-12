import "@/styles/tailwind.css";
import { Inter, Baloo_2 } from "next/font/google";
import { Metadata } from "next";
import { I18nProviderClient } from "../../locales/client";
import { getScopedI18n } from "@/locales/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Aos } from "../../../src/components/aos";
import "aos/dist/aos.css";

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

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo" });

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const lang = params.locale.split("-")[0];

  return (
    <html lang={lang}>
      <body
        className={`min-h-screen font-inter ${inter.variable} ${baloo.variable}`}
      >
        <I18nProviderClient locale={params.locale}>
          <Aos />
          {children}
        </I18nProviderClient>
      </body>
      <GoogleAnalytics gaId="" />
    </html>
  );
}
