import fs from 'fs';
import * as constants from '../constants.js';
import { formatMessage } from '../helper.js';

function log(date, level, category, message) {
  let fileName = constants.logLevel.ERROR === level ? './app_error.log' : './app.log'
  fs.writeFileSync(fileName, `${formatMessage(date, level, category, message)}\n`, {flag: "a+"});
}
export default { log };
