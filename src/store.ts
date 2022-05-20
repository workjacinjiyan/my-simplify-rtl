import { configureStore } from '@reduxjs/toolkit';
import retailReducer from 'src/components/Retail/retailSlice';
import fakeReduxProducts from './data/Retail/fakeReduxProducts';

const store = configureStore({
  reducer: {
    retail: retailReducer,
  },
  preloadedState: {
    retail: {
      products: fakeReduxProducts,
      cartItems: [],
      favorites: [],
      showProductDetails: {},
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
