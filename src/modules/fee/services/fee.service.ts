import { apiGet, apiPost } from "@/utils/api";

// -----------------------------------------
// CREATE FEE
// -----------------------------------------

export const createFee = async (data: any) => {
  return apiPost("/api/admin/fee/fee-create", data);
};

// -----------------------------------------
// GET FEE LIST
// -----------------------------------------

export const getFeeList = async () => {
  return apiGet("/api/admin/fee/admin-view-fee-list");
};

// -----------------------------------------
// GET FEE DETAILS
// -----------------------------------------

export const getFeeDetails = async (id: string) => {
  return apiGet(`/api/admin/fee/admin-view-fee-detail/${id}`);
};
