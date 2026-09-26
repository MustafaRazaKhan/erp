"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { toast } from "react-toastify";

import {
  handleChange,
  handleFileChange,
  setLoading,
  setSuccess,
  setSchool,
} from "../store/school.slice";

import {
  createSchool,
  getSchoolList,
  deleteSchool,
} from "../services/school.service";
import { SchoolState } from "../store/school.types";
import { useState } from "react";

const useSchool = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  // -----------------------------------------
  // GET SCHOOL STATE
  // -----------------------------------------

  const { schoolObj, schoolList, loading } = useAppSelector(
    (state: any) => state.school,
  );

  // -----------------------------------------
  // HANDLE TEXT INPUT
  // -----------------------------------------

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    dispatch(
      handleChange({
        name: name as keyof SchoolState["schoolObj"],
        value,
      }),
    );
  };

  // -----------------------------------------
  // HANDLE FILE INPUT
  // -----------------------------------------

  const onFileChange = (e: any) => {
    console.log(e.target.files[0]);
    setPhoto(e.target.files?.[0] || null);
  };

  // -----------------------------------------
  // CREATE SCHOOL
  // -----------------------------------------

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(setLoading());

      const formData = new FormData();

      formData.append("name", schoolObj.name);

      formData.append("code", schoolObj.code);

      formData.append("contact", schoolObj.contact);

      formData.append("email", schoolObj.email);

      formData.append("address", schoolObj.address);

      // -----------------------------------------
      // ADD IMAGE
      // -----------------------------------------

      if (photo) {
        formData.append("photo", photo);
      }

      const data = await createSchool(formData);
      // console.log(schoolObj);

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

      dispatch(setSuccess());
    } catch (error) {
      console.error("Create school error:", error);

      dispatch(setSuccess());

      toast.error("Something went wrong");
    }
  };

  // -----------------------------------------
  // GET SCHOOL LIST
  // -----------------------------------------

  const getAllSchools = async () => {
    try {
      dispatch(setLoading());

      const data: any = await getSchoolList();

      dispatch(setSchool(data.data));
    } catch (error) {
      console.error("School list error:", error);

      dispatch(setSuccess());
    }
  };

  // -----------------------------------------
  // DELETE SCHOOL
  // -----------------------------------------

  const handleDelete = async (id: string) => {
    if (!id) return;

    try {
      await deleteSchool(id);

      toast.success("School deleted successfully.");

      // Refresh school list
      await getAllSchools();
    } catch (error) {
      console.error("Delete school error:", error);

      toast.error(
        error instanceof Error ? error.message : "Failed to delete school.",
      );
    }
  };

  return {
    schoolObj,
    schoolList,
    loading,

    onChange,
    onFileChange,

    handleSubmit,
    getAllSchools,
    handleDelete,
    photo,
  };
};

export default useSchool;
