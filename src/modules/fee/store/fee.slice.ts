import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { FeeState, MonthlyObj, MonthListItem } from "./fee.types";

const initialState: FeeState = {
  feeObj: {},
  monthlyObj: {
    monthFee: "",
    busFee: "",
  },
  monthList: [],
  feeList: [],
  feeDetails: null,
};

const feeSlice = createSlice({
  name: "fee",

  initialState,

  reducers: {
    // -----------------------------------------
    // NORMAL INPUT CHANGE
    // -----------------------------------------

    handleChange: (
      state,
      action: PayloadAction<{
        name: string;
        value: string;
      }>,
    ) => {
      state.feeObj[action.payload.name] = action.payload.value;
    },

    // -----------------------------------------
    // MONTHLY FEE CHANGE
    // -----------------------------------------

    handleMonthlyFeeChange: (
      state,
      action: PayloadAction<{
        name: keyof MonthlyObj;
        value: string;
      }>,
    ) => {
      state.monthlyObj[action.payload.name] = action.payload.value;
    },

    // -----------------------------------------
    // ADD MONTHLY FEE
    // -----------------------------------------

    handleMonthlySubmit: (state, action: PayloadAction<MonthListItem>) => {
      state.monthList.push(action.payload);
    },

    // -----------------------------------------
    // RESET MONTH LIST
    // -----------------------------------------

    resetMonthList: (state) => {
      state.monthList = [];
    },

    // -----------------------------------------
    // SET FEE LIST
    // -----------------------------------------

    setFeeList: (state, action: PayloadAction<any[]>) => {
      state.feeList = action.payload;
    },

    // -----------------------------------------
    // SET FEE DETAILS
    // -----------------------------------------

    setFeeDetails: (state, action: PayloadAction<any>) => {
      state.feeDetails = action.payload;
    },
  },
});

export const {
  handleChange,
  handleMonthlyFeeChange,
  handleMonthlySubmit,
  resetMonthList,
  setFeeList,
  setFeeDetails,
} = feeSlice.actions;

export default feeSlice.reducer;
