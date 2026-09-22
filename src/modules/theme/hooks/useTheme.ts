"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTheme } from "../store/theme.slice";

const useTheme = () => {
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state: any) => state.theme.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return {
    theme,
    handleThemeToggle,
  };
};

export default useTheme;
