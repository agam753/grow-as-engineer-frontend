export interface JobDetails {
  id: number;
  position: string;
  salary: string;
  jobPostedOn: string;
  openPositions: number;
  applyLink: string;
  location: string;
}

export interface CompanyJobs {
  company: string;
  openings: JobDetails[];
  companyImg: string;
}
