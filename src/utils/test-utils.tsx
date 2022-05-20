import { configureStore } from '@reduxjs/toolkit';
import type { Store, AnyAction } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import type { RenderOptions, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import faker from '@faker-js/faker';

import retailReducer from 'src/components/Retail/retailSlice';

const fakeStore = {
  retail: {
    products: [
      {
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        image: faker.image.fashion(),
      },
    ],
    cartItems: [],
    favorites: [],
    showProductDetails: {},
  },
};

type fakeRootState = typeof fakeStore;

type CustomRenderOptions = {
  preloadedState?: fakeRootState;
  store?: Store<any, AnyAction>;
  renderOptions?: Omit<RenderOptions, 'wrapper'>;
};

function render(
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: { retail: retailReducer },
      preloadedState,
    }),
    ...renderOptions
  }: CustomRenderOptions = {}
): RenderResult {
  function Wrapper({ children }: { children?: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render, fakeStore };
