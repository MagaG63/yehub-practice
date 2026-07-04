import style from "./Footer.module.css";
import text from "../../../../shared/assets/Yeahub.svg";
import TextContent from "../TextContent/TextContent";
import Info from "../Info/Info";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.textLogo}>
        <img src={text} alt="Yeahub" className={style.img} />
      </div>
      <TextContent />
      <hr
        style={{
          background: "rgba(230, 230, 230, 0.1)",
          height: "2px",
          
        }}
      />
      <Info />
    </footer>
  );
}
