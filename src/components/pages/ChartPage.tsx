import isEqual from 'lodash.isequal';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/app/hook';
import { getSingleCoinInfo } from '../../redux/features/cryptoSlice';
import { useChartdata } from '../../utils/hooks/useChartData';
import { CointainerInner } from '../molecules/containers/CointainerInner';
import { HomeCover } from '../molecules/covers/HomeCover';
import { CenteredHeading } from '../molecules/headings/CenteredHeading';
import { ButtonGroup } from '../organizms/charts/buttons/ButtonGroup';
import ChartPriceBig from '../organizms/charts/ChartPriceBig';
import ChartHero from '../../assets/chart-hero.jpg';
import './styles.scss';
import { ChartPageCover } from '../molecules/covers/CharPageCover';
import { HorizontalScrollable } from '../molecules/wrappers/HorizontalScrollable';

interface ChartPageProps {}

export const ChartPage: React.FC<ChartPageProps> = ({}) => {
  const [selectedCoin, setSelectedCoin] = useState<any>();

  const { coinId } = useParams<{ coinId: string }>();
  const { getPrices, data } = useChartdata(selectedCoin);

  const {
    cryptoCoins,
    selectedDateRange,
    selectedCurrency,
    fetchingSingleCoin,
  } = useAppSelector((state) => state.coins, isEqual);
  const dispatch = useAppDispatch();

  // -- On the first render get Crypto coin info
  useEffect(() => {
    if (!cryptoCoins.length && coinId) {
      dispatch(getSingleCoinInfo(coinId))
        .unwrap()
        .then((data: any) => setSelectedCoin(data));
    }
  }, []);

  // -- Gettin data in 5 sec interval
  useEffect(() => {
    let id = 0;
    if (selectedCoin && selectedCurrency && selectedDateRange) {
      getPrices();
      id = setInterval(() => {
        getPrices();
      }, 5000);
    }
    return () => clearInterval(id);
  }, [selectedDateRange, selectedCoin, selectedCurrency]);

  // -- If crypto coin is not fetched yet -> spinner
  if (!selectedCoin) {
    return (
      <CenteredHeading>
        {fetchingSingleCoin ? '...loading' : `${coinId} Coin not found`}
      </CenteredHeading>
    );
  }

  return (
    <>
      <ChartPageCover image={ChartHero} />
      <CointainerInner>
        <ButtonGroup coin={selectedCoin} />
      </CointainerInner>
      <HorizontalScrollable>
        <CointainerInner>
          <ChartPriceBig coin={selectedCoin} data={data} />
        </CointainerInner>
      </HorizontalScrollable>
    </>
  );
};
