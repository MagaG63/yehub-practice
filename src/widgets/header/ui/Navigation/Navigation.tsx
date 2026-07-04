import NAVITEMS from "../../../../shared/utils/constants/navitems";
import type { TNavItems } from "../../model/header.types";
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
        {NAVITEMS.map((item: INavItems) => (
          <li key={item.id} className={style.item}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
