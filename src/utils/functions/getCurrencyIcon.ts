import { ICurrency } from './../../redux/types';

export const getCurrencyIcon = (currency: ICurrency)=> {
  switch(currency) {
    case "eur": return "€"
    case "usd": return "$"
  }
}