import logger from './lib/logger/logger.js';

const log = logger.getLogger('handler.js');

function add(a, b) {
  log.debug('First operand ' + a);
  log.trace('Second operand ' + b);
  log.error('Second operand ' + b);

  return a + b;
}

export { add };
