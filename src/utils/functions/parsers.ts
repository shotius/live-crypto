const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

export const parseToString = (text: unknown): string => {
  if (!text || !isString(text)) {
    if (Number(text)) {
      return String(text);
    }
    return '';
  }
  return text;
};
