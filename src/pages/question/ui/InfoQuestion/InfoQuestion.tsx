import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { setModal } from "../../../../entities/questions/model/questionsSlice";
import ContainerFilter from "../../../../shared/ui/ContainerFilter/ContainerFilter";
import style from "./InfoQuestion.module.css";
import close from "../../../../shared/assets/Vector (1).svg";
import type { TQuestionItem } from "../../../../entities/questions/model/questions.types";
import Stats from "../../../../entities/questions/ui/Stats/Stats";
import ContainerItem from "../../../../shared/ui/ContainerItem/ContainerItem";
import Tags from "../../../../widgets/info/ui/Tags/Tags";

type Props = {
  data: TQuestionItem;
};

export default function InfoQuestion(props: Props) {
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

        <ContainerFilter text="Уровень">
          <Stats complexity={props.data.complexity} rate={props.data.rate} />
        </ContainerFilter>

        <ContainerFilter text="Навыки">
          {props.data.questionSkills.map(({ title }) => (
            <ContainerItem active id={title} title={title} />
          ))}
        </ContainerFilter>

        <ContainerFilter text="Навыки">
          {props.data.keywords.map((title) => (
            <Tags title={title} />
          ))}
        </ContainerFilter>
      </div>
    </>
  );
}
