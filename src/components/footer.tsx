import { Container } from "@/components/container";
import { getScopedI18n } from "@/locales/server";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { FacebookIcon, LinkedinIcon, YoutubeIcon } from "./social-icons";

type SocialLinkProps = LinkProps & {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link className="group" {...props}>
      <Icon className="h-6 w-6 text-primary" />
    </Link>
  );
}

export async function Footer({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  const t = await getScopedI18n("footer");
  return (
    <section className="overflow-hidden bg-[#383838] pb-10 pt-10">
      <Container>
        <div className="flex flex-col sm:flex-row gap-x-20 gap-y-6">
          <div className="flex-1">
            <Link href="/" className="flex flex-shrink-0" aria-label="Home">
              <p className="text-4xl font-semibold text-primary font-baloo">
                Dansu Foods
              </p>
            </Link>
            <p className="mt-10 text-md leading-relaxed text-slate-50 w-full max-w-sm">
              {t("description")}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <SocialLink
                href="https://www.linkedin.com/company/tvl-conseils/"
                aria-label="Follow on Linkedin"
                icon={LinkedinIcon}
              />
              <SocialLink
                href="https://www.facebook.com/tvlconseils/"
                aria-label="Follow on Facebook"
                icon={FacebookIcon}
              />
              <SocialLink
                href="https://www.youtube.com/@tvlconseils2269"
                aria-label="Follow on Youtube"
                icon={YoutubeIcon}
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-md font-semibold text-white">Contact Us</p>

            <div className="flex flex-col mt-4 space-y-3 text-white text-sm">
              <a href="mailto:contact@dansufoods.com">contact@dansufoods.com</a>

              <a href="tel:+225 07 07 07 07">+225 07 07 07 07</a>

              <p>123 Lorem ipsum address </p>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-md font-semibold text-white">{t("pages")}</p>
            <div className="mt-4 flex flex-col space-y-3">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-md text-slate-100 duration-150 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="mt-16 border-gray-secondary-400/60" />
        <div className="flex w-full flex-col justify-between pt-8 sm:flex-row">
          <p className="text-md text-slate-200">
            © {new Date().getFullYear()} Dansu Foods, Inc. {t("rights")}.
          </p>
          <div className="mt-5 flex gap-3 sm:mt-0">
            <Link
              href="/gcu"
              className="text-md text-slate-100 underline duration-150 hover:text-white"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
