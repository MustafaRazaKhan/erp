"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  handleTransportChange,
  setLoading,
  setSuccess,
  setTransportList,
} from "../store/transport.slice";

import {
  getTransportList,
  createTransport,
} from "../services/transport.service";

import { showToastError, showToastSuccess } from "@/utils/Toast";

import type { TransportType } from "../store/transport.types";

const useTransport = () => {
  const dispatch = useAppDispatch();

  // -----------------------------------------
  // GET TRANSPORT STATE
  // -----------------------------------------

  const { transportObj, transportList, loading } = useAppSelector(
    (state: any) => state.transport,
  );

  // -----------------------------------------
  // HANDLE TRANSPORT INPUT
  // -----------------------------------------

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    dispatch(
      handleTransportChange({
        name: name as keyof TransportType,

        value:
          type === "number" ? (value === "" ? null : Number(value)) : value,
      }),
    );
  };

  // -----------------------------------------
  // GET TRANSPORT LIST
  // -----------------------------------------

  const transportListData = async () => {
    try {
      dispatch(setLoading());

      const data: any = await getTransportList();

      dispatch(setTransportList(data.data));
    } catch (error) {
      console.error("Transport list error:", error);

      dispatch(setSuccess());
    }
  };

  // -----------------------------------------
  // CREATE TRANSPORT
  // -----------------------------------------

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(setLoading());

      const data: any = await createTransport(transportObj);

      if (data.success) {
        showToastSuccess(data.message);
      } else {
        showToastError(data.message);
      }

      dispatch(setSuccess());
    } catch (error) {
      console.error("Create transport error:", error);

      dispatch(setSuccess());

      showToastError(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  };

  return {
    transportObj,
    transportList,
    loading,

    onChange,
    handleSubmit,
    transportListData,
  };
};

export default useTransport;
