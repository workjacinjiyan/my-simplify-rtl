import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Vote from '.';

test.skip('increases total likes by one', async () => {
  render(<Vote totalGlobalLikes={10} />);

  expect(screen.getByText(/10/i)).toBeInTheDocument();

  await userEvent.click(
    screen.getByRole('button', {
      name: /thumbs up/i,
    })
  );

  expect(screen.getByText(/11/i)).toBeInTheDocument();

  expect(
    screen.getByRole('button', {
      name: /thumbs up/i,
    })
  ).toHaveStyle('background: green');
});

test.skip('decreases total likes by one', async () => {
  render(<Vote totalGlobalLikes={10} />);

  expect(screen.getByText(/10/i)).toBeInTheDocument();
  await userEvent.click(
    screen.getByRole('button', {
      name: /thumbs down/i,
    })
  );
  expect(screen.getByText(/9/i)).toBeInTheDocument();

  expect(
    screen.getByRole('button', {
      name: /thumbs down/i,
    })
  ).toHaveStyle('background: red');
});
