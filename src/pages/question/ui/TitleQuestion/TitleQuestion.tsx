import type { TQuestionItem } from "../../../../entities/questions/model/questions.types";
import NextPreviosButton from "../../../../features/nextPreviosButton/ui/NextPreviosButton";
import LongAnswer from "../../../../widgets/content/ui/LongAnswer/LongAnswer";
import ShortAnswer from "../../../../widgets/content/ui/ShortAnswer/ShortAnswer";
import Title from "../../../../widgets/title/ui/Title/Title";
import style from "./TitleQuestion.module.css";

type Props = {
  data: TQuestionItem;
};

export default function TitleQuestion(props: Props) {
  return (
    <div className={style.list}>
      <Title title={props.data.title} description={props.data.description} />
      <NextPreviosButton data={props.data} />
      <ShortAnswer text={props.data.shortAnswer} />
      <LongAnswer text={props.data.longAnswer} />
    </div>
  );
}
