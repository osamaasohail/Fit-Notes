import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
import { toast } from "react-toastify";

export const addDutyManagerThunk = createAsyncThunk(
  "addDutyManager",
  async (data) => {
    try {
      const res = await client.post(`cert/${data?.certId}/duty-manager`, data);
      return { status: res.status, data: res.data };
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Session Expired");
        localStorage.clear();
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
      return {
        message: error.response.data.error,
        status: error.response.status,
      };
    }
  }
);

export const updateSingleManager = createAsyncThunk(
  "updateSingleManager",
  async (data) => {
    try {
      const res = await client.put(
        `cert/${data?.certId}/duty-manager/${data.dutyManagerId}`,
        data
      );
      return { status: res.status, data: res.data };
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Session Expired");
        localStorage.clear();
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
      return {
        message: error.response.data.error,
        status: error.response.status,
      };
    }
  }
);
export const deleteSingleManager = createAsyncThunk(
  "deleteSingleManager",
  async (data) => {
    try {
      const res = await client.delete(
        `cert/${data?.certId}/duty-manager/${data.dutyManagerId}`
      );
      return { status: res.status, data: res.data };
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Session Expired");
        localStorage.clear();
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
      return {
        message: error.response.data.error,
        status: error.response.status,
      };
    }
  }
);
