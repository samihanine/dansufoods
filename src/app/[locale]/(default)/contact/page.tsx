import ContactForm from "@/components/contact-form";
import ContactInformations from "@/components/contact-informations";
import { Cta } from "@/components/cta";

export const metadata = {
  title: "Contact - Dansu Foods",
};

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <ContactInformations />
      <Cta />
    </>
  );
}
