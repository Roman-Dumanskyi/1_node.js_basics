import fs from "fs";
import * as constants from '../constants.js';
import { formatMessage } from '../helper.js';


async function log(date, level, category, message) {
  const header = "Date,Level,Category,Message\n";
  const msg = formatMessage(date, level, category, message);
  const fileName = constants.logLevel.ERROR === level ? `${createFileName()}_error.csv` : `${createFileName()}.csv`;

  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, header, {flag: "a+"});
  }

  await fs.promises.writeFile(fileName, `${msg}\n`, {flag: "a+"});
}

function createFileName() {
  const day = new Date().getDate().toString().padStart(2, "0")
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const year = new Date().getFullYear().toString();

  return `app_${day}_${month}_${year}`;
}

export default { log };


// const log = formatter => (date, level, category, message) => {
//   const logMessage = formatter(date, level, category, message) + "\n";
//   appendLog(logMessage);
//
//   if (level === "ERROR") {
//     appendErrorFile(logMessage);
//   }
// }

// async function appendLog(message) {
//   await fs.promises.appendFile(appFileName, message);
// }
//
// async function appendErrorFile(message) {
//   await fs.promises.appendFile(appFileErrorName, message);
// }
//
// function initFiles() {
//   // const fileName = createFileName();
//
//   appFileName = fileName + ".csv";
//   appFileErrorName = fileName + "_error.csv";
//
//   const createFile = name => {
//     if (!fs.existsSync(name)) {
//       fs.appendFileSync(name, HEADER);
//     }
//   }
//
//   createFile(appFileName);
//   createFile(appFileErrorName);
// }
//
//
// function init() {
//
//   initFiles();
//
//   return {
//     log: log(csvformatter)
//   }
// }
//
