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
  FILE: 'FILE'
};

const customEnvProps = {
  LOG_LEVEL: 'logLevel',
  LOG_APPENDER: 'appender'
};

export { logLevel, scoreLevel, appender, customEnvProps };
