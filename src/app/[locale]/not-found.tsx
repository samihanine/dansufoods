import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getNavigation } from "@/data/navigation";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

export default async function NotFound() {
  const links = await getNavigation();
  const t = await getScopedI18n("notFound");
  return (
    <>
      <Header links={links} />
      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl border border-gray-secondary-400/60 bg-white px-8 py-12 sm:px-12 sm:py-20 lg:max-w-3xl">
            <h1 className="text-center text-6xl font-semibold text-slate-900 sm:text-8xl">
              404
            </h1>
            <p className="mx-auto mt-5 max-w-sm text-center text-lg leading-relaxed text-slate-700 sm:mt-6 sm:text-xl">
              {t("subtitle")}
            </p>
            <div className="mt-10 flex justify-center sm:mt-12">
              <Link href="/" passHref>
                <Button variant="ghost" className="space-x-3.5">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] w-[18px] text-slate-700 duration-150 ease-in-out group-hover:text-slate-50"
                  >
                    <g
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.25"
                    >
                      <polyline fill="none" points="1 11 12 2 23 11" />
                      <polyline
                        fill="none"
                        points="10 23 10 17 14 17 14 23"
                        stroke="currentColor"
                      />
                      <path
                        d="M4,13v8c0,1.105,.895,2,2,2h12c1.105,0,2-.895,2-2V13"
                        fill="none"
                        stroke="currentColor"
                      />
                    </g>
                  </svg>

                  <span>{t("back")}</span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer links={links} />
    </>
  );
}
