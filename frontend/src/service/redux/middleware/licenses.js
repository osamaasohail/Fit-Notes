import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
import { toast } from "react-toastify";

export const individualLicense = createAsyncThunk(
  "individualLicense",
  async (data) => {
    try {
      const res = await client.post("individual-license", data);
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

export const businessLicense = createAsyncThunk(
  "businessLicense",
  async (data) => {
    try {
      const res = await client.post("business-license", data);
      // console.log("response is",res)
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

export const getBusinessLicense = createAsyncThunk(
  "getBusinessLicense",
  async (data) => {
    try {
      const res = await client.get("business-license", data);
      console.log("Get license is called", res.data);
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

export const getIndividualLicense = createAsyncThunk(
  "getIndividualLicense",
  async (data) => {
    try {
      const res = await client.get("individual-license", data);
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
export const deleteGamingLicense = createAsyncThunk(
  "deleteGamingLicense",
  async (data) => {
    try {
      const res = await client.delete(
        `/business-license/${data?.businessId}/gamingLicense`,
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
export const addGamingLicenseThunk = createAsyncThunk(
  "addGamingLicense",
  async (data) => {
    try {
      const res = await client.post(
        `/business-license/${data?.businessId}/gamingLicense`,
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
