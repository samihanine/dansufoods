import { getScopedI18n } from "@/locales/server";
import { Container } from "./container";
import { Typography } from "./typography";
import AboutImage from "/public/images/about.jpg";
import Image from "next/image";

export default async function AboutTitle() {
  const t = await getScopedI18n("about");
  return (
    <div className="relative">
      <div className="h-full w-full absolute z-[-10]">
        <Image
          src={AboutImage}
          alt="About"
          className="w-full h-full object-cover absolute"
        />
      </div>

      <div className="h-full w-full absolute z-[-5] bg-black/60"></div>

      <Container>
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 py-20">
          <Typography variant="h2" className="text-center text-white">
            {t("soja.title")}
          </Typography>
          <Typography variant="paragraph" className="text-center text-white">
            {t("soja.subtitle")}
          </Typography>
        </div>
      </Container>
    </div>
  );
}
