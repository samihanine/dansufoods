"use client";

import { Button } from "./button";
import { Container } from "./container";
import { Typography } from "./typography";
import VisionImage from "/public/images/vision.png";
import Image from "next/image";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useScopedI18n } from "@/locales/client";

export const Vision = () => {
  const isMobile = useIsMobile();
  const t = useScopedI18n("home");
  return (
    <div className="bg-[#FFF1F4]">
      <Container className="flex gap-20 flex-col sm:flex-row justify-center">
        <div className="flex-1 flex justify-end items-center sm:px-20">
          {!isMobile && (
            <Image
              src={VisionImage}
              alt="Vision"
              className="rounded-xl sm:h-80 sm:w-full object-cover"
            />
          )}
          <div className="relative">
            <div className="w-full sm:w-64 h-60 sm:ml-[-200px] rounded-lg bg-secondary sm:absolute p-5">
              <Typography variant="lead" className="text-white">
                {t("vision.subtitle")}
              </Typography>

              <div className="flex flex-col gap-4 mt-4">
                <Typography variant="small" className="text-white">
                  <PhoneIcon className="w-4 h-4 inline-block mr-2" />
                  +123 456 789
                </Typography>
                <Typography variant="small" className="text-white">
                  <EnvelopeIcon className="w-4 h-4 inline-block mr-2" />
                  email@dansu.com
                </Typography>
                <Typography variant="small" className="text-white">
                  <MapPinIcon className="w-4 h-4 inline-block mr-2" />
                  123 Rue de Montreil, Montréal, H3C 0H7, Canada
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 sm:py-20">
          <Typography variant="h2" className="">
            {t("vision.title")}
          </Typography>
          <Typography
            variant="paragraph"
            className="max-w-lg text-sm"
            dangerouslySetInnerHTML={{ __html: t("vision.description") }}
          />

          <Button variant={"secondary"} size="lg" className="mt-8 w-fit">
            {t("vision.button")}
          </Button>
        </div>
      </Container>
    </div>
  );
};
