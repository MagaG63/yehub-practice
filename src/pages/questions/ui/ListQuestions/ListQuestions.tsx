import { useGetQuestionsQuery } from "../../../../entities/questions/api/questionsApi";
import QuestionsItem from "../../../../entities/questions/ui/QuestionsItem";
import Pagination from "../../../../features/pagination/ui/Pagination";
import QuestionsButton from "../../../../features/questions/ui/QuestionsButton/QuestionsButton";
import { useAppSelector } from "../../../../shared/hooks/hooks";
import style from "./ListQuestions.module.css";

export default function ListQuestions() {
  const params = useAppSelector((state) => state.params);

  const { data, isFetching } = useGetQuestionsQuery({
    page: params.current ?? 1,
    title: params.title,
  });
  return (
    <section className={style.section}>
      <h1 className={style.title}>Вопросы</h1>
      {data &&
        data?.data.map((item) => (
          <QuestionsItem
            key={item.id}
            {...item}
            menu={<QuestionsButton id={item.id} />}
          />
        ))}
      <Pagination load={isFetching} limit={data?.limit} />
    </section>
  );
}
