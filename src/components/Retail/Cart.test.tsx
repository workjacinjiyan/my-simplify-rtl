import { screen, render } from '@testing-library/react';
import Cart from './Cart';
import { RetailProvider } from './RetailContext';

import fakeProducts from 'src/__mocks__/fakeProducts';

test.skip('Cart, given initial render, returns empty cart', () => {
  render(
    <RetailProvider products={fakeProducts}>
      <Cart />
    </RetailProvider>
  );
  expect(screen.getByText(/0 items/i)).toBeInTheDocument();
  expect(screen.getByText(/\$0\.00/i)).toBeInTheDocument();
});
