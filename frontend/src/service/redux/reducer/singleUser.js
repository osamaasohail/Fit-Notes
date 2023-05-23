import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSingleUser } from '../middleware/getSingleUser';
const initialState = {
    loading: false,
    error: '',
    signInData: [],
  };
const singUpSlice=createSlice({
    name:"signIn",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getSingleUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(
          getSingleUser.fulfilled,
            (state, action) => {
              state.loading = false;
              state.signInData = action.payload;
            }
          );
          builder.addCase(getSingleUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error || "something wrong";
          });
    }


})
export default singUpSlice.reducer;