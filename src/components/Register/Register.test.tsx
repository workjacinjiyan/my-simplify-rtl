import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Register from '.';

test.skip('given submitted form, invokes handleRegister', async () => {
  const mockHandleRegister = jest.fn();

  const mockValues = {
    email: 'john@mail.com',
    password: '123',
  };

  render(<Register handleRegister={mockHandleRegister} />);

  await userEvent.type(
    screen.getByLabelText('Email Address'),
    mockValues.email
  );
  await userEvent.type(
    screen.getByLabelText('Create Password'),
    mockValues.password
  );
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(mockHandleRegister).toHaveBeenCalledTimes(1);
  expect(mockHandleRegister).toHaveBeenCalledWith({
    email: mockValues.email,
    password: mockValues.password,
  });
});
