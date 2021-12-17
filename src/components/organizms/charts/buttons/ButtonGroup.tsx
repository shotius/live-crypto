import React from 'react';
import { IDateRange } from '../../../../redux/types';
import { ButtonSqr } from '../../../molecules/buttons/ButtonRect';

interface ButtonGroupProps {
  coin: any;
  dateRange: IDateRange;
  setDateRange: (val: IDateRange) => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  coin,
  dateRange,
  setDateRange,
}) => {
  return (
    <div className="header-wrap">
      <div className="coin-header">
        <div>
          <img src={coin.image.large} width="60px" height="60px" />
        </div>
        <h1 style={{ alignSelf: 'end', margin: '0px 0px 10px' }}>
          {coin.name} price
        </h1>
      </div>
      <div className="button-group">
        <ButtonSqr
          onClick={() => setDateRange('DAY')}
          active={dateRange === 'DAY'}
        >
          1D
        </ButtonSqr>
        <ButtonSqr
          onClick={() => setDateRange('WEEK')}
          active={dateRange === 'WEEK'}
        >
          1W
        </ButtonSqr>
        <ButtonSqr
          onClick={() => setDateRange('MONTH')}
          active={dateRange === 'MONTH'}
        >
          1M
        </ButtonSqr>
        <select>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
  );
};
