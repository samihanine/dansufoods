"use client";

import { Container } from "./container";
import Image from "next/image";
import FoodImage from "/public/images/home-hero.png";
import CircleImage from "/public/images/home-circle.png";
import { Button } from "./button";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Typography } from "./typography";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";

export const HomeHero: React.FC = () => {
  const isMovbile = useIsMobile();
  const t = useScopedI18n("home");

  return (
    <>
      {!isMovbile && (
        <div className="absolute w-screen inset-0 flex">
          <div className="relative w-full">
            <div className="w-full flex justify-end">
              <Image
                src={FoodImage}
                alt="Hero"
                className="max-w-[650px] w-[45vw] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex absolute w-screen inset-0 z-[-10] overflow-x-hidden">
        <div className="relative w-full">
          <div className="w-full flex justify-end">
            <Image
              src={CircleImage}
              alt="Hero"
              className="w-full max-w-[60vw] h-auto absolute right-[-15vw] top-[-10vw]"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Container className="flex flex-col gap-6 pt-20 relative z-[1000]">
          <Typography
            variant="h1"
            className="sm:text-8xl w-full max-w-xl font-medium"
          >
            {t("hero.title")}
          </Typography>
          <p className="text-lg w-full max-w-xl">{t("hero.subtitle")}</p>

          <div className="flex gap-5 flex-wrap">
            <Link href="/products">
              <Button size={"lg"}>{t("hero.primarybutton")}</Button>
            </Link>
            <Link href="/about">
              <Button size={"lg"} variant={"outline"}>
                {t("hero.secondarybutton")}
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
