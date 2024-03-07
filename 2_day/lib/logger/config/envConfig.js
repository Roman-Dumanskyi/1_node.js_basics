import * as constants from '../constants.js';
import { createAndValidateAppenders, ifValid } from '../helper.js';

export function setEnvConfig() {
  const config = {};
  const delimetter = process.env.LOG_DELIMETTER;
  const appenders = process.env.LOG_APPENDER.split(',');

  for (let prop in constants.customProps) {
    const property = constants.customProps[prop];
    const value = process.env[prop]?.toUpperCase();

    if(value && ifValid(constants[property], value)) {
      config[property] = process.env[prop].toUpperCase();
    }
  }

  if(createAndValidateAppenders(appenders).length > 0) {
    config.appenders = createAndValidateAppenders(appenders);
  }

  if(delimetter) {
    config.delimetter = delimetter
  }

  return config;
}
