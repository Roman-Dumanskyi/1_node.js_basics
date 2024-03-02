import config from './config/config.js';
import { scoreLevel, logLevel } from './constants.js';
import * as appenderStrategy from "./appenders/appenderStrategy.js"

const logger = (category) => ({
  info: (message) => {
    executeLog(logLevel.INFO, category, message);
  },
  warn: (message) => {
    executeLog(logLevel.WARN, category, message);
  },
  error: (message) => {
    executeLog(logLevel.ERROR, category, message);
  },
  debug: (message) => {
    executeLog(logLevel.DEBUG, category, message);
  },
  trace: (message) => {
    executeLog(logLevel.TRACE, category, message);
  }
});

const appender = appenderStrategy.getAppender();

function executeLog(level, category, message) {
  if (scoreLevel[level] <= config.scoreLevel) {
    appender.log(Date.now(), level, category, message);
  }
}

export default {
  getLogger(category) {
    return logger(category);
  }
};
