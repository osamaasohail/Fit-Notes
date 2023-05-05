import { createSlice } from "@reduxjs/toolkit";
import { individualLicense, businessLicense, getBusinessLicense } from "../middleware/licenses";
const initialState = {
  loading: false,
  error: "",
  licenses: {},
};
const licensesSlice = createSlice({
  name: "licenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(individualLicense.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(individualLicense.fulfilled, (state, action) => {
      state.loading = false;
      state.licenses = action.payload;
    });
    builder.addCase(individualLicense.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error || "something wrong";
    });


    builder.addCase(individualLicense.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(businessLicense.fulfilled, (state, action) => {
      state.loading = false;
      state.licenses = action.payload;
    });
    builder.addCase(businessLicense.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error || "something wrong";
    });
    builder.addCase(businessLicense.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(individualLicense.pending, (state) => {
      state.loading = true;
    });


    builder.addCase(getBusinessLicense.fulfilled, (state, action) => {
      state.loading = false;
      state.signInData = action.payload;
    });
    builder.addCase(getBusinessLicense.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error || "something wrong";
    });
    builder.addCase(getBusinessLicense.pending, (state) => {
      state.loading = true;
    });
  },
});
export default licensesSlice.reducer;
