import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";

export const addDutyManagerThunk = createAsyncThunk(
    "addDutyManager",
    async (data) => {
      try {
        const res = await client.post(`cert/${data?.certId}/duty-manager`, data);
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

export const updateSingleManager = createAsyncThunk(
    "updateSingleManager",
    async (data) => {
      try {
        const res = await client.put(`cert/${data?.certId}/duty-manager/${data.dutyManagerId}`, data);
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