import { Product } from "@/data/products";
import { Container } from "./container";
import { Gallery } from "./gallery";
import { Typography } from "./typography";

export const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <Container className="flex gap-x-20 gap-y-10 flex-col-reverse sm:flex-row">
      <div className="flex-1">
        <Gallery images={product.images} />
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <Typography variant="h5" className="text-muted-foreground">
          {product.subtitle}
        </Typography>
        <Typography variant="h2" className="">
          {product.title}
        </Typography>

        <div className="flex gap-4">
          {product.tags.map((tag, index) => (
            <div
              className="rounded-full py-2 px-4 border border-border bg-[#F9F9F7]"
              key={index}
            >
              <Typography
                key={index}
                variant="small"
                className="text-foreground font-medium"
              >
                {tag}
              </Typography>
            </div>
          ))}
        </div>

        <Typography variant="paragraph" className="">
          {product.description}
        </Typography>
      </div>
    </Container>
  );
};
