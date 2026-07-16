import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import todosReducer from './TodoSlice';
import usersReducer from './usersState';
import { LoggingMiddleware } from './LoggingMiddleware';
import { DelayMiddleware } from './DelayMiddleWare';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(LoggingMiddleware, DelayMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;