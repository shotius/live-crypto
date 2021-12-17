import { CryptoCoin, IGetSingleCar } from './../../redux/types';
import axios from 'axios';

const getCryptoCoins = async () => {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false';
  const { data } = await axios.get(url);

  return data as CryptoCoin[];
};

/**
 *
 * @param id - name of the crypto coin
 * @param currency
 * @param days
 * @param interval
 * @returns {IGetSingleCar}: single coin info
 */
const getCharData = async ({
  id,
  currency = 'usd',
  days = 7,
  interval = 'daily',
}: IGetSingleCar) => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`;
  const { data } = await axios.get(url);
  return data
};

const getSingleCoinInfo = async (id: string) => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`;
  const { data } = await axios.get(url);
  return data;
};

const cryptoServices = {
  getCryptoCoins,
  getCharData,
  getSingleCoinInfo,
};
export default cryptoServices;
