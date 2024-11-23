import JobFilters from "@/components/JobFilters";
import JobsList from "@/components/JobsList";
import { FilterProvider } from "@/contexts/FilterProvider";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row mx-6">
        <JobsList />
        <FilterProvider>
          <JobFilters />
        </FilterProvider>
      </div>
    </main>
  );
}
