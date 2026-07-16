import { Middleware } from '@reduxjs/toolkit';

export const LoggingMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('Middleware:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};