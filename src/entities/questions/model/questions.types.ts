export type TQuestionsItem = {
  id: number;
  title: string;
  description: string;
  shortAnswer: string;
  rate: number;
  complexity: number;
};

export type TResponse = {
  data: TQuestionsItem[];
  page: number;
  limit: number;
  total: number;
};
