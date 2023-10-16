import { createSlice } from '@reduxjs/toolkit';
import { logining, register } from './operatoins';

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
    builder
      .addCase(register.fulfilled, (state, action) => {
        return console.log(action);
        // state.auth.user = action.payload.user;
        // state.auth.token = action.payload.token;
        // state.auth.isLoggedIn = true;
      })
      .addCase(logining.fulfilled, (state, action) => {
        console.log(action);
        // state.user = action.payload.user;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
