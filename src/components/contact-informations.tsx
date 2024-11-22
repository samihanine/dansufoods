import { Container } from "./container";
import { Typography } from "./typography";

export default function ContactInformations() {
  return (
    <Container>
      <div className="w-full max-w-2xl mx-auto grid sm:grid-cols-3 grid-cols-1 gap-10">
        <div className="flex flex-col gap-4">
          <Typography variant="h4">Email</Typography>
          <Typography variant="small">
            <a href="mailto:contact@dansufoods.com">contact@dansufoods.com</a>
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="h4">Phone</Typography>
          <Typography variant="paragraph" className="text-primary">
            <a href="tel:+1234567890">+1 234 567 890</a>
          </Typography>
        </div>

        <div className="flex flex-col gap-4">
          <Typography variant="h4">Our Location</Typography>
          <Typography variant="small">
            123 Lorem ipsum Adress, Montréal, H1A B2C
          </Typography>
          <Typography variant="small">Québec Canada</Typography>
        </div>
      </div>
    </Container>
  );
}
