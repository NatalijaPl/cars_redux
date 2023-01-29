import { createSlice } from "@reduxjs/toolkit";

const cars = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    car: {},
  },
  reducers: {
    getCarsAction: () => {},
    setCarsAction: (state, { payload }) => {
      state.cars = payload;
    },
    getCarAction: () => {},
    setCarAction: (state, { payload }) => {
      state.car = payload;
    },
    createCarAction: () => {},
    deleteCarAction: () => {},
    editCarAction: () => {},
  },
});

export const {
  getCarsAction,
  setCarsAction,
  getCarAction,
  setCarAction,
  createCarAction,
  deleteCarAction,
  editCarAction,
} = cars.actions;
export default cars.reducer;
