import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
import { toast } from "react-toastify";

export const getNotificationThunk = createAsyncThunk(
  "getNotifications",
  async (data) => {
    try {
      const res = await client.get(`notification`);
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
