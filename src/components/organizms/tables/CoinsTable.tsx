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
          <th className="t_heading--500">Coin</th>
          <th className="t_heading--500">7 day graph</th>
          <th className="t_heading--500">Price</th>
          <th className="t_heading--500">24h</th>
          <th className="t_heading--500">market cap</th>
        </tr>
        {coins.map((coin) => (
          <tr
            key={coin.id}
            className="t_paragraph--200"
            onClick={() => navigate(`/live/${coin.id}`)}
          >
            <td className="-d-flex -align-center text__crypto-table--id">
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
