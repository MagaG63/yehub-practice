import { useState } from "react";
import style from "./LongAnswer.module.css";

type Props = {
  text: string;
};

export default function LongAnswer(props: Props) {
  const [long, setLong] = useState(false);

  return (
    <div className={style.container}>
      <h2 className={style.header}>Развернутый ответ</h2>
      {long ? (
        <>
          <p
            className={style.text}
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
          <button className={style.button} onClick={() => setLong(false)}>Свернуть</button>
        </>
      ) : (
        <>
          <div className={style.textWrapper}>
            <p
              className={style.text}
              dangerouslySetInnerHTML={{ __html: props.text.slice(0, 2500) }}
            />
          </div>
          <button className={style.button} onClick={() => setLong(true)}>
            Развернуть
          </button>
        </>
      )}
    </div>
  );
}