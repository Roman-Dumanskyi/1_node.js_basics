import * as constants from '../constants.js';
import { setEnvConfig } from './envConfig.js';
import { setFileConfig } from './fileConfig.js';

const defaultConfig = {
  logLevel: constants.logLevel.INFO,
  scoreLevel: constants.scoreLevel[constants.logLevel.INFO],
  appenders: [constants.appender.CONSOLE],
  formatter: constants.formatter.DEFAULT,
  delimetter: constants.DELIMETTER
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
