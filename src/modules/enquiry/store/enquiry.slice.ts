import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { EnquiryObj, EnquiryState } from "./enquiry.types";

const initialState: EnquiryState = {
  loading: false,

  enquiryObj: {
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
    message: "",
    status: "new",
  },

  enquiryList: [],

  totalEnquiries: 0,

  currentPage: 1,
  totalPages: 1,
  limit: 10,
  hasNextPage: false,
  hasPrevPage: false,
};

const enquirySlice = createSlice({
  name: "enquiry",

  initialState,

  reducers: {
    // SET_LOADING
    setLoading: (state) => {
      state.loading = true;
    },

    // HANDLE_CHANGE
    handleChange: (
      state,
      action: PayloadAction<{
        name: keyof EnquiryObj;
        value: string;
      }>,
    ) => {
      state.enquiryObj[action.payload.name] = action.payload.value;
    },

    // SET_SUCCESS
    setSuccess: (state) => {
      state.loading = false;
    },

    // SET_ENQUIRIES
    setEnquiries: (state, action: PayloadAction<any>) => {
      state.enquiryList = action.payload.data;

      state.totalEnquiries = action.payload.pagination.total;

      state.currentPage = action.payload.pagination.page;

      state.totalPages = action.payload.pagination.totalPages;

      state.limit = action.payload.pagination.limit;

      state.hasNextPage = action.payload.pagination.hasNextPage;

      state.hasPrevPage = action.payload.pagination.hasPrevPage;
    },

    // ENQUIRY_RESET
    enquiryReset: (state) => {
      state.enquiryObj = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        comment: "",
        message: "",
        status: "new",
      };
    },
  },
});

export const {
  setLoading,
  handleChange,
  setSuccess,
  setEnquiries,
  enquiryReset,
} = enquirySlice.actions;

export default enquirySlice.reducer;
