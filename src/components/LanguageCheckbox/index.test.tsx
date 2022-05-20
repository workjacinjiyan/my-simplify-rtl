import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LanguageCheckBox from '.';

test('LanguageCheckbox, given selected item, item is checked', async () => {
  render(<LanguageCheckBox />);
  const jsCheckbox = screen.getByRole('checkbox', { name: /javascript/i });
  await userEvent.click(jsCheckbox);

  // error  Use toBeChecked() instead of toHaveAttribute('checked')
  expect(jsCheckbox).toHaveAttribute('checked');

  // error  Use toBeChecked() instead of toHaveProperty('checked', true)
  expect(jsCheckbox).toHaveProperty('checked', true);
});
