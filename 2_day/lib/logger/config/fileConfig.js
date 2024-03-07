import * as constants from '../constants.js';
import { createAndValidateAppenders, ifValid } from '../helper.js';
import fs from 'fs';
import logger from '../logger.js';

const confFilePath = process.env.LOG_CONFIG_FILE;

export function setFileConfig() {
  const config = {};

  if(confFilePath) {
    try {
      const fileData = fs.readFileSync(confFilePath, 'utf-8');
      const data = JSON.parse(fileData);
      const delimetter = data.delimetter;

      for (let prop in constants.customProps) {
        const property = constants.customProps[prop];
        const value = data[property]?.toUpperCase();

        if(value && ifValid(constants[property], value)) {
          config[property] = data[property].toUpperCase();
        }
      }

      if(data.appenders.length > 0) {
        config.appenders = createAndValidateAppenders(data.appenders);
      }

      if(delimetter) {
        config.delimetter = delimetter
      }
    } catch (err) {
      console.log(err);
      return {}
    }
  } else {
    return {}
  }

  return config;
}
