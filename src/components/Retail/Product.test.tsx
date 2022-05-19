import { screen, render } from '@testing-library/react';

import faker from '@faker-js/faker';
import { RetailProvider } from './RetailContext';
import Product from './Product';
import fakeProducts from 'src/data/Retail/fakeProducts';

test.skip('Product, given product properties, renders to screen', () => {
  const product = {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
  };

  render(
    <RetailProvider products={fakeProducts}>
      <Product
        title={product.title}
        price={product.price}
        image={product.image}
        id={''}
        description={''}
        category={''}
      />
    </RetailProvider>
  );

  expect(screen.getByText(product.title)).toBeInTheDocument();
  expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
});
