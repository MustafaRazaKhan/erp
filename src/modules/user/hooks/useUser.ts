"use client";

import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  handleChange,
  handleProfileChange,
  setLoading,
  setSuccess,
  setUsers,
} from "../store/user.slice";

import {
  createUser,
  getUserList,
  updateUserStatus,
  createProfile,
} from "../services/user.service";

import { showToastError, showToastSuccess } from "@/utils/Toast";

import type { UserState } from "../store/user.types";

const useUser = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");

  // -----------------------------------------
  // GET USER STATE
  // -----------------------------------------

  const {
    userObj,
    profileObj,
    userList,
    loading,
    totalUsers,
    currentPage,
    totalPages,
    limit,
    hasNextPage,
    hasPrevPage,
  } = useAppSelector((state: any) => state.user);

  // -----------------------------------------
  // HANDLE USER INPUT
  // -----------------------------------------

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    dispatch(
      handleChange({
        name: name as keyof UserState["userObj"],
        value,
      }),
    );
  };

  // -----------------------------------------
  // CREATE USER
  // -----------------------------------------

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (userObj.role === "Select Role" || !userObj.role) {
        showToastError("Role is Required");
        return;
      }

      dispatch(setLoading());

      const data: any = await createUser(userObj);

      if (data.success) {
        showToastSuccess(data.message);
      } else {
        showToastError(data.message);
      }

      dispatch(setSuccess());
    } catch (error) {
      dispatch(setSuccess());

      showToastError(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  };

  // -----------------------------------------
  // GET USERS
  // -----------------------------------------

  const getAllUsers = async (page = 1, searchValue = search) => {
    try {
      dispatch(setLoading());

      const response: any = await getUserList(page, 2, searchValue);

      dispatch(
        setUsers({
          data: response.data,
          pagination: response.pagination,
        }),
      );

      dispatch(setSuccess());
    } catch (error) {
      console.error("User list error:", error);

      dispatch(setSuccess());
    }
  };

  // -----------------------------------------
  // SEARCH USERS
  // -----------------------------------------

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearch(value);

    getAllUsers(1, value);
  };

  // -----------------------------------------
  // PAGINATION
  // -----------------------------------------

  const handlePageChange = (page: number) => {
    getAllUsers(page, search);
  };

  // -----------------------------------------
  // UPDATE USER STATUS
  // -----------------------------------------

  const handleUpdate = async (id: string, status: boolean) => {
    try {
      const data: any = await updateUserStatus(id, status);

      if (data.success) {
        showToastSuccess(data.message);

        await getAllUsers(currentPage, search);
      } else {
        showToastError(data.message);
      }
    } catch (error) {
      console.error("Update user status error:", error);
    }
  };

  // -----------------------------------------
  // HANDLE PROFILE INPUT
  // -----------------------------------------

  const onProfileChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    dispatch(
      handleProfileChange({
        name: name as keyof UserState["profileObj"],
        value,
      }),
    );
  };

  // -----------------------------------------
  // CREATE PROFILE
  // -----------------------------------------

  const handleProfileSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string,
  ) => {
    e.preventDefault();

    try {
      const data: any = await createProfile(id, profileObj);

      if (data.success) {
        showToastSuccess(data.message);
      } else {
        showToastError(data.message);
      }
    } catch (error) {
      console.error("Create profile error:", error);
    }
  };

  return {
    // User
    userObj,
    userList,

    // Profile
    profileObj,

    // Loading
    loading,

    // Pagination
    totalUsers,
    currentPage,
    totalPages,
    limit,
    hasNextPage,
    hasPrevPage,

    // Search
    search,

    // User actions
    onChange,
    handleSubmit,

    // User list
    getAllUsers,
    handleSearch,
    handlePageChange,

    // User status
    handleUpdate,

    // Profile
    onProfileChange,
    handleProfileSubmit,
  };
};

export default useUser;
