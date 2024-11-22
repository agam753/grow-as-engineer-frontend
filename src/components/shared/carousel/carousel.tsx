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
      className="w-full carouselContainer"
      plugins={[
        Autoplay({
          delay: delay,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1 carouselContent">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-1/3 carouselItem"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="leftButton" />
      <CarouselNext className="rightButton" />
    </Carousel>
  );
}
