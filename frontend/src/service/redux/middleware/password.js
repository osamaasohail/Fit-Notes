import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
import { toast } from "react-toastify";

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (data) => {
    try {
      const res = await client.post("forgot-password", data);
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
export const resetPassword = createAsyncThunk("resetPassword", async (data) => {
  try {
    const res = await client.get(`reset-password?token=${data.token}`, data);
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
});
export const changePassword = createAsyncThunk(
  "changePassword",
  async (data) => {
    try {
      const res = await client.post("change-password", data);
      console.log("Change password response", res);
      return { status: res.status, data: res.data };
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
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
