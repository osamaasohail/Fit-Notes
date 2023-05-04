import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
export const signin = createAsyncThunk(
  "signin",
  async (data) => {
    try {
      const res = await client.post("login", data);
      return { status: res.status, data: res.data };
    } catch (error) {
      console.log(error);
      return {
        message: error.response.data.message,
        status: error.response.status,
      };
    }
  }
);
