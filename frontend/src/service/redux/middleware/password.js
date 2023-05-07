import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (data) => {
    try {
      const res = await client.post("forgot-password", data);
      return { status: res.status, data: res.data };
      
    } catch (error) {
      console.log(error);
      return {
        message: error.response.data.error,
        status: error.response.status,
      };
    }
  }
);
export const resetPassword = createAsyncThunk(
  "resetPassword",
  async (data) => {
    try {
      const res = await client.post("reset-password", data);
      return { status: res.status, data: res.data };
      
    } catch (error) {
      console.log(error);
      return {
        message: error.response.data.error,
        status: error.response.status,
      };
    }
  }
);
