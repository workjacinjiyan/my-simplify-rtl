import { configureStore } from '@reduxjs/toolkit';
import retailReducer from 'src/components/Retail/retailSlice';

const store = configureStore({
  reducer: {
    retail: retailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
