"use client";
import React, { useContext, useReducer } from "react";
import {
  FilterAction,
  FilterContextState,
  FilterState,
} from "@/models/FilterState";
import { FilterContext } from "./filter-context";

// initial filter state
const initialFilterState: FilterState = {
  jobType: [],
  experience: "",
  salary: "",
  domain: [],
};

// Reducer function
const filterReducer = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case "SET_JOBTYPE":
      return { ...state, jobType: action.payload };
    case "SET_EXPERIENCE":
      return { ...state, experience: action.payload };
    case "SET_SALARY":
      return { ...state, salary: action.payload };
    case "SET_DOMAIN":
      return { ...state, domain: action.payload };
    case "RESET_FILTERS":
      return { jobType: [], experience: "", salary: "", domain: [] };
  }
};

const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <FilterContext.Provider value={{ filterState, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = (): FilterContextState => useContext(FilterContext);

export { FilterProvider, useFilter };
