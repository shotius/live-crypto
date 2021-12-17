import { IDateRange } from '../redux/types';
import { range } from './functions/range';

export const hours = range(0, 24);
export const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
export const monthDays = range(1, 30);

export const Days: Record<IDateRange, number> = {
  DAY: 1,
  WEEK: 7,
  MONTH: 30,
};
