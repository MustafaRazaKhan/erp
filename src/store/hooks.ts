// import { useDispatch, useSelector } from "react-redux";

// import type { RootState, AppDispatch } from "./index";

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// export const useAppSelector = useSelector.withTypes<RootState>();

import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;
