import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useQuestionsToggle } from "../hooks/useQuestionsToggle";
import type { TQuestionsItem } from "../model/questions.types";
import Stats from "./Stats/Stats";
import Title from "./Title/Title";
import style from "./QuestionsItem.module.css";

type Props = TQuestionsItem & {
  menu: ReactElement;
};

export default function QuestionsItem(props: Props) {
  const { isActive, toggle } = useQuestionsToggle();

  return (
    <div className={style.container}>
      <Title
        title={props.title}
        isActive={isActive}
        onToggle={toggle}
      />
      {isActive && (
        <>
          <Stats
            rate={props.rate}
            complexity={props.complexity}
            menu={props.menu}
          />
          <span
            className={style.text}
            dangerouslySetInnerHTML={{ __html: props.shortAnswer }}
          />
          <Link className={style.link} to={`/questions/${props.id}`}>
            Подробнее
          </Link>
        </>
      )}
    </div>
  );
}