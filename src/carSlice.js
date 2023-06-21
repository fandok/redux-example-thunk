import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  carList: [],
};

export const getCars = createAsyncThunk("car/getCars", async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.cars;
});

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.carList = action.payload;
    });
  },
});

export const { addCar } = carSlice.actions;

export default carSlice.reducer;
