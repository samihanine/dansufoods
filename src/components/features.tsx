import { Leaf } from "lucide-react";
import { Container } from "./container";
import { Typography } from "./typography";
import { getScopedI18n } from "@/locales/server";

export const Features = async () => {
  const t = await getScopedI18n("home");

  const features = [
    {
      title: t("features.featureTitle1"),
      description: t("features.featureDescription1"),
      Icon: Leaf,
    },
    {
      title: t("features.featureTitle2"),
      description: t("features.featureDescription2"),
      Icon: Leaf,
    },
    {
      title: t("features.featureTitle3"),
      description: t("features.featureDescription3"),
      Icon: Leaf,
    },
    {
      title: t("features.featureTitle4"),
      description: t("features.featureDescription4"),
      Icon: Leaf,
    },
  ];

  return (
    <Container>
      <Typography variant="h2" className="mb-8 text-center">
        {t("features.title")}
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-8 py-8 px-5 rounded-lg border-2 border-border"
          >
            <div className="rounded-full w-20 h-20 flex justify-center items-center bg-[#F0FAF0]">
              <feature.Icon className="text-tertiary w-10 h-10" />
            </div>
            <Typography className="text-center" variant="lead">
              {feature.title}
            </Typography>
            <Typography variant="small" className="text-center">
              {feature.description}
            </Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};
