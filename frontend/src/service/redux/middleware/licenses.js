import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
export const individualLicense = createAsyncThunk(
  "individualLicense",
  async (data) => {
    try {
      const res = await client.post("individual-license", data);
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

export const businessLicense = createAsyncThunk(
  "businessLicense",
  async (data) => {
    try {
      const res = await client.post("business-license", data);
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

export const getBusinessLicense = createAsyncThunk(
  "getBusinessLicense",
  async (data) => {
    try {
      const res = await client.get("business-license", data);
      console.log("Get license is called", res.data);
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

export const getIndividualLicense = createAsyncThunk(
  "getIndividualLicense",
  async (data) => {
    try {
      const res = await client.get("individual-license", data);
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
