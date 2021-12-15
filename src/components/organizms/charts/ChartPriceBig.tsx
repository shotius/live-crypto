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
import faker from 'faker';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartTable } from '../tables/ChartTable';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,

  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

interface PriceChartBigProps {
  coin: any;
}

export const ChartPriceBig: React.FC<PriceChartBigProps> = ({ coin }) => {
  return (
    <>
      <h1 style={{ paddingTop: '100px' }}>Prices for {coin.id}</h1>
      <ChartTable coin={coin} />
      <Line data={data} options={options} />
    </>
  );
};
