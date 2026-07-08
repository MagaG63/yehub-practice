import { createSlice } from "@reduxjs/toolkit";

type TInit = {
  page: number | null;
  current: number | null;
  title: string;
};

const initialState: TInit = {
  page: null,
  current: 1,
  title: "",
};

const questionsSlice = createSlice({
  name: "questionsSlice",
  initialState,
  reducers: {
    setCurrent(state, action: { payload: number }) {
      state.current = action.payload;
    },
    setPages(state, action: { payload: number }) {
      state.page = action.payload;
    },
    setTitle(state, action: { payload: string }) {
      state.title = action.payload;
    },
  },
});

export const { setCurrent, setPages, setTitle } = questionsSlice.actions;

export default questionsSlice.reducer;
