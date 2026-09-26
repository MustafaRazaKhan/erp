import { apiGet, apiPost } from "@/utils/api";

// -----------------------------------------
// CREATE USER
// -----------------------------------------

export const createUser = async (data: any) => {
  console.log(data);
  return apiPost("/api/user", data);
};

// -----------------------------------------
// GET USER LIST
// -----------------------------------------

export const getUserList = async (
  page: number,
  limit: number,
  search: string = "",
) => {
  return apiGet(
    `/api/user?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`,
  );
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
