"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  handleChange,
  handleMonthlyFeeChange,
  handleMonthlySubmit,
  resetMonthList,
  setFeeList,
  setFeeDetails,
} from "../store/fee.slice";

import { createFee, getFeeList, getFeeDetails } from "../services/fee.service";

import { showToastSuccess } from "@/utils/Toast";

const useFee = () => {
  const dispatch = useAppDispatch();

  // -----------------------------------------
  // GET FEE STATE
  // -----------------------------------------

  const { feeObj, monthlyObj, monthList, feeList, feeDetails } = useAppSelector(
    (state) => state.fee,
  );

  // -----------------------------------------
  // HANDLE NORMAL INPUT
  // -----------------------------------------

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    dispatch(
      handleChange({
        name: e.target.name,
        value: e.target.value,
      }),
    );
  };

  // -----------------------------------------
  // HANDLE MONTHLY FEE INPUT
  // -----------------------------------------

  const handleMonthlyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      handleMonthlyFeeChange({
        name: e.target.name as "monthFee" | "busFee",
        value: e.target.value,
      }),
    );
  };

  // -----------------------------------------
  // ADD MONTHLY FEE
  // -----------------------------------------

  const handleMonthSubmit = (
    e: React.SyntheticEvent,
    selectedClass: string,
  ) => {
    e.preventDefault();

    const existingClass = monthList.filter(
      (item) => item.selectedClass === selectedClass,
    );

    if (existingClass.length > 0) {
      alert("This class has already been added.");
      return;
    }

    const newObj = {
      selectedClass,

      monthFee: Number(monthlyObj.monthFee) || 0,

      busFee: Number(monthlyObj.busFee) || 0,
    };

    dispatch(handleMonthlySubmit(newObj));
  };

  // -----------------------------------------
  // CREATE FEE
  // -----------------------------------------

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement>,
    feeGroup: any,
  ) => {
    e.preventDefault();

    const newData = {
      feeGroup,
      ...feeObj,
      monthList,
    };

    console.log(newData);

    try {
      const data = await createFee(newData);

      if (data.success) {
        showToastSuccess(data.message);

        dispatch(resetMonthList());
      }
    } catch (error) {
      console.error("Create Fee Error:", error);
    }
  };

  // -----------------------------------------
  // GET FEE LIST
  // -----------------------------------------

  const feeListData = async () => {
    try {
      const data = await getFeeList();

      if (data.success) {
        showToastSuccess(data.message);
      }

      dispatch(setFeeList(data.data));
    } catch (error) {
      console.error("Fee List Error:", error);
    }
  };

  // -----------------------------------------
  // GET FEE DETAILS
  // -----------------------------------------

  const feeDetailsData = async (id: string) => {
    try {
      if (!id) {
        console.error("Fee ID is required");
        return;
      }

      const data = await getFeeDetails(id);

      if (!data.success) {
        console.error(data.message || "Fee Structure not found");
        return;
      }

      dispatch(setFeeDetails(data.data));

      return data.data;
    } catch (error) {
      console.error("Fee Details Error:", error);
    }
  };

  return {
    feeObj,
    monthlyObj,
    monthList,
    feeList,
    feeDetails,

    onChange,
    handleMonthlyChange,
    handleMonthSubmit,
    handleSubmit,
    feeListData,
    feeDetailsData,
  };
};

export default useFee;
