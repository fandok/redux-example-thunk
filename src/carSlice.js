import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  carList: [],
};

export const getCars = createAsyncThunk("car/getCars", async () => {
  const response = await fetch(
    "https://api-car-rental.binaracademy.org/customer/v2/car"
  );
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
