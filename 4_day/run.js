import EventEmitter from 'node:events';
import fs from 'fs';
import path from 'path';


// const ee = new EventEmitter();
//
// const listenerOnce = () => {
//   console.log('EVENT ONCE');
// }
//
// console.log('+++++++++++++++++++++++++++++++++START');
// ee.on('event', () => console.log('EVENT'));
// ee.on('event', () => console.log('EVENT_2'));
// ee.once('event', listenerOnce);
//
// ee.on('log', (date, category, message) => console.log('LOG', date, category, message));
// ee.prependListener('event', () => console.log('I am first'));
// ee.removeListener('event', listenerOnce);
// ee.removeAllListeners('event');
//
//
//
// ee.emit('event');
// ee.emit('event');
// ee.emit('log', new Date(), 'main.js', 'TEXT')
//
// console.log('+++++++++++++++++++++++++++++++++FINISH', ee.eventNames());
//
// process.on('beforeExit', () => console.log('I am closing'));


const readStream = fs.createReadStream(path.join('./', 'log.txt'));

readStream.on('open', () => {
  console.log('File read STARTED');
})
readStream.on('data', (chunk) => {
  console.log(chunk, 'chunk');
});

readStream.on('end', () => {
  console.log('File read finished');
})
