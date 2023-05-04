import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser } from '../middleware/getUser';
const initialState = {
    loading: false,
    error: '',
    userData: [],
  };
const singUpSlice=createSlice({
    name:"getUser",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(
          getUser.fulfilled,
            (state, action) => {
              state.loading = false;
      
              state.userData = action.payload;
            }
          );
          builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error || "something wrong";
          });
    }


})
export default singUpSlice.reducer;