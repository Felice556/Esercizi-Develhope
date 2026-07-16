import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import todosReducer from './TodoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});