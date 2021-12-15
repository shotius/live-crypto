import { CryptoCoin } from './../../redux/types';
import axios from 'axios';

const getCryptoCoins = async () => {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false';
  const { data } = await axios.get(url);

  return data as CryptoCoin[];
};

const cryptoServices = {
  getCryptoCoins,
};
export default cryptoServices;
