import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cryptoServices from '../../utils/services/cryptoServices';
import { CrypotoState } from '../types';

const initialState: CrypotoState = {
  cryptoCoins: [],
  fetchingCryptoCoins: false
};

export const getCryptoCoins = createAsyncThunk(
  'crypto/getCryptoCoins',
  async (_, {rejectWithValue}) => {
    try {
      return await cryptoServices.getCryptoCoins();
    } catch (error) {
      return rejectWithValue('could not get Crypto values'+ error)
    }
  }
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCryptoCoins.pending, (state) => {
      state.fetchingCryptoCoins = true
    });
    builder.addCase(getCryptoCoins.fulfilled, (state, action) => {
      state.fetchingCryptoCoins = false
    })
    builder.addCase(getCryptoCoins.rejected, (state, action) => {
      state.fetchingCryptoCoins = false
    })
  }
});

export const {} = cryptoSlice.actions;
export default cryptoSlice.reducer;
