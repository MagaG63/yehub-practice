import { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "../../../app/store/hooks";
import { setTitle } from "../../../entities/questions/model/questionsSlice";

const DEBOUNCE_DELAY = 1500;

export function useSearch() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setTitle(value));
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [value, dispatch]);

  const focusInput = () => inputRef.current?.focus();

  return {
    value,
    setValue,
    inputRef,
    focusInput,
  };
}