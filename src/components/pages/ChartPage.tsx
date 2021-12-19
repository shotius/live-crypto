import isEqual from 'lodash.isequal';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/app/hook';
import { getSingleCoinInfo } from '../../redux/features/cryptoSlice';
import { useChartdata } from '../../utils/hooks/useChartData';
import { CointainerInner } from '../molecules/containers/CointainerInner';
import { CoverImage } from '../molecules/covers/CoverImage';
import { CenteredHeading } from '../molecules/headings/CenteredHeading';
import { HorizontalScrollable } from '../molecules/wrappers/HorizontalScrollable';
import { ButtonGroup } from '../organizms/charts/buttons/ButtonGroup';
import ChartPriceBig from '../organizms/charts/ChartPriceBig';
import './styles.scss';

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
      <CoverImage
        image="https://wallpaperbat.com/img/641683-bitcoin-cryptocurrency-4k-wallpaper-mocah-hd-wallpaper.jpg"
        variant="medium"
      />
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
