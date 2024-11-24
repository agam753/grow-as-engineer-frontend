import { JobDetails } from "@/interfaces/carousel";
import React from "react";
import CompanyRecentOpeningCard from "../companyRecentOpeningCard/companyRecentOpeningCard";
import { cn } from "@/lib/utils";

function CardContentCarousel({
  openings,
  className,
  company,
  companyImg,
}: {
  openings: JobDetails[] | [];
  className?: string;
  company: string;
  companyImg: string;
}) {
  console.log(companyImg);
  return (
    <div className={cn("", className)}>
      <h1 className="text-xl font-bold md:text-3xl pt-2 pb-2x">{company}</h1>
      <div className="flex flex-col w-full justify-evenly h-full gap-2 overflow-y-scroll p-3">
        {openings.map((opening) => {
          return (
            <CompanyRecentOpeningCard
              jobDetail={opening}
              company={company}
              cardContainerClass="border-none"
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardContentCarousel;
