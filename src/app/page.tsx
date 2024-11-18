import JobFilters from "@/components/JobFilters";
import JobsList from "@/components/JobsList";
import { FilterProvider } from "@/contexts/FilterProvider";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <JobsList />
        <FilterProvider>
          <JobFilters />
        </FilterProvider>
      </div>
    </main>
  );
}
