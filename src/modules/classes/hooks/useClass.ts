"use client";

import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  handleChange,
  setLoading,
  setSuccess,
  setClassList,
  setStudentList,
  resetClass,
} from "../store/class.slice";

import {
  createClass,
  getClassList,
  updateClass,
  getStudentListClassWise,
} from "../services/class.service";

import type { ClassState } from "../store/class.types";

const useClass = () => {
  const dispatch = useAppDispatch();

  //   const { closeModal } = useModal();

  const { classObj, classList, studentList, loading } = useAppSelector(
    (state: any) => state.classes,
  );

  // ---------------------------------------------
  // HANDLE FORM CHANGE
  // ---------------------------------------------

  const handleClassChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    dispatch(
      handleChange({
        name: name as keyof ClassState["classObj"],
        value: name === "no" ? Number(value) : value,
      }),
    );
  };

  // ---------------------------------------------
  // CREATE CLASS
  // ---------------------------------------------

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(setLoading());

      const data: any = await createClass(classObj);

      if (data.success) {
        toast.success(data.message);

        dispatch(setSuccess());
        dispatch(resetClass());

        await getAllClasses();
      }
    } catch (error) {
      console.error(error);

      dispatch(setSuccess());

      toast.error("Something went wrong");
    }
  };

  // ---------------------------------------------
  // GET CLASS LIST
  // ---------------------------------------------

  const getAllClasses = async () => {
    try {
      dispatch(setLoading());

      const data: any = await getClassList();
      // console.log(data);

      if (data.success) {
        dispatch(setClassList(data.data));
      }

      dispatch(setSuccess());
    } catch (error) {
      console.error(error);

      dispatch(setSuccess());

      toast.error("Unable to load class list");
    }
  };

  // ---------------------------------------------
  // UPDATE CLASS
  // ---------------------------------------------

  const handleUpdate = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string,
  ) => {
    e.preventDefault();

    try {
      dispatch(setLoading());

      const data: any = await updateClass(id, classObj);

      if (data.success) {
        toast.success(data.message);

        // closeModal();

        dispatch(setSuccess());

        await getAllClasses();
      } else {
        dispatch(setSuccess());

        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);

      dispatch(setSuccess());

      toast.error("Something went wrong");
    }
  };

  // ---------------------------------------------
  // VIEW STUDENTS CLASS WISE
  // ---------------------------------------------

  const viewStudentListClassWise = async (id: string) => {
    try {
      dispatch(setLoading());

      const data: any = await getStudentListClassWise(id);

      if (data.success) {
        dispatch(setStudentList(data.students));
      }

      dispatch(setSuccess());
    } catch (error) {
      console.error(error);

      dispatch(setSuccess());

      toast.error("Unable to load students");
    }
  };

  return {
    classObj,
    classList,
    studentList,
    loading,

    handleClassChange,
    handleSubmit,
    getAllClasses,
    handleUpdate,
    viewStudentListClassWise,
  };
};

export default useClass;
