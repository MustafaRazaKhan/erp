import { createSlice } from "@reduxjs/toolkit";

import type { ThemeState } from "./theme.types";

const initialState: ThemeState = {
  theme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
