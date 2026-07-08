import Search from "../../../features/search/ui/Search";
import ListQuestions from "./ListQuestions/ListQuestions";
import style from "./Page.module.css";

export default function Page() {
  return (
    <main className={style.main}>
      <ListQuestions />
      <Search />
    </main>
  );
}
