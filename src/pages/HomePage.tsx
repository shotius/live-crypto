import React from 'react';
import { container, cryptoTable } from './styles.module.scss';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div>
      <div className={container}></div>
      <div className="innerContainer">
        <table className={cryptoTable}>
          <tr>
            <th>Coin</th>
            <th>7 day graph</th>
            <th>Price</th>
            <th>24h</th>
            <th>market cap</th>
          </tr>
          <tbody>
            <tr>
              <td>Bitcoin</td>
              <td>some graph</td>
              <td>Usd 4723442</td>
              <td>-3.15%</td>
              <td>usd 234234,.234.234</td>
            </tr>
            <tr>
              <td>Bitcoin</td>
              <td>some graph</td>
              <td>Usd 4723442</td>
              <td>-3.15%</td>
              <td>usd 234234,.234.234</td>
            </tr>
            <tr>
              <td>Bitcoin</td>
              <td>some graph</td>
              <td>Usd 4723442</td>
              <td>-3.15%</td>
              <td>usd 234234,.234.234</td>
            </tr>
            <tr>
              <td>Bitcoin</td>
              <td>some graph</td>
              <td>Usd 4723442</td>
              <td>-3.15%</td>
              <td>usd 234234,.234.234</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
