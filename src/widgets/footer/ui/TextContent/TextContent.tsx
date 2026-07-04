import style from "./TextContent.module.css";

export default function TextContent() {
  return (
    <div className={style.container}>
      <h2 className={style.head}>
        Выбери, каким будет IT завтра, вместе с нами
      </h2>
      <p className={style.text}>
        YeaHub — это полностью открытый проект, призванный объединить и улучшить
        IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн
        проекта также открыт для ознакомления в Figma.
      </p>
    </div>
  );
}
