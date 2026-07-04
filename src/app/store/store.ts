import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat([]),
});


export default store