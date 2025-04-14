export interface Job {
  _id?: string;
  title: string;
  jobLocation: string;
  companyName: string;
  salary: string;
  experience: string;
  domain: string;
  jobType: string;
  postingDate: string;
  postedBy?: string;
  jobDetails: {
    aboutJob: string;
    aboutRole: string;
    aboutCompany: string;
    requirements: string;
    jobLink: string;
    jobThumbnail: string;
  };
  views?: number;
}

export interface Pagination {
  limit: number;
  page: number;
  startIndex?: number;
  totalDocuments?: number;
  nextPage?: number;
}

export const PaginationLimit = parseInt(process.env.PAGINATION_LIMIT || "10");
