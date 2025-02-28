import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegisterState {
  username: string;
  password: string;
  mail: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
  adress: string;
  country: string
  message: string;
}

const initialState: RegisterState = {
  username: '',
  password: '',
  mail: '',
  birthDate: '',
  gender: '',
  phoneNumber: '',
  adress: '',
  country: '',
  message: ''
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
        state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
        state.password = action.payload;
    },
    setMail: (state, action: PayloadAction<string>) => {
        state.mail = action.payload;
    },
    setBirthDate: (state, action: PayloadAction<string>) => {
        state.birthDate = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
        state.gender = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setAdress: (state, action: PayloadAction<string>) => {
      state.adress = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
        state.message = action.payload;
    },
  },
});

export const { 
  setUsername,
  setPassword,
  setMail,
  setBirthDate,
  setGender,
  setPhoneNumber,
  setAdress,
  setCountry,
  setMessage
  } = registerSlice.actions;
export default registerSlice.reducer;
