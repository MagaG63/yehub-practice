import type { ReactElement } from "react";
import useQuestins from "../../../shared/hooks/useQuestins";
import type { TQuestionsItem } from "../model/questions.types";
import style from "./QuestionsItem.module.css";
import Stats from "./Stats/Stats";
import Title from "./Title/Title";
import { Link } from "react-router-dom";

export default function QuestionsItem(
  props: TQuestionsItem & { menu: ReactElement },
) {
  const { isActive, toogleActive } = useQuestins();

  return (
    <div className={style.container}>
      <Title
        title={props.title}
        isActive={isActive}
        toogleActive={toogleActive}
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

          <Link className={style.link} to={"`questions/${props.id}`"}>
            Подробнее
          </Link>
        </>
      )}
    </div>
  );
}
