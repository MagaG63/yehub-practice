import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import questionsApi from "../../entities/questions/api/questionsApi";
import skillsApi from "../../entities/skills/api/skillsApi";
import specializationsApi from "../../entities/specializations/api/specializations";

const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(questionsApi.middleware, skillsApi.middleware, specializationsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
