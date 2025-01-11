import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
  token: null,
  name : null ,
  Email: null,
  role: null,
  AccountStatus: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const token = action.payload;
      const decoded = jwtDecode(token);
      state.token = token;
      state.name = decoded.name; // Store the role in state
      state.Email = decoded.Email; // Store the role in state
      state.role = decoded.role; // Store the role in state
      state.AccountStatus = decoded.AccountStatus; // Store the role in state
      localStorage.setItem("token", token);
    },
    logout: (state) => {
      state.name = null;
      state.role = null;
      state.Email = null;
      state.role = null;
      state.AccountStatus = null;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
