import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginUser,
  setAuthHeader,
  signUp,
} from 'components/Service/ApiService';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const responce = await signUp(credentials);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logining = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const responce = await loginUser(credentials);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
