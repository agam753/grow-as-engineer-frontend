"use client";
import { Button } from "./ui/button";
import { Filter, Trash2 } from "lucide-react";
import ToggleButton from "./ToggleButton";
import CheckboxList from "./CheckboxList";
import MultiSelect from "./MultiSelect";
import { useFilter } from "@/contexts/FilterProvider";
import { FilterState } from "@/models/FilterState";
const JobFilters = () => {
  const { filterState, dispatch } = useFilter();
  console.log(filterState);
  let appliedFilterCount = 0;
  for (const key in filterState) {
    if (filterState[key as keyof FilterState].length > 0) appliedFilterCount++;
  }
  return (
    <div className="w-1/4 ml-4 mr-4 p-4 rounded-md shadow-custom border max-h-dvh">
      <div className="flex justify-between mb-4">
        <div className="flex align-middle">
          <Filter className="h-full" />
          <h2 className="text-2xl ml-1.5">
            Filters{" "}
            <span className="text-xl font-semibold text-mygreen">
              {appliedFilterCount > 0 ? `(${appliedFilterCount})` : ""}
            </span>
          </h2>
        </div>
        <Button
          variant={"ghost"}
          className="capitalize text-destructive hover:text-destructive"
          onClick={() => dispatch({ type: "RESET_FILTERS" })}
        >
          <Trash2 size="small" />
        </Button>
      </div>
      <div className="my-6">
        <h2 className="text-md font-bold">Job Type</h2>
        <ToggleButton name="Full Time" value="full-time" />
        <ToggleButton name="Internship" value="intern" />
      </div>

      {/* Experience Filter List */}
      <CheckboxList
        filterValues={["0-1 Yr", "2-4 Yr", "5-10 Yr", "10+ Yr"]}
        heading="experience"
      />

      {/* Salary Filter List */}
      <CheckboxList
        filterValues={["0-5 LPA", "6-10 LPA", "10-20 LPA", "20+ LPA"]}
        heading="salary"
      />
      <div className="my-6">
        <h2 className="text-md font-bold my-2">Domain</h2>
        <MultiSelect />
      </div>
    </div>
  );
};

export default JobFilters;
