const logLevel = {
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
  TRACE: 'TRACE'
};

const scoreLevel = {
  [logLevel.ERROR]: 1,
  [logLevel.WARN]: 2,
  [logLevel.INFO]: 3,
  [logLevel.DEBUG]: 4,
  [logLevel.TRACE]: 5,
};

const appender = {
  CONSOLE: 'CONSOLE',
  FILE: 'FILE',
  CSV: 'CSV'
};

const customProps = {
  LOG_LEVEL: 'logLevel',
  LOG_FORMAT: 'formatter'
};

const formatter = {
  JSON: "JSON",
  DEFAULT:"DEFAULT",
  CSV: 'CSV'
}

const DELIMETTER = ',';

export { logLevel, scoreLevel, appender, customProps, formatter, DELIMETTER };
