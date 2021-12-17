import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/app/hook';
import {
  getSingleCoinInfo,
  getChartData,
} from '../../redux/features/cryptoSlice';
import { ICurrency, IDateRange } from '../../redux/types';
import { hours, weekdays, monthDays, Days } from '../../utils/constants';
import { getDaysArray } from '../../utils/functions/getDaysArray';
import { CointainerInner } from '../molecules/containers/CointainerInner';
import { CoverImage } from '../molecules/covers/CoverImage';
import { HorizontalScrollable } from '../molecules/wrappers/HorizontalScrollable';
import { ButtonGroup } from '../organizms/charts/buttons/ButtonGroup';
import { ChartPriceBig } from '../organizms/charts/ChartPriceBig';
import './styles.scss';

interface ChartPageProps {}

export const ChartPage: React.FC<ChartPageProps> = ({}) => {
  const [selectedCoin, setSelectedCoin] = useState<any>();
  const [prices, setPrices] = useState<number[]>([]);

  const { cryptoCoins, selectedDateRange, selectedCurrency } = useAppSelector(
    (state) => state.coins
  );
  const { coinId } = useParams<{ coinId: string }>();

  const dispatch = useAppDispatch();

  const days = (days: number) => {
    console.log(days);
    const today = new Date();
    const priorDate = new Date(new Date().setDate(today.getDate() - days));
    return getDaysArray(priorDate, today);
  };

  const labels =
    selectedDateRange === 'DAY' ? hours : days(Days[selectedDateRange]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: prices,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  // On the firest load get Crypto coin info
  useEffect(() => {
    if (!cryptoCoins.length && coinId) {
      dispatch(getSingleCoinInfo(coinId))
        .unwrap()
        .then((data: any) => setSelectedCoin(data));
    }
  }, []);

  // Get new price whenever date range changes
  useEffect(() => {
    console.log('here');
    if (selectedCoin) {
      dispatch(
        getChartData({
          id: selectedCoin.id,
          currency: selectedCurrency, 
          days: Days[selectedDateRange],
          interval: selectedDateRange === 'DAY' ? 'hourly' : 'daily',
        })
      )
        .unwrap()
        .then((data) => setPrices(data))
        .catch((error) => console.log(error));
    }
  }, [selectedDateRange, selectedCoin, selectedCurrency]);

  if (!selectedCoin) {
    return <>Coin not found</>;
  }

  return (
    <>
      <CoverImage
        image="https://wallpaperbat.com/img/641683-bitcoin-cryptocurrency-4k-wallpaper-mocah-hd-wallpaper.jpg"
        variant="medium"
      />
      <CointainerInner>
        <ButtonGroup coin={selectedCoin} />
      </CointainerInner>
      <HorizontalScrollable>
        <CointainerInner>
          <ChartPriceBig
            range={selectedDateRange}
            coin={selectedCoin}
            data={data}
          />
        </CointainerInner>
      </HorizontalScrollable>
    </>
  );
};
