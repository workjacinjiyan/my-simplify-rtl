import { screen, render } from '@testing-library/react';
import { FunctionComponent } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Retail from '.';

test.skip('Retail must be rendered within Context Provider', () => {
  const spiedErrorMethod = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  const ErrorFallback: FunctionComponent<{ error: Error }> = ({ error }) => (
    <h1 style={{ color: 'red' }}>{error.message}</h1>
  );

  render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Retail />
    </ErrorBoundary>
  );

  const errorMessage = screen.getByText(
    /must be used within the RetailProvider/i
  );

  screen.debug();

  expect(errorMessage).toBeInTheDocument();
  // expect(console.error).toHaveBeenCalled();
  expect(spiedErrorMethod).toHaveBeenCalled();

  // (console.error as ReturnType<typeof jest.spyOn>).mockRestore();
  spiedErrorMethod.mockRestore();
});
