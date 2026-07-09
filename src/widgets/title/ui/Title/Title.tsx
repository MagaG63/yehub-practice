import style from "./Title.module.css";
import infoIcon from "../../../../shared/assets/Filter button.svg";
import { useAppDispatch } from "../../../../app/store/hooks";
import { setModal } from "../../../../entities/questions/model/questionsSlice";

type Props = {
  title: string;
  description: string;
};

export default function Title(props: Props) {
  const dispatch = useAppDispatch();

  return (
    <section className={style.container}>
      <div className={style.img}>
        <div className={style.fakeImg} />
      </div>
      <div className={style.info}>
        <h1 className={style.title}>{props.title}</h1>
        <p className={style.desc}>{props.description}</p>
      </div>
      <button className={style.menu} onClick={() => dispatch(setModal(true))}>
        <img src={infoIcon} alt="" />
      </button>
    </section>
  );
}
