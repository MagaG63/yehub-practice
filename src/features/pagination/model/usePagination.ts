import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { setCurrent, setPages } from "../../../entities/questions/model/questionsSlice";
import { buildPaginationRange } from "../lib/paginationArray";

export function usePagination(limit: number | undefined) {
  const dispatch = useAppDispatch();
  const { current, page } = useAppSelector((state) => state.params);

  useEffect(() => {
    if (limit) {
      dispatch(setPages(limit));
    }
  }, [limit, dispatch]);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= (page ?? 1)) {
      dispatch(setCurrent(pageNumber));
    }
  };

  const goToNext = () => {
    if (page !== null && current < page) {
      dispatch(setCurrent(current + 1));
    }
  };

  const goToPrev = () => {
    if (current > 1) {
      dispatch(setCurrent(current - 1));
    }
  };

  const pages = buildPaginationRange(current, page ?? 1);

  return {
    current,
    totalPages: page ?? 1,
    pages,
    goToPage,
    goToNext,
    goToPrev,
    canGoNext: page !== null && current < page,
    canGoPrev: current > 1,
  };
}