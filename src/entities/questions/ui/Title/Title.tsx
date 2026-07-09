import style from "./Title.module.css";
import Vector from "../../../../shared/assets/Vector.svg";

type Props = {
  title: string;
  isActive: boolean;
  onToggle: () => void;
};

export default function Title({ title, isActive, onToggle }: Props) {
  return (
    <div className={style.container} onClick={onToggle}>
      <div className={style.circle} />
      <h2 className={style.text}>{title}</h2>
      <button
        className={`${style.img} ${isActive ? style.active : ""}`}
        aria-label="Развернуть"
      >
        <img src={Vector} alt="стрелка" />
      </button>
    </div>
  );
}
