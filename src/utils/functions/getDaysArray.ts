import { monthNames } from './../constants';

/**
 * @param start date
 * @param end date
 * @returns object list of month name and a day
 */
export const getDaysArray = function (start: Date, end: Date) {
  let arr: Date[] = [];
  // add all dates in the array
  for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
    arr.push(new Date(dt));
  }
  // parse date array to desired relult
  return arr.map((date) => {
    const isoString = date.toISOString().slice(0, 10);
    const day = isoString.split('-')[2];
    const monthNum = isoString.split('-')[1];
    const month = monthNames[parseInt(monthNum) - 1];
    return `${day}${month}`
  });
};
