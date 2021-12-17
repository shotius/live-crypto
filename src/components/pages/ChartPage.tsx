import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/app/hook';
import {
  getSingleCoinInfo,
  getChartData,
} from '../../redux/features/cryptoSlice';
import { IDateRange } from '../../redux/types';
import { hours, weekdays, monthDays, Days } from '../../utils/constants';
import { CointainerInner } from '../molecules/containers/CointainerInner';
import { CoverImage } from '../molecules/covers/CoverImage';
import { HorizontalScrollable } from '../molecules/wrappers/HorizontalScrollable';
import { ButtonGroup } from '../organizms/charts/buttons/ButtonGroup';
import { ChartPriceBig } from '../organizms/charts/ChartPriceBig';
import './styles.scss';

interface ChartPageProps {}

export const ChartPage: React.FC<ChartPageProps> = ({}) => {
  const [dateRange, setDateRange] = useState<IDateRange>('DAY');
  const [selectedCoin, setSelectedCoin] = useState<any>();
  const [prices, setPrices] = useState<number[]>([]);

  const { cryptoCoins } = useAppSelector((state) => state.coins);
  const { fetchingSingleCoin } = useAppSelector((state) => state.coins);
  const { coinId } = useParams<{ coinId: string }>();
  const dispatch = useAppDispatch();

  const labels =
    dateRange === 'DAY' ? hours : dateRange === 'WEEK' ? weekdays : monthDays;

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
    if (selectedCoin) {
      dispatch(
        getChartData({
          id: selectedCoin.id,
          days: Days[dateRange],
          interval: dateRange === 'DAY' ? 'hourly' : 'daily',
        })
      )
        .unwrap()
        .then((data) => setPrices(data))
        .catch((error) => console.log(error));
    }
  }, [dateRange, selectedCoin]);

  // console.log(prices)
  // if (fetchingSingleCoin) {
  //   return <>...loading</>;
  // }
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
        <ButtonGroup
          dateRange={dateRange}
          setDateRange={setDateRange}
          coin={selectedCoin}
        />
      </CointainerInner>
      <HorizontalScrollable>
        <CointainerInner>
          <ChartPriceBig range={dateRange} coin={selectedCoin} data={data} />
        </CointainerInner>
      </HorizontalScrollable>
    </>
  );
};