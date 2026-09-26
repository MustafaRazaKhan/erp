import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { UserState } from "./user.types";

const initialState: UserState = {
  loading: false,

  userObj: {
    role: "",
    identifier: "",
    phone: "",
    password: "",
  },

  profileObj: {
    name: "",
    phone: "",
    address: "",
  },

  userList: [],

  totalUsers: 0,
  currentPage: 1,
  totalPages: 1,
  limit: 10,
  hasNextPage: false,
  hasPrevPage: false,
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

    setUsers: (
      state,
      action: PayloadAction<{
        data: UserState["userList"];
        pagination: {
          total: number;
          page: number;
          totalPages: number;
          limit: number;
          hasNextPage: boolean;
          hasPrevPage: boolean;
        };
      }>,
    ) => {
      state.userList = action.payload.data;

      state.totalUsers = action.payload.pagination.total;

      state.currentPage = action.payload.pagination.page;

      state.totalPages = action.payload.pagination.totalPages;

      state.limit = action.payload.pagination.limit;

      state.hasNextPage = action.payload.pagination.hasNextPage;

      state.hasPrevPage = action.payload.pagination.hasPrevPage;
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
