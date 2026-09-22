import { createSlice } from "@reduxjs/toolkit";
import type { ToggleState } from "./toggle.types";

const initialState: ToggleState = {
  toggle: false,
};

const toggleSlice = createSlice({
  name: "toggle",

  initialState,

  reducers: {
    handleToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { handleToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
