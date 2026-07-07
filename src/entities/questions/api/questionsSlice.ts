import { createSlice } from "@reduxjs/toolkit";

type TInit = {
  page: number | null;
  current: number | null;
};

const initialState: TInit = {
  page: null,
  current: null,
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
  },
});

export const { setCurrent, setPages } = questionsSlice.actions;

export default questionsSlice.reducer;
