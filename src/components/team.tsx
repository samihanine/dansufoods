import Image from "next/image";
import { Container } from "./container";
import { Typography } from "./typography";
import DanImage from "/public/images/dan.png";
import PierreImage from "/public/images/pierre.png";
import { LinkedinIcon } from "./social-icons";
import { getScopedI18n } from "@/locales/server";

export const Team = async () => {
  const t = await getScopedI18n("about");
  const team = [
    {
      name: "Dan Su",
      role: t("team.roleMember1"),
      image: DanImage,
      linkedinUrl: "https://www.linkedin.com/in/dansu/",
    },
    {
      name: "Pierre Donaldson",
      role: t("team.roleMember2"),
      image: PierreImage,
      linkedinUrl: "https://www.linkedin.com/in/dansu/",
    },
  ];
  return (
    <Container className="">
      <Typography variant="h2" className="text-center">
        {t("team.title")}
      </Typography>
      <Typography
        variant="paragraph"
        className="text-center mt-4 max-w-2xl mx-auto"
      >
        {t("team.subtitle")}
      </Typography>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 mt-20">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            <Image
              src={member.image}
              alt={member.name}
              className="rounded-full w-40 h-40 object-cover"
            />
            <Typography variant="h3" className="text-center mt-4">
              {member.name}
            </Typography>
            <Typography variant="small" className="text-center">
              {member.role}
            </Typography>
            <a
              href={member.linkedinUrl}
              className="mt-4"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className="w-9 h-9" />
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
};
