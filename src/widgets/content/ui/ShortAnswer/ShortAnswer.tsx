import style from './ShortAnswer.module.css'

type Props = {
  text: string;
};

export default function ShortAnswer(props: Props) {
  return (
    <div className={style.container}>
        <h2 className={style.header}>Краткий ответ</h2>
      <p className={style.text} dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  );
}
