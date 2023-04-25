import { createAsyncThunk } from "@reduxjs/toolkit";
export const postSignUp = createAsyncThunk("postSignUp", async () => {
  console.log("i am signup data");
  const data = "123";
  return data;
});
