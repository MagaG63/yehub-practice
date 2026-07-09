import style from "./ListQuestions.module.css";
import menuIcon from "../../../../shared/assets/Icon.svg";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { useGetQuestionsQuery } from "../../../../entities/questions/api/questionsApi";
import { setModal } from "../../../../entities/questions/model/questionsSlice";
import QuestionsItem from "../../../../entities/questions/ui/QuestionsItem";
import QuestionsButton from "../../../../features/questions/ui/QuestionsButton/QuestionsButton";
import Pagination from "../../../../features/pagination/ui/Pagination";

export default function ListQuestions() {
  const dispatch = useAppDispatch();
  const params = useAppSelector((state) => state.params);

  const { data, isFetching, isError, error } = useGetQuestionsQuery({
    page: params.current,
    title: params.title || undefined,
    specializationId: params.specializationId,
    skills: params.skills.length > 0 ? params.skills : undefined,
    rate: params.rate > 0 ? params.rate : undefined,
    complexity: params.complexity.length > 0 ? params.complexity : undefined,
  });

  const handleOpenFilters = () => dispatch(setModal(true));

  if (isError) {
    return (
      <section className={style.section}>
        <div className={style.container}>
          <h1 className={style.title}>Вопросы</h1>
          <button className={style.menu} onClick={handleOpenFilters}>
            <img src={menuIcon} alt="Фильтры" />
          </button>
        </div>
        <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
           Не удалось загрузить вопросы. Попробуйте позже.
          <br />
          <span style={{ fontSize: "14px", color: "#888" }}>
            {error && "status" in error
              ? `Ошибка ${error.status}`
              : "Неизвестная ошибка"}
          </span>
        </div>
      </section>
    );
  }

  return (
    <section className={style.section}>
      <div className={style.container}>
        <h1 className={style.title}>Вопросы</h1>
        <button className={style.menu} onClick={handleOpenFilters}>
          <img src={menuIcon} alt="Фильтры" />
        </button>
      </div>

      {data?.data.map((item) => (
        <QuestionsItem
          key={item.id}
          {...item}
          menu={<QuestionsButton id={item.id} />}
        />
      ))}

      <Pagination limit={data?.limit} isLoading={isFetching} />
    </section>
  );
}
