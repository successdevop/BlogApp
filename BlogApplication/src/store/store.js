import { configureStore } from "@reduxjs/toolkit";
import sliderReducers from "../features/slider/sliderSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducers,
  },
});
