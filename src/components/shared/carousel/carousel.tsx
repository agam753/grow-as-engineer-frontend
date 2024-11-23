"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "@/components/shared/carousel/carousel.css";

export function SharedCarousel({ delay = 2000 }: { delay?: number }) {
  return (
    <Carousel
      className="mt-[2rem]"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: delay })]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center items-center"
          >
            <div className="p-1 w-[1200px]">
              <Card className="h-[400px]">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[2rem] top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-[2rem] top-1/2 transform -translate-y-1/2 z-10" />
    </Carousel>
  );
}
