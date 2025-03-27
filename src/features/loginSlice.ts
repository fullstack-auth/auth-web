import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  username: string;
  password: string;
  message: string;
}

const initialState: LoginState = {
  username: '',
  password: '',
  message: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setUsername, setPassword, setMessage } = loginSlice.actions;
export default loginSlice.reducer;
