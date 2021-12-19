import { useAppDispatch } from './../../redux/app/hook';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';
import { useAppSelector } from '../../redux/app/hook';
import { hours, Days } from '../constants';
import { getDaysArray } from '../functions/getDaysArray';
import { getChartData } from '../../redux/features/cryptoSlice';
import { ChartOptions } from 'chart.js';
import { getCurrencyIcon } from '../functions/getCurrencyIcon';
import { parseToString } from '../functions/parsers';

interface IChartData {
  getPrices: () => void;
  data: any;
  options: any;
}

export const useChartdata = (selectedCoin: any): IChartData => {
  const { selectedDateRange, selectedCurrency, priciesData, savedPrices } =
    useAppSelector((state) => state.coins, isEqual); // lodash equal is crutial here
  const dispatch = useAppDispatch();

  // -------------------- Utill functions -------------
  const days = (days: number) => {
    const today = new Date();
    const priorDate = new Date(new Date().setDate(today.getDate() - days));
    return getDaysArray(priorDate, today);
  };

  const labels =
    selectedDateRange === 'DAY' ? hours : days(Days[selectedDateRange]);

  const isSavedPrice = (pr: number) => {
    return savedPrices.find((price) => price === pr);
  };

  const pointColors = priciesData.map((price) =>
    isSavedPrice(price) ? 'red' : '#fff'
  );
  // ---------------------- Util function end -------------

  // -- Fetches new new price data (exported)
  const getPrices = () => {
    dispatch(
      getChartData({
        id: selectedCoin.id,
        currency: selectedCurrency,
        days: Days[selectedDateRange],
        interval: selectedDateRange === 'DAY' ? 'hourly' : 'daily',
      })
    );
  };

  // -- This value is memoized (exported)
  const data = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: selectedCoin,
          data: priciesData,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          pointBackgroundColor: pointColors,
          lineTension: 0.1,
          pointHoverRadius: 5,
        },
      ],
    };
  }, [priciesData, labels]);

  // -- Chart options
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
            const price = context[0].raw as number;

            if (selectedDateRange === 'DAY') {
              parseInt(title) < 12 ? (title += ' AM') : (title += ' PM');
            }

            if (savedPrices.includes(price)) {
              title += ' წითელი ფასი';
            }
            return title;
          },
          label: function (context) {
            let label = parseToString(context.raw) || '';
            label
              ? (label = `${getCurrencyIcon(selectedCurrency)} ${label}`)
              : (label = 'no data');
            return label;
          },
        },
      },
    },
  };

  return { data, getPrices, options };
};
