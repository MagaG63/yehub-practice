import { useGetQuestionsQuery } from "../../../entities/questions/api/questionsApi";
import QuestionsItem from "../../../entities/questions/ui/QuestionsItem";
import Pagination from "../../../features/pagination/ui/Pagination";
import QuestionsButton from "../../../features/questions/ui/QuestionsButton/QuestionsButton";
import { useAppSelector } from "../../../shared/hooks/hooks";

export default function Page() {
  const params = useAppSelector((state) => state.params);

  const { data, isFetching } = useGetQuestionsQuery({
    page: params.current ?? 1,
  });

  return (
    <>
      {data &&
        data?.data.map((item) => (
          <QuestionsItem
            key={item.id}
            {...item}
            menu={<QuestionsButton id={item.id} />}
          />
        ))}
      <Pagination load={isFetching} limit={data?.limit} />
    </>
  );
}
