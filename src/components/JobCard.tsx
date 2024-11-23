"use client";
import { Job } from "@/models/Job";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StyleContainer from "./StyleContainer";

const JobCard = ({
  job,
}: Readonly<{
  job: Job;
}>) => {
  const {
    jobId,
    title,
    location,
    jobType,
    salary,
    experience,
    postingDate,
    postedBy,
    companyLogo,
    domain,
  } = job;

  const buttonCss =
    "border bg-gray-200 rounded-sm w-auto p-1 px-2 dark:bg-accent";
  const router = useRouter();
  return (
    <div
      className="border-b-2 py-6 md:p-6 flex flex-col md:flex-row cursor-pointer"
      onClick={() => router.push(`/job/${jobId}`)}
    >
      <div className="md:w-1/4">
        <Image
          className="rounded-md w-full h-full"
          src={`${companyLogo}`}
          alt="Company logo"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className="md:w-3/4 md:ml-6 mt-2 md:mt-0">
        <h2 className="font-bold capitalize text-lg md:text-2xl text-justify">
          {`${title} | ${location}`}
        </h2>
        <div className="capitalize text-xs my-3">
          <span className={`${buttonCss} mr-4`}>{postedBy}</span>
          <span className={buttonCss}>
            {new Date(postingDate).toDateString()}
          </span>
        </div>
        <div className="flex md:w-1/2 justify-between text-xs pt-4 text-center">
          <StyleContainer showTitle={true} title="Domain" value={domain} />
          <StyleContainer showTitle={true} title="Job Type" value={jobType} />
          <StyleContainer
            showTitle={true}
            title="Experience"
            value={experience}
          />
          <StyleContainer
            showTitle={true}
            title="Expected Salary"
            value={salary}
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
