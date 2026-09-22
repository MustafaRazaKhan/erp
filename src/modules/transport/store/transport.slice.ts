import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransportState, TransportType } from "./transport.types";

const initialState: TransportState = {
  loading: false,

  transportObj: {
    // keep your actual transport fields here
  } as TransportType,

  transportList: [],
};

const transportSlice = createSlice({
  name: "transport",

  initialState,

  reducers: {
    // -----------------------------------------
    // HANDLE TRANSPORT INPUT
    // -----------------------------------------

    handleTransportChange: (
      state,
      action: PayloadAction<{
        name: keyof TransportType;
        value: string | number | null;
      }>,
    ) => {
      state.transportObj[action.payload.name] = action.payload.value as never;
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
    // SET TRANSPORT LIST
    // -----------------------------------------

    setTransportList: (state, action: PayloadAction<TransportType[]>) => {
      state.transportList = action.payload;
      state.loading = false;
    },
  },
});

export const {
  handleTransportChange,
  setLoading,
  setSuccess,
  setTransportList,
} = transportSlice.actions;

export default transportSlice.reducer;
