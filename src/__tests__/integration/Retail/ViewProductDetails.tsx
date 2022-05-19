import { render, screen } from '@testing-library/react';
import fakeProducts from 'src/__mocks__/fakeProducts';
import { RetailProvider } from 'src/components/Retail/RetailContext';
import Retail from 'src/components/Retail';

import userEvent from '@testing-library/user-event';

async function addItemToCart(index: number) {
  const Product = fakeProducts[index];
  const ProductTitle = screen.getByRole('heading', {
    name: Product.title,
  });

  await userEvent.click(ProductTitle);
  await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
}

test.skip('A user can view product details', async () => {
  render(
    <RetailProvider products={fakeProducts}>
      <Retail />
    </RetailProvider>
  );

  const firstProduct = fakeProducts[0];

  await userEvent.click(
    screen.getByRole('heading', {
      name: firstProduct.title,
    })
  );

  // screen.debug();

  expect(
    screen.getAllByRole('heading', { name: firstProduct.title }).length
  ).toEqual(2);
  expect(screen.getByText(firstProduct.description)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: `$${firstProduct.price}` })
  ).toBeInTheDocument();
});

test.skip('A user can add a product to the cart', async () => {
  render(
    <RetailProvider products={fakeProducts}>
      <Retail />
    </RetailProvider>
  );
  await addItemToCart(0);
  expect(screen.getByText(/1 items/i)).toBeInTheDocument();
});

test.skip('A user can update the quantity for cart items', async () => {
  render(
    <RetailProvider products={fakeProducts}>
      <Retail />
    </RetailProvider>
  );

  // add second product
  await addItemToCart(1);
  expect(screen.getByText(/1 items/i)).toBeInTheDocument();

  // step1: update the quantity by entering a number in the input box less than 10
  // but clear the input first
  await userEvent.clear(screen.getByRole('spinbutton'));
  await userEvent.type(screen.getByRole('spinbutton'), '5');
  await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
  expect(screen.getByText('Qty:5')).toBeInTheDocument();

  // step2: at this point update the quantity by click up arrow 4 times
  await userEvent.clear(screen.getByRole('spinbutton'));
  await userEvent.type(screen.getByRole('spinbutton'), '2');
  await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));

  expect(screen.getByText('Qty:2')).toBeInTheDocument();
});

test.skip('A user cannot submit a quantity greater than 10', async () => {
  render(
    <RetailProvider products={fakeProducts}>
      <Retail />
    </RetailProvider>
  );

  await addItemToCart(0);
  expect(screen.getByText(/1 items/i)).toBeInTheDocument();

  await userEvent.clear(screen.getByRole('spinbutton'));
  await userEvent.type(screen.getByRole('spinbutton'), '11');
  await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
  expect(screen.getByText('Qty:1')).toBeInTheDocument();
});

test.skip('A user cannot submit a quantity less than 1', async () => {
  render(
    <RetailProvider products={fakeProducts}>
      <Retail />
    </RetailProvider>
  );

  await addItemToCart(0);
  expect(screen.getByText(/1 items/i)).toBeInTheDocument();

  await userEvent.clear(screen.getByRole('spinbutton'));
  await userEvent.type(screen.getByRole('spinbutton'), '-1');
  await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
  expect(screen.getByText('Qty:1')).toBeInTheDocument();
});

test('A user can add an item to favorites', async () => {
  render(
    <RetailProvider products={fakeProducts}>
      <Retail />
    </RetailProvider>
  );

  const firstProduct = fakeProducts[0];

  await userEvent.click(
    screen.getByRole('heading', {
      name: firstProduct.title,
    })
  );

  await userEvent.click(
    screen.getByRole('button', { name: 'ADD TO FAVORITES' })
  );

  expect(
    screen.getByRole('button', { name: /added to favorites/i })
  ).toHaveClass('btn-warning');
});
