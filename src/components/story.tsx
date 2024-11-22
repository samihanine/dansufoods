"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import Image from "next/image";
import { Container } from "./container";
import { Typography } from "./typography";
import StoryImage from "/public/images/story.png";

export const Story = () => {
  const isMobile = useIsMobile();
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
          <div className="relative">
            <div className="w-full sm:w-80 h-fit sm:ml-[-200px] sm:mt-16 rounded-lg bg-primary sm:absolute p-5">
              <Typography variant="lead" className="mb-4">
                Come visit us
              </Typography>

              <Typography variant="small" className="text-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatu. Excepteur sint occaecat
                cupidatat non proident.
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 sm:py-20">
          <Typography variant="h2" className="">
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="paragraph" className="max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
            <br /> <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </div>
      </Container>
    </div>
  );
};
