import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { setComplexity } from "../../../entities/questions/model/questionsSlice";
import ContainerItem from "../../../shared/ui/ContainerItem/ContainerItem";

const complexity = [
  [1, 2],
  [2, 3],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];

export default function ComplexityFilters() {
  const current = useAppSelector((state) => state.params.complexity);
  const dispatch = useAppDispatch();

  const toggleRate = (id: number[]) => {
    dispatch(setComplexity(id));
  };

  return (
    <>
      {complexity.map((item) => (
        <ContainerItem
          key={item[0]}
          id={item}
          title={item[0] + "-" + item[1]}
          active={current[0] === item[0]}
          onToggle={toggleRate}
        />
      ))}
    </>
  );
}
