import React, { useEffect, useState } from 'react';
import homeHero from '../../assets/home-hero.png';
import { useAppDispatch } from '../../redux/app/hook';
import { getCryptoCoins } from '../../redux/features/cryptoSlice';
import { CryptoCoin } from '../../redux/types';
import { CointainerInner } from '../molecules/containers/CointainerInner';
import { HomeCover } from '../molecules/covers/HomeCover';
import { HorizontalScrollable } from '../molecules/wrappers/HorizontalScrollable';
import { CoinsTable } from '../organizms/tables/CoinsTable';

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
      <HomeCover variant="full" image={homeHero} />
      <HorizontalScrollable>
        <CointainerInner>
          <CoinsTable coins={coins} />
        </CointainerInner>
      </HorizontalScrollable>
    </>
  );
};
