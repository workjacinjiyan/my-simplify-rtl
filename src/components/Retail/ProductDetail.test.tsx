import { render, screen } from '@testing-library/react';
import fakeContextProducts from 'src/data/Retail/fakeContextProducts';
import ProductDetail from './ProductDetail';
import { RetailProvider } from './RetailContext';

test.skip('ProductDetail, given initial render, displays Placeholder component', () => {
  render(
    <RetailProvider products={fakeContextProducts}>
      <ProductDetail />
    </RetailProvider>
  );

  expect(
    screen.getByRole('heading', { name: /retail store/i })
  ).toBeInTheDocument();
});
