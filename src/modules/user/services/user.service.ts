import { apiGet, apiPost } from "@/utils/api";

// -----------------------------------------
// CREATE USER
// -----------------------------------------

export const createUser = async (data: any) => {
  return apiPost("/api/admin/user/user-create", data);
};

// -----------------------------------------
// GET USER LIST
// -----------------------------------------

export const getUserList = async (page: number = 1) => {
  return apiGet(`/api/admin/user/user-list?page=${page}&limit=10`);
};

// -----------------------------------------
// UPDATE USER STATUS
// -----------------------------------------

export const updateUserStatus = async (id: string, status: boolean) => {
  return apiPost("/api/admin/user/update-status", {
    updateId: id,
    status: status ? "true" : "false",
  });
};

// -----------------------------------------
// CREATE PROFILE
// -----------------------------------------

export const createProfile = async (id: string, profileObj: any) => {
  return apiPost("/api/admin/profile/create-profile", {
    userId: id,
    ...profileObj,
  });
};
