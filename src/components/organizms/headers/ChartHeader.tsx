import React from 'react';
import { useAppSelector } from '../../../redux/app/hook';
import './styles.scss';

interface CartHeaderProps {
  coin: any;
}

export const ChartHeader: React.FC<CartHeaderProps> = ({ coin }) => {
  const {selectedCurrency} = useAppSelector(state => state.coins)
  return (
    <table className="chart_table">
      <tbody>
        <tr>
          <th>Market cap</th>
          <th>Volume (24h)</th>
          <th>Price Change(24h)</th>
          <th>Current Price</th>
        </tr>
        <tr>
          <td>{selectedCurrency.toUpperCase()} {coin['market_data']['market_cap']['usd']}</td>
          <td>{selectedCurrency.toUpperCase()} {coin['market_data']['total_volume']['usd']}</td>
          <td>{selectedCurrency.toUpperCase()} {coin['market_data']['price_change_24h']}</td>
          <td>{selectedCurrency.toUpperCase()} {coin['market_data']['current_price']['usd']}</td>
        </tr>
      </tbody>
    </table>
  );
};
