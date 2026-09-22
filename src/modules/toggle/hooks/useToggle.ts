"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { handleToggle } from "../store/toggle.slice";

const useToggle = () => {
  const dispatch = useAppDispatch();

  const toggle = useAppSelector((state: any) => state.toggle.toggle);

  const handleToggleChange = () => {
    dispatch(handleToggle());
  };

  return {
    toggle,
    handleToggleChange,
  };
};

export default useToggle;
