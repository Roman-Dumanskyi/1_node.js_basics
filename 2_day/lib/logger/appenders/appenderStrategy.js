import * as constants from '../constants.js';
import config from '../config/config.js';
import consoleAppender from './console.js';
import fileAppender from './file.js';
import csvAppender from './csv.js';

const appenders = {
  [constants.appender.CONSOLE]: consoleAppender,
  [constants.appender.FILE]: fileAppender,
  [constants.appender.CSV]: csvAppender,
  [undefined]: consoleAppender
};

function getAppenders() {
  return config.appenders.map(a => appenders[a]);
}

export { getAppenders };
