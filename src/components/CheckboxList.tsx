import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useFilter } from "@/contexts/FilterProvider";

const SALARY = "salary";
const CheckboxList: React.FC<{
  heading: string;
  filterValues: Array<string>;
}> = ({ heading, filterValues }) => {
  const {
    filterState: { experience, salary },
    dispatch,
  } = useFilter();
  const valueChangeHandler = (value: string) => {
    if (heading === SALARY) dispatch({ type: "SET_SALARY", payload: value });
    else dispatch({ type: "SET_EXPERIENCE", payload: value });
  };
  return (
    <div className="my-8">
      <h2 className="text-md font-bold capitalize">{heading}</h2>
      <RadioGroup
        defaultValue="option-one"
        className="border-2 px-4 py-2 my-2 rounded-md grid-cols-2"
        onValueChange={valueChangeHandler}
        value={heading === SALARY ? salary : experience}
      >
        {filterValues.map((value, index) => (
          <div key={index} className="flex items-center space-x-4 p-1">
            <RadioGroupItem value={value} id={value} />
            <Label className="hover:cursor-pointer text-sm" htmlFor={value}>
              {value}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CheckboxList;
