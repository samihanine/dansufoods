import { Container } from "./container";
import { Typography } from "./typography";
import StatisticsImage from "/public/images/statistics.png";
import Image from "next/image";

export const Statistics = () => {
  const statistics = [
    {
      title: "Lorem ipsum dolor sit amet",
      value: "3",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      value: "100",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      value: "8%",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      value: "10",
    },
  ];

  return (
    <div className="bg-[#FFFBEF]">
      <Container className="flex flex-col sm:flex-row gap-x-40">
        <div className="flex-1">
          <div className="max-w-md">
            <Typography variant="h2" className="mb-4">
              Lorem ipsum dolor sit amet. Vel error autem
            </Typography>
            <Typography variant="paragraph" className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {statistics.map((statistic, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 p-6 rounded-lg border-2 border-primary bg-white"
                >
                  <Typography variant="h2" className="text-5xl">
                    {statistic.value}
                  </Typography>
                  <Typography variant="small" className="text-center">
                    {statistic.title}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex mt-20 sm:mt-0">
          <Image
            src={StatisticsImage}
            alt="Statistics"
            className="w-full max-w-md h-auto"
            priority
          />
        </div>
      </Container>
    </div>
  );
};
