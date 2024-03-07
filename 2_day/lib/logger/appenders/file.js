import fs from 'fs';
import * as constants from '../constants.js';
import { formatMessage } from '../helper.js';

async function log(date, level, category, message) {
  const fileName = constants.logLevel.ERROR === level ? './app_error.log' : './app.log';
  const msg = formatMessage(date, level, category, message);

  await fs.promises.writeFile(fileName, `${msg}\n`, {flag: "a+"});
}
export default { log };
