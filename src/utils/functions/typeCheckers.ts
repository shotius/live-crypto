import { ICurrency } from './../../redux/types';

export const isCurrency = (cur: unknown): cur is ICurrency => {
  if (cur === 'usd' || cur === 'eur') {
    return true;
  }
  return false;
};
