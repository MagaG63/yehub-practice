import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TSkills } from "../model/skills.types";

const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.yeatwork.ru" }),
  endpoints: (builder) => ({
    getSkills: builder.query<TSkills, void>({
      query: () => "skills",
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;

export default skillsApi;
