import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
export const getSubscription = createAsyncThunk(
  "getSubscription",
  async (data) => {
    try {
      const res = await client.get("subscription");
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
