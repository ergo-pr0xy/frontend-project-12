/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const authUser = createAsyncThunk(
  'auth/authUser',
  async ({ username, password }) => {
    const response = await axios.post('/api/v1/login', { username, password });
    console.log(response);
    return response;
  },
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, status: null },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.rejected, (state) => {
        state.status = 'unauthorized';
      })
      .addCase(authUser.fulfilled, (state, action) => {
        const { username, token } = action.payload.data;
        state.user = username;
        state.token = token;
        state.status = 'authorized';
      });
  },
});

export default AuthSlice.reducer;
