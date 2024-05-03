import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const authUser = createAsyncThunk(
  'auth/authUser',
  async ({ username, password }) => {
    const response = await axios.post('/api/v1/login', { username, password });
    return response.data;
  },
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.fulfilled, (state, action) => {
        const { username, token } = action.payload;
        state.user = username;
        state.token = token;
      })
  } 
});

export default AuthSlice.reducer;
