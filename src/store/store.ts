// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginSlice';
import registerReducer from '../features/registerSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
