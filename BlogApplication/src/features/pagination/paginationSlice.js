import { createSlice } from "@reduxjs/toolkit";
import { dataBase } from "../../assets/data/dataBase";

const initialState = {
  dataBase: dataBase,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {},
});

console.log(paginationSlice);
export default paginationSlice.reducer;
