import Footer from "@/components/Footer";
import JobsList from "@/components/JobsList";
import { SharedCarousel } from "@/components/shared/carousel/carousel";
import { FilterProvider } from "@/contexts/FilterProvider";
import { CompanyJobs } from "@/interfaces/carousel";

const carouselArray: CompanyJobs[] = [
  {
    company: "TechNova",
    companyImg:
      "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&w=800",
    openings: [
      {
        id: 1,
        position: "Software Engineer",
        salary: "600k - 700k per year",
        jobPostedOn: "01/15/2023",
        openPositions: 3,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 2,
        position: "Data Scientist",
        salary: "700k - 800k per year",
        jobPostedOn: "02/10/2023",
        openPositions: 2,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 1,
        position: "Software Engineer",
        salary: "600k - 700k per year",
        jobPostedOn: "01/15/2023",
        openPositions: 3,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 2,
        position: "Data Scientist",
        salary: "700k - 800k per year",
        jobPostedOn: "02/10/2023",
        openPositions: 2,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 1,
        position: "Software Engineer",
        salary: "600k - 700k per year",
        jobPostedOn: "01/15/2023",
        openPositions: 3,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 2,
        position: "Data Scientist",
        salary: "700k - 800k per year",
        jobPostedOn: "02/10/2023",
        openPositions: 2,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 1,
        position: "Software Engineer",
        salary: "600k - 700k per year",
        jobPostedOn: "01/15/2023",
        openPositions: 3,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 2,
        position: "Data Scientist",
        salary: "700k - 800k per year",
        jobPostedOn: "02/10/2023",
        openPositions: 2,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 1,
        position: "Software Engineer",
        salary: "600k - 700k per year",
        jobPostedOn: "01/15/2023",
        openPositions: 3,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 2,
        position: "Data Scientist",
        salary: "700k - 800k per year",
        jobPostedOn: "02/10/2023",
        openPositions: 2,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 1,
        position: "Software Engineer",
        salary: "600k - 700k per year",
        jobPostedOn: "01/15/2023",
        openPositions: 3,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
      {
        id: 2,
        position: "Data Scientist",
        salary: "700k - 800k per year",
        jobPostedOn: "02/10/2023",
        openPositions: 2,
        applyLink: "https://www.technova.com/careers",
        location: "San Francisco, CA",
      },
    ],
  },
  {
    company: "GreenLeaf",
    companyImg:
      "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&w=800",
    openings: [
      {
        id: 1,
        position: "Agronomist",
        salary: "400k - 500k per year",
        jobPostedOn: "03/10/2023",
        openPositions: 2,
        applyLink: "https://www.greenleaf.com/careers",
        location: "Austin, TX",
      },
      {
        id: 2,
        position: "Farm Manager",
        salary: "450k - 550k per year",
        jobPostedOn: "04/05/2023",
        openPositions: 1,
        applyLink: "https://www.greenleaf.com/careers",
        location: "Austin, TX",
      },
    ],
  },
  {
    company: "HealthPlus",
    companyImg:
      "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&w=800",
    openings: [
      {
        id: 1,
        position: "Healthcare Analyst",
        salary: "550k - 650k per year",
        jobPostedOn: "04/20/2023",
        openPositions: 4,
        applyLink: "https://www.healthplus.com/careers",
        location: "New York, NY",
      },
      {
        id: 2,
        position: "Nurse Practitioner",
        salary: "600k - 700k per year",
        jobPostedOn: "05/15/2023",
        openPositions: 3,
        applyLink: "https://www.healthplus.com/careers",
        location: "New York, NY",
      },
    ],
  },
  {
    company: "FinWise",
    companyImg:
      "https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg?auto=compress&cs=tinysrgb&w=800",
    openings: [
      {
        id: 1,
        position: "Financial Consultant",
        salary: "700k - 800k per year",
        jobPostedOn: "05/25/2023",
        openPositions: 6,
        applyLink: "https://www.finwise.com/careers",
        location: "Chicago, IL",
      },
      {
        id: 2,
        position: "Investment Analyst",
        salary: "650k - 750k per year",
        jobPostedOn: "06/10/2023",
        openPositions: 4,
        applyLink: "https://www.finwise.com/careers",
        location: "Chicago, IL",
      },
    ],
  },
  {
    company: "EcoBuild",
    companyImg:
      "https://images.pexels.com/photos/5678901/pexels-photo-5678901.jpeg?auto=compress&cs=tinysrgb&w=800",
    openings: [
      {
        id: 1,
        position: "Project Manager",
        salary: "500k - 600k per year",
        jobPostedOn: "06/15/2023",
        openPositions: 2,
        applyLink: "https://www.ecobuild.com/careers",
        location: "Seattle, WA",
      },
      {
        id: 2,
        position: "Site Engineer",
        salary: "450k - 550k per year",
        jobPostedOn: "07/01/2023",
        openPositions: 5,
        applyLink: "https://www.ecobuild.com/careers",
        location: "Seattle, WA",
      },
    ],
  },
  {
    company: "EduSmart",
    companyImg:
      "https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg?auto=compress&cs=tinysrgb&w=800",
    openings: [
      {
        id: 1,
        position: "Curriculum Developer",
        salary: "450k -550k per year",
        jobPostedOn: "07 /30 /2023",
        openPositions: 5,
        applyLink: "https://www.edusmart.com/careers",
        location: "Boston , MA",
      },
      {
        id: 2,
        position: "Instructional Designer",
        salary: "500k -600k per year",
        jobPostedOn: "08 /15 /2023",
        openPositions: 4,
        applyLink: "https://www.edusmart.com/careers",
        location: "Boston , MA",
      },
    ],
  },
  {
    company: "TravelSphere",
    companyImg:
      " https://images.pexels.com/photos/7890123/pexels-photo-7890123.jpeg?auto=compress&cs=tinysrgb&w=800",
    openings: [
      {
        id: 1,
        position: "Travel Consultant",
        salary: "350k -450k per year",
        jobPostedOn: "08 /12 /2023",
        openPositions: 3,
        applyLink: "https://www.travelsphere.com/careers",
        location: "Miami , FL",
      },
      {
        id: 2,
        position: "Tour Guide",
        salary: "300k -400 k per year",
        jobPostedOn: "09 /01 /2023",
        openPositions: 5,
        applyLink: " https://www.travelsphere.com/careers",
        location: "Miami , FL",
      },
    ],
  },
  {
    company: "FoodieDelight",
    companyImg:
      " https://images.pexels.com/photos/8901234/pexels-photo-8901234.jpeg?auto=compress&cs=tinysrgb&w=800",
    openings: [
      {
        id: 1,
        position: "Culinary Specialist",
        salary: "300 k -400 k per year",
        jobPostedOn: "09 /05 /2023",
        openPositions: 2,
        applyLink: " https://www.foodiedelight.com/careers",
        location: "Los Angeles , CA",
      },
      {
        id: 2,
        position: "Restaurant Manager",
        salary: "400 k -500 k per year",
        jobPostedOn: "09 /20 /2023",
        openPositions: 4,
        applyLink: " https://www.foodiedelight.com/careers",
        location: "Los Angeles , CA",
      },
    ],
  },
];

import dynamic from "next/dynamic";

const NoSsrJobFilters = dynamic(() => import("../components/JobFilters"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <SharedCarousel data={carouselArray} />
      <div className="flex flex-col-reverse md:flex-row mx-4 gap-4 md:px-12">
        <JobsList />
        <FilterProvider>
          <NoSsrJobFilters />
        </FilterProvider>
      </div>
      <Footer />
    </main>
  );
}
