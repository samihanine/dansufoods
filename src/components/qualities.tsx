import { CookingPot } from "lucide-react";
import { Container } from "./container";
import { Typography } from "./typography";
import React from "react";

export default function Qualities() {
  return (
    <Container>
      <Typography variant="h2" className="text-center">
        Lorem ipsum dolor sit amet
      </Typography>
      <Typography
        variant="small"
        className="text-center mt-4 w-full max-w-3xl mx-auto"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et.
      </Typography>
      <div className="flex justify-between mt-16 flex-col gap-5 sm:flex-row">
        <ItemDetail
          Icon={CookingPot}
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem varius sed pharetra."
        />
        <ItemDetail
          Icon={CookingPot}
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur est adipiscing elit. Varius sed pharetra."
        />
        <ItemDetail
          Icon={CookingPot}
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing."
        />
      </div>
    </Container>
  );
}

const ItemDetail = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
}) => {
  return (
    <div className="p-4 flex-1 flex gap-4">
      <Icon className="w-6 h-6 text-tertiary mt-3" />

      <div className="flex-1">
        <Typography variant="h3" className="">
          {title}
        </Typography>

        <Typography variant="small" className="">
          {description}
        </Typography>
      </div>
    </div>
  );
};
