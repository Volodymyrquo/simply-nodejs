const EventEmmiter = require('events');

const emmiter = new EventEmmiter();

/* emmiter.on('Something', (data) => {
  console.log('ON: something', data);
});

emmiter.emit('Something', { a: 1 });

setTimeout(() => {
  emmiter.emit('Something', { b: 2 });
}, 3000); */

class Dispatcher extends EventEmmiter {
  subscribe(eventName, cb) {
    console.log('[Subscribe...]');
    this.on(eventName, cb);
  }
  dispatch(eventName, data) {
    console.log('[Dispatching...]');
    this.emit(eventName, data);
  }
}

const dis = new Dispatcher();
dis.subscribe('aa', (data) => {
  console.log('ON:aa ', data);
});

dis.dispatch('aa', { a: 5 });
