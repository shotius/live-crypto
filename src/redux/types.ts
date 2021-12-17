import { Line } from "react-chartjs-2";

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

  selectedCurrency: ICurrency;
  selectedDateRange: IDateRange; 
  priciesData: number[], 
  savedPrices: number[]
}

export interface IGetSingleCar {
  id: string;
  currency?: string;
  days?: number;
  interval?: 'daily' | 'minutely' | 'hourly';
}


export type IDateRange = 'MONTH' | 'WEEK' | 'DAY';

export type ICurrency = 'usd' | 'eur'


export type ChartLineProps = React.ComponentProps<typeof Line>;
export type ChartOptions = ChartLineProps['options'];
export type ChartData = ChartLineProps['data'];