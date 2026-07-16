import { store } from './store';
import App from './App';
import { increment } from './CounterSlice';
import { addTodo } from './TodoSlice';
import { fetchUser } from './usersState';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';


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

store.dispatch(fetchUser('octocat'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);