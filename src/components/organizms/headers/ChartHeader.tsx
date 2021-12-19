import isEqual from 'lodash.isequal';
import React from 'react';
import { useAppSelector } from '../../../redux/app/hook';
import './styles.scss';

interface CartHeaderProps {
  coin: any;
}

export const ChartHeader: React.FC<CartHeaderProps> = ({ coin }) => {
  const { selectedCurrency: cur } = useAppSelector(
    (state) => state.coins,
    isEqual
  );

  return (
    <table className="chart_table">
      <tbody>
        <tr>
          <th className='roboto-heading'>Market cap</th>
          <th className='roboto-heading'>Volume (24h)</th>
          <th className='roboto-heading'>Price Change(24h)</th>
          <th className='roboto-heading'>Current Price</th>
        </tr>
        <tr className='roboto-text'>
          <td>
            {cur.toUpperCase()} {coin['market_data']['market_cap'][cur]}
          </td>
          <td>
            {cur.toUpperCase()} {coin['market_data']['total_volume'][cur]}
          </td>
          <td>
            {cur.toUpperCase()} {coin['market_data']['price_change_24h']}
          </td>
          <td>
            {cur.toUpperCase()} {coin['market_data']['current_price'][cur]}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
