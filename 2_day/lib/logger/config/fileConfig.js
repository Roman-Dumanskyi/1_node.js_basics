import * as constants from '../constants.js';
import { ifValid } from '../helper.js';
import fs from 'fs';

const confFilePath = process.env.LOG_CONFIG_FILE;

export function setFileConfig() {
  const config = {};

  if(confFilePath) {
    try {
      const fileData = fs.readFileSync(confFilePath, 'utf-8');
      const data = JSON.parse(fileData);

      for (let prop in constants.customProps) {
        const property = constants.customProps[prop];
        const value = data[property].toUpperCase();

        if(value && ifValid(constants[property], value)) {
          config[property] = data[property].toUpperCase();
        }
      }
    } catch (err) {
      return {}
    }
  } else {
    return {}
  }

  return config;
}
