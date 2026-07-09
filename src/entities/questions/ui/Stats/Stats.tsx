import type { ReactElement } from "react";
import style from "./Stats.module.css";

export default function Stats({
  rate,
  complexity,
  menu,
}: {
  rate: number;
  complexity: number;
  menu?: ReactElement;
}) {
  return (
    <div className={style.container}>
      <div className={style.containerInfo}>
        <span className={style.info}>Рейтинг:</span>
        <span className={style.text}>{rate}</span>
      </div>
      <div className={style.containerInfo}>
        <span className={style.info}>Сложность:</span>
        <span className={style.text}>{complexity}</span>
      </div>
      {menu && <div className={style.menu}>{menu}</div>}
    </div>
  );
}
