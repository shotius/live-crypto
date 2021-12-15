import React from 'react';
import './styles.scss';

interface ChartTableProps {
  coin: any;
}

export const ChartTable: React.FC<ChartTableProps> = ({ coin }) => {
  return (
    <table className="chart_table">
      <tbody>
        <tr>
          <th>Market cap</th>
          <th>Volume (24h)</th>
          <th>Price Change(24h)</th>
          <th>Total Supply</th>
        </tr>
        <tr>
          <td>USD {coin['market_data']['market_cap']['usd']}</td>
          <td>USD {coin['market_data']['total_volume']['usd']}</td>
          <td>USD {coin['market_data']['price_change_24h']}</td>
          <td>USd {coin['market_data']['total_supply']}</td>
        </tr>
      </tbody>
    </table>
  );
};
