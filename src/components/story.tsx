"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import Image from "next/image";
import { Container } from "./container";
import { Typography } from "./typography";
import StoryImage from "/public/images/story.png";
import { useScopedI18n } from "@/locales/client";

export const Story = () => {
  const isMobile = useIsMobile();
  const t = useScopedI18n("about");
  return (
    <div className="bg-[#F9F9F7]">
      <Container className="flex gap-20 flex-col sm:flex-row justify-center">
        <div className="flex-1 flex justify-end items-center sm:px-20">
          {!isMobile && (
            <Image
              src={StoryImage}
              alt="Story"
              className="rounded-xl sm:h-80 sm:w-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-6 sm:py-20">
          <Typography variant="h2" className="">
            {t("story.title")}
          </Typography>
          <Typography
            variant="paragraph"
            className="max-w-lg"
            dangerouslySetInnerHTML={{ __html: t("story.description") }}
          />
        </div>
      </Container>
    </div>
  );
};
