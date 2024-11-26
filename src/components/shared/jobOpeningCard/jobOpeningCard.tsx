import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { JobDetails } from "@/interfaces/carousel";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  MapPinIcon,
  BriefcaseIcon,
  CurrencyIcon as CurrencyDollarIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const JobOpeningCard = ({
  jobDetail,
  company,
  cardContainerClass,
  cardHeaderClass,
}: {
  jobDetail: JobDetails;
  company: string;
  cardContainerClass?: string;
  cardHeaderClass?: string;
}) => {
  return (
    <div className="jobCardContainer w-full flex flex-col justify-center items-center">
      <Card
        className={cn(
          "w-full max-w-md mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg",
          cardContainerClass
        )}
      >
        <CardHeader className={cn("space-y-2", cardHeaderClass)}>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold line-clamp-2">
              {jobDetail.position}
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              New
            </Badge>
          </div>
          {/* <CardDescription className="text-sm font-medium">
            {jobDetail.company}
          </CardDescription> */}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CurrencyDollarIcon className="w-4 h-4 mr-1" />
              {jobDetail.salary}
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-1" />
              {jobDetail.location}
            </div>
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" />
              Posted on: {jobDetail.jobPostedOn}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <a
            href={jobDetail.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <BriefcaseIcon className="w-4 h-4 mr-2" />
              Apply Now
            </Button>
          </a>
          {/* <Button
            variant="ghost"
            size="sm"
            className="w-full sm:w-auto mt-2 sm:mt-0"
          >
            Save Job
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default JobOpeningCard;
