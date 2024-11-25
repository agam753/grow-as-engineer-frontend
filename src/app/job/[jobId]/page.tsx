import Footer from "@/components/Footer";
import JobSection from "@/components/JobSection";
import StyleContainer from "@/components/StyleContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const jobDetails = {
  jobId: "abc",
  title: "Software Engineer",
  location: "noida",
  jobType: "Full time",
  salary: "10-20LPA",
  experience: "2+ yrs",
  postingDate: "7 Nov, 2024",
  postedBy: "admin",
  companyLogo: "/assets/Amazon.jpg",
  views: 0,
  body: {
    aboutJob: "about the job",
    role: "role of the job",
    requirement: "requirement for the job",
    aboutCompany: "about the company",
    jobLink: "https://www.google.com",
  },
};
const JobPage = async ({ params }: { params: Promise<{ jobId: string }> }) => {
  const jobId = (await params).jobId;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mx-6 md:mx-20">
        <span className="inline-block w-auto text-sm md:text-md">
          {new Date(jobDetails.postingDate).toDateString()}
        </span>
        <h1 className="font-bold capitalize text-lg md:text-2xl md:my-2">
          {`${jobDetails.title} | ${jobDetails.location}`}
        </h1>
        <div className="flex text-xs py-2 text-center gap-3">
          <StyleContainer
            showTitle={false}
            title="Expected Salary"
            value={jobDetails.salary}
          />
          <StyleContainer
            showTitle={false}
            title="Experience"
            value={jobDetails.experience}
          />
          <StyleContainer
            showTitle={false}
            title="Job Type"
            value={jobDetails.jobType}
          />
          <StyleContainer
            showTitle={false}
            title="Views"
            value={`${jobDetails.views} views`}
          />
        </div>
        <JobSection title="About Job" value={jobDetails.body.aboutJob} />
        <JobSection title="Your Role" value={jobDetails.body.role} />
        <JobSection title="Requirements" value={jobDetails.body.requirement} />
        <JobSection
          title="About Company"
          value={jobDetails.body.aboutCompany}
        />

        <Button
          className="my-6 font-bold md:py-4 md:px-6"
          variant={"destructive"}
        >
          <Link href={jobDetails.body.jobLink} target="_blank">
            Apply
          </Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default JobPage;
