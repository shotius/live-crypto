import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../redux/app/hook';
import { getCryptoCoins } from '../redux/features/cryptoSlice';
import { CryptoCoin } from '../redux/types';
import { container, cryptoTable } from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { HorizontalScrollable } from '../components/molecules/wrappers/HorizontalScrollable';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const [coins, setCoins] = useState<CryptoCoin[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCryptoCoins())
      .unwrap()
      .then((data) => setCoins(data));
  }, []);

  return (
    <div>
      <div className={container}></div>
      <HorizontalScrollable>
        <div className="innerContainer">
          <table className={cryptoTable}>
            <tbody>
              <th>Coin</th>
              <th>7 day graph</th>
              <th>Price</th>
              <th>24h</th>
              <th>market cap</th>
            </tbody>
            <tbody>
              {coins.map((coin) => (
                <tr key={coin.id} onClick={() => navigate(`/live/${coin.id}`)}>
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
        </div>
      </HorizontalScrollable>
    </div>
  );
};
