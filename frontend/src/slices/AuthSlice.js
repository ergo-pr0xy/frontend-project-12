/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { username: localStorage.getItem('user'), token: localStorage.getItem('token') },
  reducers: {
    authUser: (state, action) => {
      const { username, token } = action.payload;
      localStorage.setItem('user', username);
      localStorage.setItem('token', token);
      state.username = username;
      state.token = token;
    },
  },
});

export const { authUser } = AuthSlice.actions;

export default AuthSlice.reducer;
