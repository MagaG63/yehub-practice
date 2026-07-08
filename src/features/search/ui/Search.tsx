import style from "./Search.module.css";
import search from "../../../shared/assets/SearchIcon.svg";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../../shared/hooks/hooks";
import { setTitle } from "../../../entities/questions/api/questionsSlice";

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    const debaunce = setTimeout(() => {
      dispatch(setTitle(value));
    }, 1500);

    return () => {
      clearTimeout(debaunce);
    };
  }, [value]);
  return (
    <div className={style.container} onClick={() => inputRef.current?.focus()}>
      <img src={search} alt="" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        placeholder="Введите запрос..."
        type="text"
        className={style.input}
      />
    </div>
  );
}
