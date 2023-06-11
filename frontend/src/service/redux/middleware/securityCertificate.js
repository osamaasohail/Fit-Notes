import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
import { toast } from "react-toastify";

export const addSecurityCertificateThunk = createAsyncThunk(
  "addSecurityCertificate",
  async (data) => {
    try {
      const res = await client.post(`cert/${data?.certId}/security-certificate`, data);
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

export const updateSecurityCertificate = createAsyncThunk(
  "updateSecurityCertificate",
  async (data) => {
    try {
      const res = await client.put(
        `cert/${data?.certId}/security-certificate/${data.securityCertificateId}`,
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
export const deleteSecurityCertificate = createAsyncThunk(
  "deleteSecurityCertificate",
  async (data) => {
    try {
      const res = await client.delete(
        `cert/${data?.certId}/security-certificate/${data.securityCertificateId}`
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
