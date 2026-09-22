import { apiGet, apiPost, apiUpdate } from "@/utils/api";

import type { ClassObj } from "../store/class.types";

export const createClass = async (data: ClassObj) => {
  return apiPost("/api/admin/class/class-create", data);
};

export const getClassList = async () => {
  return apiGet("/api/admin/class/class-list");
};

export const updateClass = async (id: string, data: ClassObj) => {
  return apiUpdate(`/api/admin/class/update-class/${id}`, data);
};

export const getStudentListClassWise = async (id: string) => {
  return apiGet(`/api/admin/class/view-student-class-wise/${id}`);
};
