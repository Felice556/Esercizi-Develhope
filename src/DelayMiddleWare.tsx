import { Middleware } from '@reduxjs/toolkit';

export const DelayMiddleware: Middleware = (store) => (next) => (action) => {
  setTimeout(() => {
    next(action);
  }, 1000); 
};