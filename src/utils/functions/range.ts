// create range or nummbers
export const range = (from: number, to: number): number[] => {
  const arr = Array(to - from + 1).fill(0);
  const first = from;
  return arr.map((_, i) => i + first);
};
