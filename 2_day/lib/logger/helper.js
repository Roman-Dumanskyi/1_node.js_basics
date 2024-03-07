import * as constants from './constants.js';
import config from './config/config.js';

export const ifValid = (value, list) => Object.hasOwn(value, list);

export function formatMessage(date, level, category, message) {
  if(config.formatter === constants.formatter.JSON) {
    return JSON.stringify({date, level, category, message});
  }

  if(config.formatter === constants.formatter.CSV) {
    return `${date},${level},${category},${message}`
  }

  return `Date: ${date}, category: ${category}, level: ${level}, message: ${JSON.stringify(message)}`;
}

export function concatMsgParameters(data) {
  return data.map(item => {
    if (typeof item === 'object' && item !== null) {
      return JSON.stringify(item);
    }

    return String(item);
  }).join(config.delimetter);
}

export function createAndValidateAppenders(appenders) {
  let outputAppenders = []
  appenders.forEach(appender => {
    if(ifValid(constants.appender, appender.toUpperCase())) {
      outputAppenders.push(appender.toUpperCase());
    }
  });

  return outputAppenders;
}
