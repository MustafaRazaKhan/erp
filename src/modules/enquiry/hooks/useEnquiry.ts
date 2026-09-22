"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  handleChange,
  setLoading,
  setSuccess,
  enquiryReset,
} from "../store/enquiry.slice";

import { createEnquiry } from "../services/enquiry.service";

import type { EnquiryObj } from "../store/enquiry.types";

const useEnquiry = () => {
  const dispatch = useAppDispatch();

  // -----------------------------------------
  // GET ENQUIRY STATE
  // -----------------------------------------

  const { enquiryObj, loading } = useAppSelector((state: any) => state.enquiry);

  // -----------------------------------------
  // HANDLE INPUT CHANGE
  // -----------------------------------------

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(
      handleChange({
        name: e.target.name as keyof EnquiryObj,
        value: e.target.value,
      }),
    );
  };

  // -----------------------------------------
  // SUBMIT FORM
  // -----------------------------------------

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(setLoading());

      await createEnquiry(enquiryObj);

      dispatch(enquiryReset());
      dispatch(setSuccess());

      alert("Enquiry submitted successfully");
    } catch (error) {
      console.error("Create enquiry error:", error);

      dispatch(setSuccess());

      alert("Something went wrong. Please try again.");
    }
  };

  return {
    enquiryObj,
    loading,
    onChange,
    handleSubmit,
  };
};

export default useEnquiry;
