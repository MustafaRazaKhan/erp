import { apiGet } from "@/utils/api";

// -----------------------------------------
// CREATE SCHOOL
// -----------------------------------------

export const createSchool = async (formData: FormData) => {
  const response = await fetch("/api/school", {
    method: "POST",
    body: formData,
  });

  return response.json();
};

// -----------------------------------------
// GET SCHOOL LIST
// -----------------------------------------

export const getSchoolList = async () => {
  return apiGet("/api/school");
};

// -----------------------------------------
// DELETE SCHOOL
// -----------------------------------------

export const deleteSchool = async (id: string) => {
  const response = await fetch("/api/admin/school/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      deleteId: id,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};
