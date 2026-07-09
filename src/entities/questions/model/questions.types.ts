export type TQuestionsItem = {
  id: number;
  title: string;
  description: string;
  shortAnswer: string;
  rate: number;
  complexity: number;
};

export type TQuestionItem = {
  id: number;
  title: string;
  description: string;
  shortAnswer: string;
  rate: number;
  complexity: number;
  longAnswer: string;
  questionSkills: {
    title: string;
  }[];
  keywords: string[];
  createdBy: {
    name: string;
  };
};

export type TResponse<T> = {
  data: T;
  page: number;
  limit: number;
  total: number;
};


export type TParams = {
  page?: number;
  title?: string;
  specializationId?: number;
  skills?: number[];
  rate?: number;
  complexity?: number[];
};
