import React, { useEffect, useState } from 'react';
import { CointainerInner } from '../components/molecules/containers/CointainerInner';
import { CoverImage } from '../components/molecules/covers/CoverImage';
import { HorizontalScrollable } from '../components/molecules/wrappers/HorizontalScrollable';
import { CoinsTable } from '../components/organizms/tables/CoinsTable';
import { useAppDispatch } from '../redux/app/hook';
import { getCryptoCoins } from '../redux/features/cryptoSlice';
import { CryptoCoin } from '../redux/types';

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
      <CoverImage
        variant="full"
        image="https://incyber.fr/wp-content/uploads/2021/08/ARTICLE-CRYPTO-2-1.png"
      />
      <HorizontalScrollable>
        <CointainerInner>
          <CoinsTable coins={coins} />
        </CointainerInner>
      </HorizontalScrollable>
    </>
  );
};
