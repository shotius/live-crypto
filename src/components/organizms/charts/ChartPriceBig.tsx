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
import React from 'react';
import { Line } from 'react-chartjs-2';
import { IDateRange } from '../../../redux/types';
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

type Options = React.ComponentType<typeof Line>;
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          let label = context.dataset.label || '';

          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label = 'shotius';
            // label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
          }
          console.log('labeL', label);
          return label;
        },
      },
    },
  },
};

interface PriceChartBigProps {
  coin: any;
  data: any;
  range: IDateRange;
}

export const ChartPriceBig: React.FC<PriceChartBigProps> = ({
  coin,
  data,
  range,
}) => {
  return (
    <div className="wrapper">
      <ChartHeader coin={coin} />
      <Line data={data} options={options} />
      <p className="x-axes">{range === 'DAY' ? 'Hours' : 'Days'}</p>
    </div>
  );
};
