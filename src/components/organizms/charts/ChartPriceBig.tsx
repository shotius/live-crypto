import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useRef } from 'react';
import { getElementAtEvent, Line } from 'react-chartjs-2';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hook';
import { addPoint, removePoint } from '../../../redux/features/cryptoSlice';
import { ChartOptions } from '../../../redux/types';
import { getCurrencyIcon } from '../../../utils/functions/getCurrencyIcon';
import { parseToString } from '../../../utils/functions/parsers';
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

export const ChartPriceBig: React.FC<PriceChartBigProps> = ({ coin, data }) => {
  const { selectedDateRange, selectedCurrency } = useAppSelector(
    (state) => state.coins
  );
  const options: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: 'Price',
        },
      },
      x: {
        title: {
          display: true,
          text: selectedDateRange === 'DAY' ? 'Hours' : 'Days',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: function (context) {
            let title = context[0].label;
            const price = context[0].raw as number

            if (selectedDateRange === 'DAY') {
              parseInt(title) < 12 ? (title += ' AM') : (title += ' PM');
            }

            if (savedPrices.includes(price)) {
              title +=" წითელი ფასი"
            }
            return title;
          },
          label: function (context) {
            let label = parseToString(context.raw) || '';
            console.log();
            label
              ? (label = `${getCurrencyIcon(selectedCurrency)} ${label}`)
              : (label = 'no data');
            return label;
          },
        },
      },
    },
  };

  const lineRef = useRef<any>();
  const dispatch = useAppDispatch();
  const { savedPrices } = useAppSelector((state) => state.coins);

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
    <div className="wrapper">
      <ChartHeader coin={coin} />
      <Line data={data} options={options} onClick={onClick} ref={lineRef} />
    </div>
  );
};
