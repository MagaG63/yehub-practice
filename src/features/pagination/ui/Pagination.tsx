import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";
import helper from "../../../shared/utils/helpers/paginationArray";
import style from "./Pagination.module.css";
import {
  setCurrent,
  setPages,
} from "../../../entities/questions/api/questionsSlice";

export default function Pagination({
  limit,
  load,
}: {
  limit: number | undefined;
  load: boolean;
}) {
  const { current, page } = useAppSelector((state) => state.params);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPages(limit));
  }, [current]);
  const selector = helper(current ?? 1, page ?? undefined);

  return (
    <div className={style.container}>
      <button></button>
      {!load &&
        selector.map((el) => (
          <button
            onClick={() => {
              dispatch(setCurrent(el));
            }}
          >
            {el}
          </button>
        ))}

      <button></button>
    </div>
  );
}
