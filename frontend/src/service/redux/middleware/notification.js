import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";

export const getNotificationThunk = createAsyncThunk(
    "getNotifications",
    async (data) => {
      try {
        const res = await client.get(`notification`);
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
