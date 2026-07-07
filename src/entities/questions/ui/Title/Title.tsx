import style from "./Title.module.css";
import Vector from "../../../../shared/assets/Vector.svg";

type Props = {
  title: string;
  isActive: boolean;
  toogleActive: () => void;
};

export default function Title({ title, isActive, toogleActive }: Props) {
  return (
    <div className={style.container} onClick={toogleActive}>
      <div className={style.circle} />
      <h2 className={style.text}>{title}</h2>
      <button className={style.img + (isActive ? ` ${style.active}` : "")}>
        <img src={Vector} alt="vector" />
      </button>

    </div>
  );
}
