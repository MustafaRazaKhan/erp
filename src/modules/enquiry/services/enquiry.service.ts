import { apiGet, apiPost, apiUpdate, apiDelete } from "@/utils/api";
import { EnquiryObj } from "../store/enquiry.types";

// =====================================
// CREATE ENQUIRY
// =====================================

export const createEnquiry = async (data: EnquiryObj): Promise<EnquiryObj> => {
  return apiPost<EnquiryObj>("/api/admin/enquiries", data);
};

// =====================================
// GET ENQUIRY LIST
// =====================================

export const getEnquiries = async (): Promise<EnquiryObj[]> => {
  return apiGet<EnquiryObj[]>("/api/admin/enquiries");
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
