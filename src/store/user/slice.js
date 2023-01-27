import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  login: () => {},
  logout: () => {},
  register: () => {},
};
const user = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    register: (state, actions) => {
      state.name = actions.payload.name;
      state.email = actions.payload.email;
      state.password = actions.payload.password;
    },
    ...middlewareActions,
  },
});

export const { login, logout, register } = user.actions;
export default user.reducer;
