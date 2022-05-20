import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MoreInfoPopover from '.';

it.skip('logs output to Testing Playground', async () => {
  render(<MoreInfoPopover />);
  screen.logTestingPlaygroundURL();
});

test('MoreInfoPopover, given clicked button, displays popover', async () => {
  render(<MoreInfoPopover />);

  await userEvent.click(
    screen.getByRole('button', {
      name: /more info/i,
    })
  );

  const popover = await screen.findByRole('heading', { name: /lorem ipsum/i });
  expect(popover).toBeInTheDocument();
});
