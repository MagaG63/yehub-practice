import { createSlice } from "@reduxjs/toolkit";

export type TQuestionsState = {
  page: number | null;
  current: number;
  title: string;
  skills: number[];
  specializationId: number | undefined;
  modal: boolean;
  rate: number;
  complexity: number[];
};

const initialState: TQuestionsState = {
  page: null,
  current: 1,
  title: "",
  specializationId: undefined,
  skills: [],
  modal: false,
  rate: 0,
  complexity: [],
};

const questionsSlice = createSlice({
  name: "questionsSlice",
  initialState,
  reducers: {
    setCurrent: (state, action: { payload: number }) => {
      state.current = action.payload;
    },
    setPages: (state, action: { payload: number }) => {
      state.page = action.payload;
    },
    setTitle: (state, action: { payload: string }) => {
      state.title = action.payload;
    },
    setSkills: (state, action: { payload: number }) => {
      const skill = action.payload;
      if (state.skills.includes(skill)) {
        state.skills = state.skills.filter((s) => s !== skill);
      } else {
        state.skills.push(skill);
      }
    },
    setSpecializationId: (state, action: { payload: number }) => {
      if (state.specializationId === action.payload) {
        state.specializationId = undefined;
      } else {
        state.specializationId = action.payload;
      }
    },
    setModal: (state, action: { payload: boolean }) => {
      state.modal = action.payload;
    },
    setRate: (state, action: { payload: number }) => {
      if (state.rate !== action.payload) {
        state.rate = action.payload;
      } else {
        state.rate = 0;
      }
    },
    setComplexity: (state, action: { payload: number[] }) => {
      console.log(state.complexity[0] === action.payload[0]);
      console.log(state.complexity[0], action.payload);

      
      if (state.complexity[0] === action.payload[0]) {
        state.complexity = [];
      } else {
        state.complexity = action.payload;
      }
    },
    resetFilters: (state) => {
      state.title = "";
      state.skills = [];
      state.specializationId = undefined;
      state.current = 1;
    },
  },
});

export const {
  setCurrent,
  setPages,
  setTitle,
  setSkills,
  setSpecializationId,
  setModal,
  setRate,
  setComplexity,
  resetFilters,
} = questionsSlice.actions;

export default questionsSlice.reducer;
