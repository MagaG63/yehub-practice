import style from "./Info.module.css";
import social from "../../../../shared/assets/Frame 2087326069.svg";


export default function Info() {
  return (
    <div className={style.container}>
      <p>© 2024 YeaHub Документы</p>
      <div className={style.info}>
        <p>Ищите нас и в других соцсетях @yeahub_it</p>
        <img src={social} alt="social media" />
      </div>
    </div>
  );
}
