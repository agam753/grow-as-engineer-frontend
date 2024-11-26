"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import CarouselCard from "./carouselCard/carouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "@/components/shared/carousel/carousel.css";
import { CompanyJobs } from "@/interfaces/carousel";

export function SharedCarousel({
  delay = 2000,
  data = [],
}: {
  delay?: number;
  data: CompanyJobs[];
}) {
  return (
    <div className="container mx-auto px-4">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: delay,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {data.map((companyData) => (
            <CarouselItem
              key={companyData.company}
              className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="h-[400px]">
                  <CarouselCard
                    className="flex items-center justify-evenly flex-col h-full"
                    openings={companyData.openings}
                    company={companyData.company}
                    companyImg={companyData.companyImg}
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer opacity-30 hover:opacity-100" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer opacity-30 hover:opacity-100" />
      </Carousel>
    </div>
    // <Carousel
    //   className="mt-[2rem]"
    //   opts={{ loop: true }}
    //   //TODO: on hover carousel should not autoPlay
    // plugins={[Autoplay({ delay: delay })]}
    // >
    //   <CarouselContent className="carouselContent">
    //     {data.map((companyData) => {
    //       return (
    //         <CarouselItem
    //           key={companyData.company}
    //           className="flex justify-center items-center carouselItem"
    //         >
    //           <div className="p-1 w-[1200px]">
    //             <Card className="h-[400px]">
    //               <CardContentCarousel
    //                 className="flex items-center justify-evenly flex-col h-full "
    //                 openings={companyData.openings}
    //                 company={companyData.company}
    //                 companyImg={companyData.companyImg}
    //               />
    //             </Card>
    //           </div>
    //         </CarouselItem>
    //       );
    //     })}
    //   </CarouselContent>
    //   <CarouselPrevious className="absolute left-[2rem] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer opacity-45 md:opacity-100" />
    //   <CarouselNext className="absolute right-[2rem] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer opacity-45 md:opacity-100" />
    // </Carousel>
  );
}
