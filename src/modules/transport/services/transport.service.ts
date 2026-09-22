import { apiGet, apiPost } from "@/utils/api";

// -----------------------------------------
// GET TRANSPORT LIST
// -----------------------------------------

export const getTransportList = async () => {
  return apiGet("/api/admin/transport/transport-list");
};

// -----------------------------------------
// CREATE TRANSPORT
// -----------------------------------------

export const createTransport = async (data: any) => {
  return apiPost("/api/admin/transport/create-transport", data);
};
