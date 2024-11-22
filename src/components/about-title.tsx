import { Container } from "./container";
import { Typography } from "./typography";
import AboutImage from "/public/images/about.jpg";
import Image from "next/image";
export default function AboutTitle() {
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
            Lorem ipsum dolor sit amet. Vel error autem ut totam eaque.
          </Typography>
          <Typography variant="paragraph" className="text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.{" "}
          </Typography>
        </div>
      </Container>
    </div>
  );
}
