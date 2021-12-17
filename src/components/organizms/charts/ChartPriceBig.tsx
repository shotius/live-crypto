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
import { useAppSelector } from '../../../redux/app/hook';
import { ChartHeader } from '../headers/ChartHeader';
import './styles.scss';

type LineProps = React.ComponentProps<typeof Line>
type Options = LineProps['options']

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
  const { selectedDateRange } = useAppSelector((state) => state.coins);
  const options: Options = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true, 
          text: "Price"
        }
      }, 
      x: {
        title: {
          display: true, 
          text: selectedDateRange === 'DAY' ? 'Hours' : 'Days'
        }
      }, 
      
    }, 
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
  return (
    <div className="wrapper">
      <ChartHeader coin={coin} />
      <Line data={data} options={options} />
    </div>
  );
};
