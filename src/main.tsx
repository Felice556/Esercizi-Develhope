import { store } from './store';
import { increment } from './CounterReducer'; // adatta il path
import { addTodo } from './TodosReducer'; // adatta il path

console.log('stato iniziale:', store.getState());

store.dispatch(increment());
store.dispatch(addTodo('comprare il latte'));

console.log('stato dopo dispatch:', store.getState());