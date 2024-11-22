import { Container } from "./container";
import { Typography } from "./typography";
import AdvantageImageOne from "/public/images/advantage-1.png";
import AdvantageImageTwo from "/public/images/advantage-2.png";
import AdvantageImageThree from "/public/images/advantage-3.png";

import Image from "next/image";
import { Apple } from "lucide-react";

export const Advantages = async () => {
  const advantages = [
    {
      title: "Lorem ipsum dolor sit amet",
      Icon: Apple,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      Icon: Apple,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      Icon: Apple,
    },
  ];

  return (
    <div className="bg-[#FFFBEF]">
      <Container className="flex flex-col sm:flex-row gap-20 max-w-screen-lg">
        <div className="flex-1 flex gap-6 jusfify-center sm:justify-end">
          <div className="w-[280px]">
            <Image
              src={AdvantageImageOne}
              alt="Product 1"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col items-center gap-6 w-48 pt-6">
            <Image
              src={AdvantageImageTwo}
              alt="Product 1"
              className="rounded-xl"
            />

            <Image
              src={AdvantageImageThree}
              alt="Product 1"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex-1">
          <Typography variant="h2" className="mb-8">
            Lorem ipsum dolor est
          </Typography>
          <Typography variant="paragraph" className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>

          <div className="flex flex-col gap-6 mt-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="h-8 w-8 bg-primary rounded-full flex justify-center items-center">
                  <advantage.Icon size={18} />
                </div>
                <Typography variant="paragraph">{advantage.title}</Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
