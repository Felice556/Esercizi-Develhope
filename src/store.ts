import { createStore, combineReducers } from 'redux';
import { CounterReducer } from './CounterReducer';
import { TodosReducer } from './TodosReducer';

const rootReducer = combineReducers({
  counter: CounterReducer,
  todos: TodosReducer,
});

export const store = createStore(rootReducer);