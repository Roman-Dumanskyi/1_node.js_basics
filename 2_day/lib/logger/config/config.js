import * as constants from '../constants.js';
import { setEnvConfig } from './envConfig.js';
import { setFileConfig } from './fileConfig.js';

const defaultConfig = {
  logLevel: constants.logLevel.INFO,
  scoreLevel: constants.scoreLevel[constants.logLevel.INFO],
  appender: constants.appender.CONSOLE
};

function enrichConfig(config) {
  config.scoreLevel = constants.scoreLevel[config.logLevel];
}

function initConfig() {
  const config = {...defaultConfig, ...setFileConfig(), ...setEnvConfig()};
  enrichConfig(config);

  return config;
}

const config = initConfig();
export default config;
