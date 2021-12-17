import React from 'react';
import { HeadingPrimary } from '../../molecules/Headings/HeadingPrimary';
import './styles.scss';

interface CartHeaderProps {
  coin: any;
}

export const ChartHeader: React.FC<CartHeaderProps> = ({ coin }) => {
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
          <td>USD {coin['market_data']['market_cap']['usd']}</td>
          <td>USD {coin['market_data']['total_volume']['usd']}</td>
          <td>USD {coin['market_data']['price_change_24h']}</td>
          <td>USd {coin['market_data']['current_price']['usd']}</td>
        </tr>
      </tbody>
    </table>
  );
};
