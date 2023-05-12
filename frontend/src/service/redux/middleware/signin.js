import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
import { toast } from 'react-toastify';

export const signin = createAsyncThunk(
  "signin",
  async (data) => {
    try {
      const res = await client.post("login", data);
      localStorage.setItem("token", res.data.token)
      return { status: res.status, data: res.data };
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
      return {
        message: error.response.data.message,
        status: error.response.status,
      };
    }
  }
);
