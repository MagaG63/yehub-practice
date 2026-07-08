import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";
import helper from "../../../shared/utils/helpers/paginationArray";
import style from "./Pagination.module.css";
import {
  setCurrent,
  setPages,
} from "../../../entities/questions/api/questionsSlice";
import btnImg from "../../../shared/assets/Arrow_btn.svg";

type Props = {
  limit: number | undefined;
  load: boolean;
};

export default function Pagination({ limit, load }: Props) {
  const { current, page } = useAppSelector((state) => state.params);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (limit) {
      dispatch(setPages(limit));
    }
  }, [current]);
  const selector = helper(current ?? 1, page ?? undefined);

  const nextPreviosPageHandle = (type: "next" | "previos") => {
    if (current === null) return;

    if (type === "next" && page !== null && current < page) {
      dispatch(setCurrent(current + 1));
    }

    if (type === "previos" && current > 1) {
      dispatch(setCurrent(current - 1));
    }
  };

  return (
    <div className={style.container}>
      {!load ? (
        <>
          <button
            className={style.containerImg}
            onClick={() => {
              nextPreviosPageHandle("previos");
            }}
          >
            <img className={style.backImg} src={btnImg} alt="arrowBtn" />
          </button>

          {selector.map((el) => (
            <button
              className={
                style.page + " " + (current == el ? style.activePage : "")
              }
              onClick={() => {
                dispatch(setCurrent(el));
              }}
            >
              {el}
            </button>
          ))}
          <button
            className={style.containerImg}
            onClick={() => {
              nextPreviosPageHandle("next");
            }}
          >
            <img className={style.forwardImg} src={btnImg} alt="arrowBtn" />
          </button>
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
