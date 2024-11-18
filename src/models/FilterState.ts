export type FilterState = {
  jobType: Array<string>;
  experience: string;
  salary: string;
  domain: Array<string>;
};

export type FilterAction =
  | { type: "SET_JOBTYPE"; payload: Array<string> }
  | { type: "SET_EXPERIENCE"; payload: string }
  | { type: "SET_SALARY"; payload: string }
  | { type: "SET_DOMAIN"; payload: Array<string> }
  | { type: "RESET_FILTERS" };

export type FilterContextState = {
  filterState: FilterState;
  dispatch: React.Dispatch<FilterAction>;
};
