import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SchoolState } from "./school.types";

const initialState: SchoolState = {
  loading: false,

  schoolObj: {
    name: "",
    code: "",
    contact: "",
    email: "",
    address: "",
    image: null,
  },

  schoolList: [],
};

const schoolSlice = createSlice({
  name: "school",

  initialState,

  reducers: {
    // -----------------------------------------
    // HANDLE TEXT INPUT
    // -----------------------------------------

    handleChange: (
      state,
      action: PayloadAction<{
        name: keyof SchoolState["schoolObj"];
        value: string;
      }>,
    ) => {
      state.schoolObj[action.payload.name] = action.payload.value as never;
    },

    // -----------------------------------------
    // HANDLE FILE INPUT
    // -----------------------------------------

    handleFileChange: (
      state,
      action: PayloadAction<{
        name: keyof SchoolState["schoolObj"];
        value: File | null;
      }>,
    ) => {
      state.schoolObj[action.payload.name] = action.payload.value as never;
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
    // SET SCHOOL LIST
    // -----------------------------------------

    setSchool: (state, action: PayloadAction<SchoolState["schoolList"]>) => {
      state.schoolList = action.payload;
      state.loading = false;
    },
  },
});

export const {
  handleChange,
  handleFileChange,
  setLoading,
  setSuccess,
  setSchool,
} = schoolSlice.actions;

export default schoolSlice.reducer;
