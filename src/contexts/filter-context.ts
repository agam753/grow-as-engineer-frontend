import { createContext } from "react";
import { FilterContextState } from "@/models/FilterState";

const defaultFilterContextValue: FilterContextState = {
  filterState: {
    jobType: [],
    experience: "",
    salary: "",
    domain: [],
  },
  dispatch: () => {
    throw new Error("Dispatch must be used within FilterProvider");
  },
};

export const FilterContext = createContext<FilterContextState>(
  defaultFilterContextValue
);
