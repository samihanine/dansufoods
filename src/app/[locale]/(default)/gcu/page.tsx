import { Container } from "@/components/container";
import { getScopedI18n } from "@/locales/server";
import { htmlToTailwind } from "@/lib/utils";

export const metadata = {
  title: "Techology - Dansu Foods",
};

export default async function ServicesPage() {
  const t = await getScopedI18n("footer");

  return (
    <div className="bg-background">
      <Container className="py-10">
        <div dangerouslySetInnerHTML={{ __html: htmlToTailwind(t("gcu")) }} />
      </Container>
    </div>
  );
}
