import JobsList from "@/components/JobsList";
import { FilterProvider } from "@/contexts/FilterProvider";

import dynamic from "next/dynamic";

const NoSsrJobFilters = dynamic(() => import("../components/JobFilters"), {
  ssr: false,
});
export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row mx-6">
        <JobsList />
        <FilterProvider>
          <NoSsrJobFilters />
        </FilterProvider>
      </div>
    </main>
  );
}
