"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  setLoading,
  setSuccess,
  setEnquiries,
  handleChange,
  enquiryReset,
} from "../store/enquiry.slice";

import { createEnquiry, getEnquiries } from "../services/enquiry.service";

import { useState } from "react";
import { showToastSuccess } from "@/utils/Toast";

const useEnquiry = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const {
    enquiryObj,
    enquiryList,
    loading,
    totalEnquiries,
    currentPage,
    totalPages,
    limit,
    hasNextPage,
    hasPrevPage,
  } = useAppSelector((state: any) => state.enquiry);

  const getAllEnquiries = async (page = 1, searchValue = search) => {
    try {
      dispatch(setLoading());

      const response = await getEnquiries(page, 2, searchValue);
      // console.log(response);

      dispatch(
        setEnquiries({
          data: response.data,
          pagination: response.pagination,
        }),
      );

      dispatch(setSuccess());
    } catch (error) {
      console.error("Get enquiries error:", error);

      dispatch(setSuccess());
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearch(value);

    getAllEnquiries(1, value);
  };

  const handlePageChange = (page: number) => {
    getAllEnquiries(page, search);
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(setLoading());

      const data: any = await createEnquiry(enquiryObj);

      if (data.success) {
        showToastSuccess(data.message);

        dispatch(setSuccess());
      }
      dispatch(enquiryReset());
    } catch (error) {
      console.error(error);
    }
  };

  return {
    enquiryObj,
    enquiryList,
    loading,

    totalEnquiries,
    currentPage,
    totalPages,
    limit,
    hasNextPage,
    hasPrevPage,

    search,
    onChange,

    handleSearch,
    handlePageChange,
    getAllEnquiries,
    handleSubmit,
  };
};

export default useEnquiry;
