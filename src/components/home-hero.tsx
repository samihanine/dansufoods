"use client";

import { Container } from "./container";
import Image from "next/image";
import FoodImage from "/public/images/home-hero.png";
import CircleImage from "/public/images/home-circle.png";
import { Button } from "./button";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Typography } from "./typography";

export const HomeHero: React.FC = () => {
  const isMovbile = useIsMobile();

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
        <Container className="flex flex-col gap-6 pt-20">
          <Typography
            variant="h1"
            className="sm:text-8xl w-full max-w-xl font-medium"
          >
            Welcome to Dansu
          </Typography>
          <p className="text-lg w-full max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula, libero sit amet placerat placerat.
          </p>

          <div className="flex gap-5">
            <Button size={"lg"}>Order Now</Button>
            <Button size={"lg"} variant={"outline"}>
              Learn More
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};
