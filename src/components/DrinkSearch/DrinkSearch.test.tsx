import { rest } from 'msw';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockServer } from 'src/__mocks__/server';

import DrinkSearch from '.';

test.skip('renders mock drink data', async () => {
  render(<DrinkSearch />);

  const searchInput = screen.getByRole('searchbox');

  await userEvent.type(searchInput, 'vodka{enter}');

  expect(
    await screen.findByRole('img', { name: /test drink/i })
  ).toBeInTheDocument();

  expect(screen.getByRole('heading', { name: /test drink/i }))
    .toBeInTheDocument;

  expect(screen.getByText(/test ingredient/i)).toBeInTheDocument();

  expect(screen.getByText(/test instructions/i)).toBeInTheDocument();
});

test.skip('renders no drink results', async () => {
  mockServer.use(
    rest.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ drinks: null }));
      }
    )
  );

  render(<DrinkSearch />);
  const searchInput = screen.getByRole('searchbox');
  await userEvent.type(searchInput, 'vodka{enter}');

  expect(
    await screen.findByRole('heading', { name: /no drinks found/i })
  ).toBeInTheDocument();
});

test.skip('renders service unavailable', async () => {
  mockServer.use(
    rest.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      (req, res, ctx) => {
        return res(ctx.status(503));
      }
    )
  );

  render(<DrinkSearch />);
  const searchInput = screen.getByRole('searchbox');
  await userEvent.type(searchInput, 'vodka{enter}');
  expect(
    await screen.findByRole('heading', { name: /Service unavailable/i })
  ).toBeInTheDocument();
});

test('prevents GET request when search input empty', async () => {
  render(<DrinkSearch />);
  const searchInput = screen.getByRole('searchbox');
  await userEvent.type(searchInput, '{enter}');

  expect(screen.queryByRole('heading')).not.toBeInTheDocument();
});
