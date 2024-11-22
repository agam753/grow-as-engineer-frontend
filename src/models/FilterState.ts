export type FilterState = {
  jobType: Array<string>;
  experience: { min: string; max: string };
  salary: { min: string; max: string };
  domain: Array<string>;
};

export type FilterAction =
  | { type: "SET_JOBTYPE"; payload: Array<string> }
  | { type: "SET_MIN_EXP"; payload: string }
  | { type: "SET_MAX_EXP"; payload: string }
  | { type: "SET_MIN_SALARY"; payload: string }
  | { type: "SET_MAX_SALARY"; payload: string }
  | { type: "SET_DOMAIN"; payload: Array<string> }
  | { type: "RESET_FILTERS" };

export type FilterContextState = {
  filterState: FilterState;
  dispatch: React.Dispatch<FilterAction>;
  appliedFilterCount: number;
};
