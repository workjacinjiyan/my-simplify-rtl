import { render, screen } from '@testing-library/react';
import fakeProducts from 'src/data/Retail/fakeProducts';
import ProductDetail from './ProductDetail';
import { RetailProvider } from './RetailContext';

test.skip('ProductDetail, given initial render, displays Placeholder component', () => {
  render(
    <RetailProvider products={fakeProducts}>
      <ProductDetail />
    </RetailProvider>
  );

  expect(
    screen.getByRole('heading', { name: /retail store/i })
  ).toBeInTheDocument();
});
