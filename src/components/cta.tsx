"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import CtaOneImage from "/public/images/cta-1.jpg";
import CtaTwoImage from "/public/images/cta-2.png";
import CtaThreeImage from "/public/images/cta-3.jpg";
import CtaFiveImage from "/public/images/cta-4.jpg";
import { Typography } from "./typography";
import { useScopedI18n } from "@/locales/client";

export const Cta = () => {
  const isMobile = useIsMobile();
  const t = useScopedI18n("callToAction");
  return (
    <div className="bg-[#FFFBEF] py-28">
      <div className="coverer mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {!isMobile && (
            <div className="bg-amber-200 h-[300px] rounded-lg">
              <Image
                src={CtaOneImage}
                alt="Cta One"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {!isMobile && (
            <div className="bg-emerald-200 h-[300px] rounded-lg lg:col-span-2">
              <Image
                src={CtaTwoImage}
                alt="Cta One"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {!isMobile && (
            <div className="bg-rose-200 h-[400px] rounded-lg">
              <Image
                src={CtaThreeImage}
                alt="Cta One"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-col items-center justify-center space-y-6 p-8">
            <Typography variant="h2" className="text-center">
              {t("title")}
            </Typography>
            <Link href="/contact">
              <Button size="lg" className="w-fit">
                {t("button")}
              </Button>
            </Link>
          </div>

          {!isMobile && (
            <div className="bg-blue-200 h-[400px] rounded-lg">
              <Image
                src={CtaFiveImage}
                alt="Cta One"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
