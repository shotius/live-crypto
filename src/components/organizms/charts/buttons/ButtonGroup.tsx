import isEqual from 'lodash.isequal';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hook';
import {
  setCurrency,
  setDateRange,
} from '../../../../redux/features/cryptoSlice';
import { isCurrency } from '../../../../utils/functions/typeCheckers';
import { ButtonSqr } from '../../../molecules/buttons/ButtonRect';

interface ButtonGroupProps {
  coin: any;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = React.memo(
  ({ coin }) => {
    const dispatch = useAppDispatch();
    const { selectedDateRange } = useAppSelector(
      (state) => state.coins,
      isEqual
    );

    return (
      <div className="header-wrap">
        <div className="coin-header">
          <div>
            <img src={coin.image.large} width="60px" height="60px" />
          </div>
          <h1 className='t_heading--500 t__heading--price'>
            {coin.name} price
          </h1>
        </div>
        <div className="button-group">
          <ButtonSqr
            onClick={() => dispatch(setDateRange('DAY'))}
            active={selectedDateRange === 'DAY'}
          >
            1D
          </ButtonSqr>
          <ButtonSqr
            onClick={() => dispatch(setDateRange('WEEK'))}
            active={selectedDateRange === 'WEEK'}
          >
            1W
          </ButtonSqr>
          <ButtonSqr
            onClick={() => dispatch(setDateRange('MONTH'))}
            active={selectedDateRange === 'MONTH'}
          >
            1M
          </ButtonSqr>
          <select
            onChange={(e) => {
              if (isCurrency(e.currentTarget.value))
                dispatch(setCurrency(e.currentTarget.value));
            }}
          >
            <option value={'usd'}>USD</option>
            <option value={'eur'}>EUR</option>
          </select>
        </div>
      </div>
    );
  }
);
