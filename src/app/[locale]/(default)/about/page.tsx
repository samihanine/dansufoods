import AboutTitle from "@/components/about-title";
import { Cta } from "@/components/cta";
import { Features } from "@/components/features";
import { Statistics } from "@/components/statistics";
import { Story } from "@/components/story";
import { Team } from "@/components/team";

export const metadata = {
  title: "About - Dansu Foods",
};

export default function AboutPage() {
  return (
    <>
      <Story />
      <AboutTitle />
      <Team />
      <Statistics />
      <Features />
      <Cta />
    </>
  );
}
