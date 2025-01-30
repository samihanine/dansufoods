"use client";

import { Search } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/dialog";

export const Gallery = ({ images }: { images: StaticImageData[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="bg-[#F9F9F7] rounded-xl w-full p-8">
      <div className="relative w-full">
        <Image
          src={images[currentImage]}
          alt="Product 1"
          className="rounded-xl w-full aspect-square object-contain"
        />

        <div className="absolute top-4 right-4">
          <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
            <DialogTrigger className="p-2 bg-white rounded-full shadow-md">
              <Search size={24} />
            </DialogTrigger>
            <DialogContent className="flex justify-center items-center">
              <Image
                src={images[currentImage]}
                alt="Product 1"
                className="mt-4"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-5 flex-wrap mt-8">
          {images.map((image, index) => (
            <Image
              key={index}
              className={`w-20 h-20 object-cover rounded-xl cursor-pointer ${
                index === currentImage ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setCurrentImage(index)}
              src={image}
              alt="Product 1"
            />
          ))}
        </div>
      )}
    </div>
  );
};
