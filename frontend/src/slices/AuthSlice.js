/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const setErrorMessage = (e) => {
//   const { code: error } = e.error;
//   switch (error) {
//     case 'ERR_BAD_REQUEST':
//       return 'error';
//     default:
//       return 'error';
//   }
// };

export const authUser = createAsyncThunk(
  'auth/authUser',
  async ({ username, password }) => {
    const response = await axios.post('/api/v1/login', { username, password });
    return response;
  },
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        console.log(action);
        const { username, token } = action.payload.data;
        state.user = username;
        state.token = token;
        state.error = null;
      });
  },
});

export default AuthSlice.reducer;
