import { configureStore } from '@reduxjs/toolkit';
import cryptoSlice from '../features/cryptoSlice';

const reducer = {
  coins: cryptoSlice,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
