import { combineReducers } from "@reduxjs/toolkit";
import questionsApi from "../../entities/questions/api/questionsApi";
import questionsSlice from "../../entities/questions/api/questionsSlice";

const rootReducer = combineReducers({
  params: questionsSlice,
  [questionsApi.reducerPath]: questionsApi.reducer,
});

export default rootReducer;
