import { store } from './store';
import { increment } from './CounterSlice';
import { addTodo } from './TodoSlice';

console.log('stato iniziale:', store.getState());

store.dispatch(increment());
store.dispatch(addTodo('comprare il latte'));

console.log('stato dopo dispatch:', store.getState());
console.log('inizio test, ora:', new Date().toISOString());
store.dispatch(increment());
console.log('dopo dispatch, ora:', new Date().toISOString());
console.log('subito dopo dispatch:', store.getState());

setTimeout(() => {
  console.log('dopo 1.5 secondi:', store.getState());
}, 1500);