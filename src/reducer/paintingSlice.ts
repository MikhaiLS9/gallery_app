import { createSlice } from "@reduxjs/toolkit";

export interface IDate {
  authors: string;
  locations: string;
  paintings: string;
  from: string;
  before: string;
}
const initialState: IDate = {
  authors: "",
  locations: "",
  paintings: "",
  from: "",
  before: "",
};

export const paintingSlice = createSlice({
  name: "paintings",
  initialState,
  reducers: {
    addPaintings: (state, action) => {
      const { authors, locations, paintings, from, before } = action.payload;
      state.authors = authors;
      state.locations = locations;
      state.paintings = paintings;
      state.from = from;
      state.before = before;
    },
  },
});

export const { addPaintings } = paintingSlice.actions;

export default paintingSlice.reducer;
