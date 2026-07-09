import { useParams } from "react-router-dom";
import { useGetQuestingByIdQuery } from "../../../entities/questions/api/questionsApi";
import TitleQuestion from "./TitleQuestion/TitleQuestion";
import { getErrorMessage } from "../../../shared/utils/error/errorUtils";
import style from "./Page.module.css";
import InfoQuestion from "./InfoQuestion/InfoQuestion";

export default function Page() {
  const { id } = useParams();

  const valid = id ? +id : 0;

  const { data, isError, error, isLoading, isFetching, isSuccess } =
    useGetQuestingByIdQuery(valid);

  if (isError) {
    return <div>{getErrorMessage(error)}</div>;
  }

  if (isLoading || isFetching) {
    return "Loading...";
  }

  return (
    <>
      {isSuccess && (
        <div className={style.main}>
          <TitleQuestion data={data} />
          <InfoQuestion data={data}/>
        </div>
      )}
    </>
  );
}
