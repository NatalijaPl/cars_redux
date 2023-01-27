import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getCars: () => {},
  getCar: () => {},
  createCar: () => {},
  editCar: () => {},
  deleteCar: () => {},
};

const car = createSlice({
  name: "cars",
  initialState: {
    model: "",
    brand: "",
    year: "",
    max_speed: "",
    is_automatic: "",
    engine: "",
    number_of_doors: "",
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setCar: (state, action) => {
      state.car = action.payload;
    },
    createCar: (state, actions) => {
      state.model = actions.payload.model;
      state.brand = actions.payload.brand;
      state.year = actions.payload.year;
      state.max_speed = actions.payload.max_speed;
      state.is_automatic = actions.payload.is_automatic;
      state.engine = actions.payload.engine;
      state.number_of_doors = actions.payload.number_of_doors;
    },
    ...middlewareActions,
  },
});

export const {
  getCars,
  getCar,
  setCars,
  setCar,
  createCar,
  editCar,
  deleteCar,
} = car.actions;
export default car.reducer;
