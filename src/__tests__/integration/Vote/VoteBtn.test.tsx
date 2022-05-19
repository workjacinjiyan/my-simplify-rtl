import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Vote from 'src/components/Vote';

test.skip('given "up" vote, total likes increases by one', async () => {
  render(<Vote totalGlobalLikes={10} />);
  await userEvent.click(screen.getByRole('button', { name: /thumbs up/i }));

  expect(screen.getByText(/11/i)).toBeInTheDocument();
});

test.skip('given "down" vote, total likes decreases by one', async () => {
  render(<Vote totalGlobalLikes={10} />);

  await userEvent.click(screen.getByRole('button', { name: /thumbs down/i }));
  expect(screen.getByText(/9/i)).toBeInTheDocument();
});

test.skip('given vote, returns disabled vote buttons', async () => {
  render(<Vote totalGlobalLikes={10} />);
  const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i });
  const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i });
  await userEvent.click(thumbsUpBtn);
  await userEvent.click(thumbsUpBtn);
  await userEvent.click(thumbsDownBtn);
  await userEvent.click(thumbsDownBtn);
  expect(screen.getByText(/11/i)).toBeInTheDocument();
});
