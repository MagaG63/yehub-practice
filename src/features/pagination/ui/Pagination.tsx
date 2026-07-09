import style from "./Pagination.module.css";
import btnImg from "../../../shared/assets/Arrow_btn.svg";
import { usePagination } from "../model/usePagination";

type Props = {
  limit: number | undefined;
  isLoading: boolean;
};

export default function Pagination({ limit, isLoading }: Props) {
  const { current, pages, goToPage, goToNext, goToPrev, canGoNext, canGoPrev } =
    usePagination(limit);

  if (isLoading) {
    return <div className={style.container}>Загрузка...</div>;
  }

  if (pages.length <= 1) {
    return null;
  }

  return (
    <div className={style.container}>
      <button
        className={style.containerImg}
        onClick={goToPrev}
        disabled={!canGoPrev}
        aria-label="Предыдущая страница"
      >
        <img className={style.backImg} src={btnImg} alt="назад" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`${style.page} ${current === page ? style.activePage : ""}`}
          onClick={() => goToPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={style.containerImg}
        onClick={goToNext}
        disabled={!canGoNext}
        aria-label="Следующая страница"
      >
        <img className={style.forwardImg} src={btnImg} alt="вперед" />
      </button>
    </div>
  );
}
