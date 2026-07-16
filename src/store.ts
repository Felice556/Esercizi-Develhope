import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import todosReducer from './TodoSlice';
import { LoggingMiddleware } from './LoggingMiddleware';
import { DelayMiddleware } from './DelayMiddleWare';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(LoggingMiddleware, DelayMiddleware),
  
});