import style from "./NextPreviosButton.module.css";
import icon from "../../../shared/assets/Vector.svg";
import type { TQuestionItem } from "../../../entities/questions/model/questions.types";

type Props = {
  data: TQuestionItem;
};

export default function NextPreviosButton(props: Props) {


  return (
    <div className={style.container}>
      <button className={style.previos}>
        <img className={style.iconPrevios} src={icon} alt="" />
        <p>Предыдущий</p>
      </button>
      <button className={style.next}>
        <img className={style.iconNext} src={icon} alt="" />
        <p>Cледующий</p>
      </button>
    </div>
  );
}
