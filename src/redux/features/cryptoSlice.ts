import { CryptoCoin, IGetSingleCar } from './../types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CrypotoState } from '../types';
import cryptoServices from '../../utils/services/cryptoServices';

const initialState: CrypotoState = {
  cryptoCoins: [],
  fetchingCryptoCoins: false,
  fetchingSingleCoin: false,
};

/**
 * Function fetches 4 different coin infos
 * @returns coins
 */
export const getCryptoCoins = createAsyncThunk(
  'crypto/getCryptoCoins',
  async (_, { rejectWithValue }) => {
    try {
      return await cryptoServices.getCryptoCoins();
    } catch (error) {
      return rejectWithValue('could not get Crypto values' + error);
    }
  }
);

/**
 * @param {IGetSingleCar}
 * @returns {CryptoCoin | string}
 */
export const getChartData = createAsyncThunk<
  number[],
  IGetSingleCar,
  { rejectValue: string }
>('crypto/getChartData', async (props, { rejectWithValue }) => {
  try {
    const result = await cryptoServices.getCharData(props);
    const rowPrices = result.prices;
    if (rowPrices && Array.isArray(rowPrices)) {
      const prices = rowPrices.map((row) => row[1]);
      return prices;
    }
    return [];
  } catch (error) {
    return rejectWithValue('Could not get Single Coin info');
  }
});

/**
 * @param {IGetSingleCar}
 * @returns {CryptoCoin | string}
 */
export const getSingleCoinInfo = createAsyncThunk(
  'crypto/getSingleCoinInfo',
  async (id: string, { rejectWithValue }) => {
    try {
      return await cryptoServices.getSingleCoinInfo(id);
    } catch (error) {
      return rejectWithValue('Could not get Single Coin info');
    }
  }
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // -- Multiple coins
    builder.addCase(getCryptoCoins.pending, (state) => {
      state.fetchingCryptoCoins = true;
    });
    builder.addCase(getCryptoCoins.fulfilled, (state, action) => {
      state.fetchingCryptoCoins = false;
    });
    builder.addCase(getCryptoCoins.rejected, (state, action) => {
      state.fetchingCryptoCoins = false;
    });

    // -- Single Coin
    builder.addCase(getSingleCoinInfo.pending, (state) => {
      state.fetchingSingleCoin = true;
    });
    builder.addCase(getSingleCoinInfo.fulfilled, (state) => {
      state.fetchingSingleCoin = false;
    });
    builder.addCase(getSingleCoinInfo.rejected, (state) => {
      state.fetchingSingleCoin = false;
    });
  },
});

export const {} = cryptoSlice.actions;
export default cryptoSlice.reducer;
