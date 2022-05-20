import Cart from './Cart';
import { render, screen, fakeStore } from 'src/utils/test-utils';

test('Cart, given initial render, displays empty cart', () => {
  render(<Cart />, { preloadedState: fakeStore });
  expect(screen.getByText(/0 items/i)).toBeInTheDocument();
  expect(screen.getByText(/\$0\.00/i)).toBeInTheDocument();
});
