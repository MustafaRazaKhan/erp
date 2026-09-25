"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  handleChange,
  setLoading,
  setSuccess,
  enquiryReset,
  setEnquiries,
} from "../store/enquiry.slice";

import { createEnquiry, getEnquiries } from "../services/enquiry.service";

import type { EnquiryObj } from "../store/enquiry.types";
import { showToastSuccess } from "@/utils/Toast";
import { useState } from "react";

const useEnquiry = () => {
  const dispatch = useAppDispatch();

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

  const [search, setSearch] = useState("");

  const getAllEnquiries = async (page = 1, searchValue = search) => {
    try {
      dispatch(setLoading());

      const response = await getEnquiries(page, 5, searchValue);

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

    handleSearch,
    handlePageChange,
    getAllEnquiries,
  };
};

export default useEnquiry;
