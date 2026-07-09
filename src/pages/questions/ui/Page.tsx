import FilterQuestions from "./FilterQuestions/FilterQuestions";
import ListQuestions from "./ListQuestions/ListQuestions";
import style from "./Page.module.css";

export default function Page() {
  return (
    <main className={style.main}>
      <ListQuestions />
      <FilterQuestions />
    </main>
  );
}
