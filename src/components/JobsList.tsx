"use client";
import { useState } from "react";
import { Job } from "@/models/Job";
import { JobCard } from "./JobCard";

const initialJobs: Array<Job> = [
  {
    jobId: "abc1",
    title: "Software Engineer",
    location: "Noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
    companyName: "Amazon",
  },
  {
    jobId: "abc2",
    title: "Software Engineer",
    location: "Noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
    companyName: "Google",
  },
  {
    jobId: "abc3",
    title: "Software Engineer",
    location: "Noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
    companyName: "Microsoft",
  },
  {
    jobId: "abc4",
    title: "Software Engineer",
    location: "Noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
    companyName: "Facebook",
  },
  {
    jobId: "abc5",
    title: "Software Engineer",
    location: "Noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
    companyName: "Amazon",
  },
  {
    jobId: "abc1",
    title: "Software Engineer",
    location: "Noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
    companyName: "Amazon",
  },
  {
    jobId: "abc2",
    title: "Software Engineer",
    location: "Noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
    companyName: "Google",
  },
  {
    jobId: "abc3",
    title: "Software Engineer",
    location: "Noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
    companyName: "Microsoft",
  },
  {
    jobId: "abc4",
    title: "Software Engineer",
    location: "Noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
    companyName: "Facebook",
  },
  {
    jobId: "abc5",
    title: "Software Engineer",
    location: "Noida",
    jobType: "Full time",
    salary: "10-20LPA",
    experience: "2+ yrs",
    postingDate: "7 Nov, 2024",
    postedBy: "admin",
    companyLogo: "/assets/Amazon.jpg",
    domain: "backend",
    companyName: "Amazon",
  },
];

const JobsList = () => {
  const [jobs, setJobs] = useState<Array<Job>>(initialJobs);
  return (
    <div className="joblist flex flex-col gap-4 md:w-3/4">
      {jobs.map((job, index) => (
        <JobCard key={job.jobId + index} job={job} />
      ))}
    </div>
  );
};

export default JobsList;
