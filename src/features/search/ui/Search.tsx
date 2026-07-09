import style from "./Search.module.css";
import search from "../../../shared/assets/SearchIcon.svg";
import { useSearch } from "../model/useSearch";

export default function Search() {
  const { value, setValue, inputRef, focusInput } = useSearch();

  return (
    <div className={style.container} onClick={focusInput}>
      <img src={search} alt="Поиск" />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите запрос..."
        type="text"
        className={style.input}
      />
    </div>
  );
}
