import style from "./AuthButton.module.css";
import burger from "../../../../shared/assets/Hamburger Menu.svg";

export default function AuthButton() {
  return (
    <div className={style.container}>
      <button className={style.signIn} aria-label="Вход">
        Вход
      </button>
      <button className={style.signUp}>Регистрация</button>
      <button className={style.burgerMenu}>
        <img src={burger} alt="burger" />
      </button>
    </div>
  );
}
