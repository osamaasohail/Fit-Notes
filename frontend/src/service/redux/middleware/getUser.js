import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../client";
export const getUser = createAsyncThunk(
  "getUser",
  async (data) => {
  
console.log("i am the info",data)
    try {
      const res = await client.get("users");
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
