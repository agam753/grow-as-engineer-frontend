export interface Job {
  jobId: string;
  title: string;
  location: string;
  jobType: string;
  salary: string;
  experience: string;
  domain: string;
  postingDate: string;
  postedBy?: string;
  companyLogo?: string;
  companyName?: string;
}
