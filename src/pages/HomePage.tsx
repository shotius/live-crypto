import React from 'react';
import { container, cryptoList, cryptoItem } from './styles.module.scss';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div>
      <div className={container}></div>
      <div className="innerContainer">
        <ul className={cryptoList}>
          <li className={cryptoItem}>bitcoin</li>
          <li className={cryptoItem}>Ethereum</li>
          <li className={cryptoItem}>Binance Coin</li>
          <li className={cryptoItem}>Tether</li>
        </ul>
      </div>
    </div>
  );
};
