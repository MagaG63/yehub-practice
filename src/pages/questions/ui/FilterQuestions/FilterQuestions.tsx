import style from "./FilterQuestions.module.css";
import close from "../../../../shared/assets/Vector (1).svg";
import { setModal } from "../../../../entities/questions/model/questionsSlice";
import Search from "../../../../features/search/ui/Search";
import ContainerFilter from "../../../../shared/ui/ContainerFilter/ContainerFilter";
import SkillsFilter from "../../../../features/filters/ui/SkillsFilter";
import SpecializationsFilter from "../../../../features/filters/ui/SpecializationsFilter";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import RateFilters from "../../../../features/filters/ui/RateFilters";
import ComplexityFilters from "../../../../features/filters/ui/ComplexityFilters";

export default function FilterQuestions() {
  const modal = useAppSelector((state) => state.params.modal);
  const dispatch = useAppDispatch();

  const closeModal = () => dispatch(setModal(false));

  return (
    <>
      <div
        className={`${style.overlay} ${modal ? style.active : ""}`}
        onClick={closeModal}
      />

      <div className={`${style.container} ${modal ? style.active : ""}`}>
        <button className={style.close} onClick={closeModal}>
          <img src={close} alt="Закрыть" />
        </button>

        <Search />

        <ContainerFilter text="Навыки">
          <SkillsFilter />
        </ContainerFilter>

        <ContainerFilter text="Специализация">
          <SpecializationsFilter />
        </ContainerFilter>

        <ContainerFilter text="Рейтинг">
          <RateFilters />
        </ContainerFilter>

        <ContainerFilter text="Сложность">
          <ComplexityFilters />
        </ContainerFilter>
      </div>
    </>
  );
}
