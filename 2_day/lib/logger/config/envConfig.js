import * as constants from '../constants.js';
import { ifValid } from '../helper.js';

export function setEnvConfig() {
  const config = {};

  for (let prop in constants.customProps) {
    const property = constants.customProps[prop];
    const value = process.env[prop].toUpperCase();

    if(value && ifValid(constants[property], value)) {
      config[property] = process.env[prop].toUpperCase();
    }
  }

  return config;
}
