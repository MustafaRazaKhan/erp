import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { ClassState } from "./class.types";

const initialState: ClassState = {
  loading: false,

  classObj: {
    className: "",
    roomNo: 0,
    sectionName: "",
  },

  classList: [],

  studentList: [],
};

const classSlice = createSlice({
  name: "classes",

  initialState,

  reducers: {
    handleChange: (
      state,
      action: PayloadAction<{
        name: keyof ClassState["classObj"];
        value: string | number;
      }>,
    ) => {
      state.classObj[action.payload.name] = action.payload.value as never;
    },

    setLoading: (state) => {
      state.loading = true;
    },

    setSuccess: (state) => {
      state.loading = false;
    },

    setClassList: (state, action: PayloadAction<ClassState["classList"]>) => {
      state.classList = action.payload;
    },

    setStudentList: (
      state,
      action: PayloadAction<ClassState["studentList"]>,
    ) => {
      state.studentList = action.payload;
    },

    resetClass: (state) => {
      state.classObj = {
        className: "",
        roomNo: 0,
        sectionName: "",
      };
    },
  },
});

export const {
  handleChange,
  setLoading,
  setSuccess,
  setClassList,
  setStudentList,
  resetClass,
} = classSlice.actions;

export default classSlice.reducer;
