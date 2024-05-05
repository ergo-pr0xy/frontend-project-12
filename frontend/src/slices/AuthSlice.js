/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const setErrorMessage = (error) => {
  switch (error) {
    case 'ERR_BAD_REQUEST':
      return 'Неверные имя пользователя или пароль';
    case 'ERR_NETWORK':
      return 'Ошибка сети';
    default:
      return 'Неопознанная ошибка';
  }
};

export const authUser = createAsyncThunk(
  'auth/authUser',
  async ({ username, password }) => {
    const response = await axios.post('/api/v1/login', { username, password });
    return response;
  },
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, errorMessage: '' },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.rejected, (state, action) => {
        const { code: errorCode } = action.error;
        state.errorMessage = setErrorMessage(errorCode);
      })
      .addCase(authUser.fulfilled, (state, action) => {
        console.log(action);
        const { username, token } = action.payload.data;
        state.user = username;
        state.token = token;
        state.errorMessage = '';
      });
  },
});

export default AuthSlice.reducer;
