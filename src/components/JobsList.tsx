"use client";
import { useState } from "react";
import { Job } from "@/models/Job";
import JobCard from "./JobCard";

const initialJobs: Array<Job> = [
  {
    jobId: "abc",
    title: "Software Engineer",
    location: "noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
  },
  {
    jobId: "abc",
    title: "Software Engineer",
    location: "noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
  },
  {
    jobId: "abc",
    title: "Software Engineer",
    location: "noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
  },
  {
    jobId: "abc",
    title: "Software Engineer",
    location: "noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
  },
];
const JobsList = () => {
  const [jobs, setJobs] = useState<Array<Job>>(initialJobs);
  return (
    <div className="md:w-3/4">
      {jobs.map((job, index) => (
        <JobCard key={job.jobId + index} job={job} />
      ))}
    </div>
  );
};

export default JobsList;
