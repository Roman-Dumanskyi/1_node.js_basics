export const ifValid = (value, list) => Object.hasOwn(value, list);

export function formatMessage(date, level, category, message) {
  return `Date: ${date}, category: ${category}, level: ${level}, message: ${JSON.stringify(message)}`;
}
