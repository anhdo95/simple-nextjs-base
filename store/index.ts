import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export type AppState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});
