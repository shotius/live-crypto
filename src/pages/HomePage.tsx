import React from 'react';
import { container, cryptoTable } from './styles.module.scss';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div>
      <div className={container}></div>
      <div className="innerContainer">
        <table className={cryptoTable}>
          <thead>
            <th style={{ textAlign: 'start', padding: '24px' }}>Coin</th>
            <th style={{ textAlign: 'start', padding: '24px' }}>7 day graph</th>
            <th style={{ textAlign: 'start', padding: '24px' }}>Price</th>
            <th style={{ textAlign: 'start', padding: '24px' }}>24h</th>
            <th style={{ textAlign: 'start', padding: '24px' }}>market cap</th>
          </thead>
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
