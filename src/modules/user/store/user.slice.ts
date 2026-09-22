import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { UserState } from "./user.types";

const initialState: UserState = {
  loading: false,

  userObj: {
    role: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  },

  profileObj: {
    name: "",
    phone: "",
    address: "",
  },

  userList: [],
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    // -----------------------------------------
    // HANDLE USER INPUT
    // -----------------------------------------

    handleChange: (
      state,
      action: PayloadAction<{
        name: keyof UserState["userObj"];
        value: string;
      }>,
    ) => {
      state.userObj[action.payload.name] = action.payload.value;
    },

    // -----------------------------------------
    // HANDLE PROFILE INPUT
    // -----------------------------------------

    handleProfileChange: (
      state,
      action: PayloadAction<{
        name: keyof UserState["profileObj"];
        value: string;
      }>,
    ) => {
      state.profileObj[action.payload.name] = action.payload.value;
    },

    // -----------------------------------------
    // SET LOADING
    // -----------------------------------------

    setLoading: (state) => {
      state.loading = true;
    },

    // -----------------------------------------
    // SET SUCCESS
    // -----------------------------------------

    setSuccess: (state) => {
      state.loading = false;
    },

    // -----------------------------------------
    // SET USERS
    // -----------------------------------------

    setUsers: (state, action: PayloadAction<any[]>) => {
      state.userList = action.payload;
      state.loading = false;
    },
  },
});

export const {
  handleChange,
  handleProfileChange,
  setLoading,
  setSuccess,
  setUsers,
} = userSlice.actions;

export default userSlice.reducer;
