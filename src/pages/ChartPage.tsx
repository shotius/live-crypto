import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CointainerInner } from '../components/molecules/containers/CointainerInner';
import { CoverImage } from '../components/molecules/covers/CoverImage';
import { ChartPriceBig } from '../components/organizms/charts/ChartPriceBig';
import { useAppDispatch, useAppSelector } from '../redux/app/hook';
import { getSingleCoinInfo } from '../redux/features/cryptoSlice';

interface ChartPageProps {}

export const ChartPage: React.FC<ChartPageProps> = ({}) => {
  const { cryptoCoins } = useAppSelector((state) => state.coins);
  const { coinId } = useParams<{ coinId: string }>();
  const [selectedCoin, setSelectedCoin] = useState();
  const { fetchingSingleCoin } = useAppSelector((state) => state.coins);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!cryptoCoins.length && coinId) {
      dispatch(getSingleCoinInfo(coinId))
        .unwrap()
        .then((data: any) => setSelectedCoin(data));
    }
  }, []);

  if (fetchingSingleCoin) {
    return <>...loading</>;
  }
  if (!selectedCoin) {
    return <>Coin not found</>;
  }

  console.log(selectedCoin);

  return (
    <>
      <CoverImage
        image="https://wallpaperbat.com/img/641683-bitcoin-cryptocurrency-4k-wallpaper-mocah-hd-wallpaper.jpg"
        variant="medium"
      />
      <CointainerInner>
        <ChartPriceBig coin={selectedCoin} />
      </CointainerInner>
    </>
  );
};
