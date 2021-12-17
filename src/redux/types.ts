export interface CryptoCoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

export interface CrypotoState {
  cryptoCoins: CryptoCoin[];
  fetchingCryptoCoins: boolean;
  fetchingSingleCoin: boolean;
}

export interface IGetSingleCar {
  id: string;
  currency?: string;
  days?: number;
  interval?: 'daily' | 'minutely' | 'hourly';
}


export type IDateRange = 'MONTH' | 'WEEK' | 'DAY';