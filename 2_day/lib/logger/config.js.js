import * as constants from './constants.js';
import fs from 'fs';

const defaultConfig = {
  logLevel: constants.logLevel.INFO,
  scoreLevel: constants.scoreLevel[constants.logLevel.INFO],
  appender: constants.appender.CONSOLE
};
const confFilePath = process.env.LOG_CONFIG_FILE;

function setConfigByPriority(config) {
  // Priority: env -> file -> defaults
  const invalidProps = [];

  for (let prop in constants.customEnvProps) {
    if (ifExistAndValid(process.env[prop], constants.customEnvProps[prop])) {
      config[constants.customEnvProps[prop]] = process.env[prop].toUpperCase();
    } else {
      invalidProps.push(constants.customEnvProps[prop]);
    }
  }

  if (invalidProps.length) {
    if (confFilePath) {
      try {
        const fileData = fs.readFileSync(confFilePath, 'utf-8');
        const data = JSON.parse(fileData);

        invalidProps.forEach(i => config[i] = ifExistAndValid(data[i], i) ? data[i].toUpperCase() : defaultConfig[i]);
      } catch (err) {
        reassignInvalidProps(invalidProps, config, defaultConfig);
      }
    } else {
      reassignInvalidProps(invalidProps, config, defaultConfig);
    }
  }
  return config;
}

function reassignInvalidProps(invalidValues, configObj, propsObj) {
  return invalidValues.forEach(i => configObj[i] = propsObj[i]);
}

function ifExistAndValid(value, checkList) {
  return value && Object.hasOwn(constants[checkList], value.toUpperCase());
}

function enrichConfig(config) {
  config.scoreLevel = constants.scoreLevel[config.logLevel];
}

function initConfig() {
  const config = defaultConfig;

  setConfigByPriority(config);
  enrichConfig(config);

  return config;
}

const config = initConfig();
export default config;
