import EventEmitter from 'node:events';

const ee = new EventEmitter();

console.log('START');
ee.on('event', () => console.log('EVENT'));
ee.on('event', () => console.log('EVENT_2'));
ee.on('log', () => console.log('LOG'));

// console.log(ee.eventNames());

ee.emit('event');

console.log('FINISH', ee.eventNames());
