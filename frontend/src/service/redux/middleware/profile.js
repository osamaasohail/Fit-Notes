import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
import { toast } from "react-toastify";

export const editBasicInfoThunk = createAsyncThunk(
  "basicInfo",
  async (data) => {
    try {
      const res = await client.put(`business-license/${data?.userId}`, data);
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

export const editLicenseInfoThunk = createAsyncThunk(
  "licenseInfo",
  async (data) => {
    try {
      const res = await client.put(`business-license/${data?.licenseId}`, data);
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

export const editGamingLicenseInfo = createAsyncThunk(
  "gamingLicenseInfo",
  async (data) => {
    try {
      const res = await client.put(`gaming-licence/${data?.licenseId}`, data);
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
export const addNewDutyManagerInfo = createAsyncThunk(
  "addNewDutyManagerInfo",
  async (data) => {
    try {
      const res = await client.post(`/cert/${data.certId}/duty-manager`, data);
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
export const updateDutyManagerInfo = createAsyncThunk(
  "updateDutyManagerInfo",
  async (data) => {
    try {
      const res = await client.put(
        `cert/${data.certId}}/duty-manager/${data.dutyManagerId}`,
        data
      );
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
export const deleteDutyManagerInfo = createAsyncThunk(
  "deleteDutyManagerInfo",
  async (data) => {
    try {
      const res = await client.delete(
        `cert/${data.certId}/duty-manager/${data.dutyManagerId}`,
        data
      );
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
