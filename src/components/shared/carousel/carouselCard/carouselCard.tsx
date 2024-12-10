import { cn } from "@/lib/utils";
import { Job } from "@/interfaces/Job";
import { JobCard } from "@/components/JobCard";

function CarouselCard({
  openings,
  className,
  company,
}: {
  openings: Job[] | [];
  className?: string;
  company: string;
  companyImg: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-md overflow-hidden border py-4",
        className
      )}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm" />
      <h1 className="relative text-lg font-bold md:text-2xl">{company}</h1>
      <div className="relative flex flex-col w-full justify-evenly h-full gap-2 overflow-y-scroll p-3 mb-2">
        {openings.map((opening, idx) => {
          return <JobCard isCraousalJob={true} key={idx} job={opening} />;
        })}
      </div>
    </div>
  );
}

export default CarouselCard;
