import { apiGet, apiPost, apiUpdate, apiDelete } from "@/utils/api";
import { EnquiryObj } from "../store/enquiry.types";

// =====================================
// CREATE ENQUIRY
// =====================================

export const createEnquiry = async (data: EnquiryObj): Promise<EnquiryObj> => {
  return apiPost<EnquiryObj>("/api/enquiries", data);
};

// =====================================
// GET ENQUIRY LIST
// =====================================

export const getEnquiries = async (
  page: number,
  limit: number,
  search: string = "",
) => {
  return apiGet<any>(
    `/api/enquiries?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`,
  );
};

// =====================================
// UPDATE ENQUIRY
// =====================================

export const updateEnquiry = async (
  id: string,
  data: EnquiryObj,
): Promise<EnquiryObj> => {
  return apiUpdate<EnquiryObj>(`/api/admin/enquiries/${id}`, data);
};

// =====================================
// DELETE ENQUIRY
// =====================================

export const deleteEnquiry = async (id: string): Promise<EnquiryObj> => {
  return apiDelete<EnquiryObj>(`/api/admin/enquiries/${id}`);
};
