import NAVITEMS, { type TNavItem } from "../../../../shared/utils/constants/navitems.ts";
import style from "./Navigation.module.css";
import vector from "../../../../shared/assets/Vector.svg";

export default function Navigation() {
  return (
    <nav className={style.navigation}>
      <div className={style.select}>
        <p>Подготовка</p>
        <img src={vector} alt="стрелка" />
      </div>
      <ul className={style.list}>
        {NAVITEMS.map((item: TNavItem) => (
          <li key={item.id} className={style.item}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
