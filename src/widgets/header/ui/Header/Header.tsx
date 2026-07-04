import logo from "../../../../shared/assets/logo.svg";
import yeahub from "../../../../shared/assets/Yeahub.svg";
import AuthButton from "../AuthButton/AuthButton";
import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <div className={style.logo}>
            <img src={logo} alt="Логотип" className={style.logoIcon} />
            <img src={yeahub} alt="Yeahub" className={style.logoText} />
          </div>
          <Navigation />
        </div>
        <div className={style.rightContainer}>
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
