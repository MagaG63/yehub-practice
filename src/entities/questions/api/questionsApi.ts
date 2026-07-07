import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type TResponse } from "../model/questions.types";

const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.yeatwork.ru" }),
  endpoints: (builder) => ({
    getQuestions: builder.query<TResponse, { page?: number }>({
      query: (params) => ({
        url: "/questions/public-questions",
        params: {
          ...params,
        },
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;

export default questionsApi;
