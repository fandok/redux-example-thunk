import { configureStore } from "@reduxjs/toolkit";

import carReducer from "./carSlice";
import pizzaReducer from "./pizzaSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    pizza: pizzaReducer,
  },
});
