import { createSlice } from '@reduxjs/toolkit';
import { register } from './operatoins';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducer: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action);
      state.auth.user = action.payload.user;
      state.auth.token = action.payload.token;
      state.auth.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
