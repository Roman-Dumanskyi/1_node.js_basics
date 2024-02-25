import fs from 'fs';
import * as constants from '../constants.js';

function log(date, level, category, message) {
  let fileName = '';

  fileName = constants.logLevel.ERROR === level ? `${category}_error.txt` : `${category}.txt`
  fs.writeFileSync(fileName, formatMessage(date, level, category, message), {flag: "a+"});
}
function formatMessage(date, level, category, message) {
  return `Date: ${date}, category: ${category}, level: ${level}, message: ${JSON.stringify(message)}\n`;
}
export default { log };
