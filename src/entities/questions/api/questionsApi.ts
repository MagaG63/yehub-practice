import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  type TParams,
  type TQuestionItem,
  type TQuestionsItem,
  type TResponse,
} from "../model/questions.types";

const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.yeatwork.ru" }),
  endpoints: (builder) => ({
    getQuestions: builder.query<TResponse<TQuestionsItem[]>, TParams>({
      query: (params?) => ({
        url: "/questions/public-questions",
        params: {
          ...params,
        },
      }),
    }),
    getQuestingById: builder.query<TQuestionItem, number>({
      query: (id) => ({
        url: `/questions/public-questions/${id}`,
      }),
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestingByIdQuery } = questionsApi;

export default questionsApi;
