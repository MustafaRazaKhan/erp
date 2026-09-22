"use client";

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

  // -----------------------------------------
  // GET USER STATE
  // -----------------------------------------

  const { userObj, profileObj, userList, loading } = useAppSelector(
    (state: any) => state.user,
  );

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
      // -----------------------------------------
      // VALIDATE ROLE
      // -----------------------------------------

      if (userObj.role === "Select Role" || !userObj.role) {
        showToastError("Role is Required");
        return;
      }

      dispatch(setLoading());

      // -----------------------------------------
      // CREATE USER API
      // -----------------------------------------

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

  const userListData = async (page: number = 1) => {
    try {
      dispatch(setLoading());

      const data: any = await getUserList(page);

      dispatch(setUsers(data.data));

      dispatch(setSuccess());
    } catch (error) {
      console.error("User list error:", error);

      dispatch(setSuccess());
    }
  };

  // -----------------------------------------
  // UPDATE USER STATUS
  // -----------------------------------------

  const handleUpdate = async (id: string, status: boolean) => {
    try {
      const data: any = await updateUserStatus(id, status);

      if (data.success) {
        showToastSuccess(data.message);

        // Refresh user list
        await userListData();
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
    userObj,
    profileObj,
    userList,
    loading,

    onChange,
    handleSubmit,

    userListData,
    handleUpdate,

    onProfileChange,
    handleProfileSubmit,
  };
};

export default useUser;
