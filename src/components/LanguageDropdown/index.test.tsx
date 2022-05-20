import { render, screen } from '@testing-library/react';
import LanguageDropdown from '.';
import userEvent from '@testing-library/user-event';

test.skip('LanguageDropdown, given selected menu item, displays selection', async () => {
  render(<LanguageDropdown />);

  await userEvent.click(
    screen.getByRole('button', { name: /programming language/i })
  );
  await userEvent.click(screen.getByRole('menuitem', { name: /javascript/i }));

  // error  Prefer `findByRole` query over using `waitFor` + `getByRole`
  const selection = await screen.findByRole('heading', {
    name: /you selected: javascript/i,
  });

  expect(selection).toBeInTheDocument();
  // screen.debug();
});
