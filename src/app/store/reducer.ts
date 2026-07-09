import { combineReducers } from "@reduxjs/toolkit";
import questionsSlice from "../../entities/questions/model/questionsSlice";
import questionsApi from "../../entities/questions/api/questionsApi";
import skillsApi from "../../entities/skills/api/skillsApi";
import specializationsApi from "../../entities/specializations/api/specializations";

const rootReducer = combineReducers({
  params: questionsSlice,
  [questionsApi.reducerPath]: questionsApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
  [specializationsApi.reducerPath]: specializationsApi.reducer,
});

export default rootReducer;