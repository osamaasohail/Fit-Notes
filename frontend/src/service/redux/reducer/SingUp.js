import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postSignUp } from '../middleware/postSignUp';
const initialState = {
    loading: false,
    error: '',
    signUpData: [],
  };
const singUpSlice=createSlice({
    name:"postSignUp",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(postSignUp.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(
            postSignUp.fulfilled,
            (state, action) => {
              state.loading = false;
      
              state.signUpData = action.payload;
            }
          );
    }


})
export default singUpSlice.reducer;