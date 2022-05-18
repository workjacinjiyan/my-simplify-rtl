import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockServer } from 'src/__mocks__/server';

import DrinkSearch from '.';

test('renders mock drink data', () => {
  render(<DrinkSearch />);

  const searchInput = screen.getByRole('searchbox');
});
