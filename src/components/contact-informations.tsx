import { getScopedI18n } from "@/locales/server";
import { Container } from "./container";
import { Typography } from "./typography";

export default async function ContactInformations() {
  const t = await getScopedI18n("contact");

  return (
    <Container>
      <div className="w-full max-w-2xl mx-auto grid sm:grid-cols-3 grid-cols-1 gap-10">
        <div className="flex flex-col gap-4">
          <Typography variant="h4">{t("contactEmail")}</Typography>
          <Typography variant="small">
            <a href="mailto:info@dansufoods.com">info@dansufoods.com</a>
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="h4">{t("contactPhone")}</Typography>
          <Typography variant="paragraph" className="text-primary">
            <a href="tel:+15147467877">+1 514-746-7877</a>
          </Typography>
        </div>

        <div className="flex flex-col gap-4">
          <Typography variant="h4">{t("contactLocation")}</Typography>
          <Typography variant="small">
            810-5498 rue Hochelaga Montréal Quebec H1N 3L7 Canada
          </Typography>
          <Typography variant="small">Québec Canada</Typography>
        </div>
      </div>
    </Container>
  );
}
