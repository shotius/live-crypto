import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/app/hook';
import { getCryptoCoins } from '../../redux/features/cryptoSlice';
import { CryptoCoin } from '../../redux/types';
import { CointainerInner } from '../molecules/containers/CointainerInner';
import { CoverImage } from '../molecules/covers/CoverImage';
import { HorizontalScrollable } from '../molecules/wrappers/HorizontalScrollable';
import { CoinsTable } from '../organizms/tables/CoinsTable';
import homeHero from '../../assets/home-hero.png';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const [coins, setCoins] = useState<CryptoCoin[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCryptoCoins())
      .unwrap()
      .then((data) => setCoins(data));
  }, []);

  return (
    <>
      <CoverImage variant="full" image={homeHero} />
      <HorizontalScrollable>
        <CointainerInner>
          <CoinsTable coins={coins} />
        </CointainerInner>
      </HorizontalScrollable>
    </>
  );
};
