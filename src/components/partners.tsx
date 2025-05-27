"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/carousel";
import { useScopedI18n } from "@/locales/client";
import { Container } from "./container";
import { Typography } from "./typography";

const data = [
  {
    title: "Epik Eats",
    className: "bg-red-200",
    data: [
      {
        id: "item-4",
        href: "#",
        image: "/images/epik-1.png",
      },
      {
        id: "item-5",
        href: "#",
        image: "/images/epik-2.png",
      },
      {
        id: "item-6",
        href: "#",
        image: "/images/epik-3.png",
      },
    ],
  },
  {
    title: "Tofutofu brand",
    className: "bg-green-50",
    data: [
      {
        id: "item-7",
        href: "https://tofutofu.ca/produits/smoked-meat",
        image: "/images/tofutofu-smoked-meat.png",
      },
      {
        id: "item-8",
        href: "https://tofutofu.ca/produits/rotisserie",
        image: "/images/tofutofu-rotisserie.png",
      },
      {
        id: "item-9",
        href: "https://tofutofu.ca/produits/capitaine",
        image: "/images/tofutofu-capitaine.png",
      },
    ],
  },
  {
    title: "Epic Tofu",
    className: "bg-red-200",
    data: [
      {
        id: "item-1",
        href: "https://epictofu.com/fr/products/marinated-shish-taouk-tofu",
        image: "/images/epic-tofu-shish-taouk.png",
      },
      {
        id: "item-2",
        href: "https://epictofu.com/fr/products/bbq-tofu-slabs",
        image: "/images/epic-tofu-bbq.png",
      },
      {
        id: "item-3",
        href: "https://epictofu.com/fr/products/epic-yuzu-general-tao-marinated-tofu-cubes",
        image: "/images/epic-tofu-yuzu.png",
      },
    ],
  },
];

export default function Partners() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [, setCanScrollPrev] = useState(false);
  const [, setCanScrollNext] = useState(false);
  const t = useScopedI18n("home");

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <Container>
      <div className="mb-10">
        <Typography className="text-center" variant="h2">
          {t("partners.title")}
        </Typography>

        <p className="text-sm text-center text-muted-foreground mt-3">
          {t("partners.subtitle")}
        </p>
      </div>

      {data.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-12">
          <div className="mb-6">
            <Typography className="text-center" variant="h3">
              {section.title}
            </Typography>
          </div>

          <div className="w-full">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                breakpoints: {
                  "(max-width: 768px)": {
                    dragFree: true,
                  },
                },
              }}
            >
              <CarouselContent className="ml-[calc(theme(container.padding)+20px)] mr-[calc(theme(container.padding))] 2xl:ml-[calc(50vw-700px+theme(container.padding)-20px)] 2xl:mr-[calc(50vw-700px+theme(container.padding))]">
                {section.data.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                  >
                    <a
                      href={item.href}
                      className="group rounded-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={`group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] ${section.className}`}
                      >
                        <img
                          src={item.image}
                          alt={section.title}
                          className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0.2),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      ))}
    </Container>
  );
}
