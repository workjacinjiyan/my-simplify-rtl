import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import VoteBtn from './VoteBtn';
import thumbsUp from 'assets/images/thumbs-up.svg';

test.skip('invoke hanldeVote', async () => {
  const mockHandleVote = jest.fn();

  render(
    <VoteBtn
      handleVote={mockHandleVote}
      hasVoted={false}
      imgSrc={thumbsUp}
      altText="vote like"
    />
  );

  await userEvent.click(
    screen.getByRole('button', {
      name: /vote like/i,
    })
  );

  expect(mockHandleVote).toHaveBeenCalled();
  expect(mockHandleVote).toHaveBeenCalledTimes(1);
});
