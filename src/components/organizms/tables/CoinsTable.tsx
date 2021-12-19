import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CryptoCoin } from '../../../redux/types';
import './styles.scss';

interface CoinsTableProps {
  coins: CryptoCoin[];
}

export const CoinsTable: React.FC<CoinsTableProps> = ({ coins }) => {
  const navigate = useNavigate();

  return (
    <table className="coins_table">
      <tbody>
        <tr>
          <th className='roboto-heading'>Coin</th>
          <th className='roboto-heading'>7 day graph</th>
          <th className='roboto-heading'>Price</th>
          <th className='roboto-heading'>24h</th>
          <th className='roboto-heading'>market cap</th>
        </tr>
        {coins.map((coin) => (
          <tr
            key={coin.id}
            className="roboto-text"
            onClick={() => navigate(`/live/${coin.id}`)}
          >
            <td
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <img src={coin.image} width="35px" />
              {coin.name}
            </td>
            <td>some graph</td>
            <td>USD {coin.current_price}</td>
            <td>{coin.price_change_percentage_24h}%</td>
            <td>USD {coin.market_cap}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
