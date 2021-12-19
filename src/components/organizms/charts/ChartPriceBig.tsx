import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import isEqual from 'lodash.isequal';
import React, { useRef } from 'react';
import { getElementAtEvent, Line } from 'react-chartjs-2';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hook';
import { addPoint, removePoint } from '../../../redux/features/cryptoSlice';
import { useChartdata } from '../../../utils/hooks/useChartData';
import { ChartHeader } from '../headers/ChartHeader';
import './styles.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PriceChartBigProps {
  coin: any;
  data: any;
}

const ChartPriceBig: React.FC<PriceChartBigProps> = (props) => {
  const { coin, data } = props;
  const lineRef = useRef<any>();
  const dispatch = useAppDispatch();

  const { options } = useChartdata(coin);
  const { savedPrices } = useAppSelector((state) => state.coins, isEqual);

  // -- On Price point click user saves it
  const onClick = (event: any) => {
    // get point on click
    const point = getElementAtEvent(lineRef.current, event);
    //@ts-ignore
    const price = point[0]['element']['$context']['raw'];
    const includes = savedPrices.find((pr) => pr === price);
    // if point is saved remove else add
    includes ? dispatch(removePoint(price)) : dispatch(addPoint(price));
  };

  return (
    <div className="wrap__chart--big">
      <ChartHeader coin={coin} />
      <Line data={data} options={options} onClick={onClick} ref={lineRef} />
    </div>
  );
};

export default React.memo(ChartPriceBig);
