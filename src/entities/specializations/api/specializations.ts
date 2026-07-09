import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TSpecializations } from "../model/specializations.types";

const specializationsApi = createApi({
  reducerPath: "specializationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.yeatwork.ru" }),
  endpoints: (builder) => ({
    getspecializations: builder.query<TSpecializations, void>({
      query: () => "specializations",
    }),
  }),
});

export const { useGetspecializationsQuery } = specializationsApi;

export default specializationsApi;
