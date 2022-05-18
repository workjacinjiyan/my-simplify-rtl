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

test.skip('given image and vote status, renders button to screen', () => {
  const stubHandleVote = jest.fn();
  const stubAltText = 'vote like';

  render(
    <VoteBtn
      handleVote={stubHandleVote}
      hasVoted={false}
      imgSrc={stubThumbsUp}
      altText={stubAltText}
    />
  );

  const image = screen.getByRole('img', { name: stubAltText });
  const button = screen.getByRole('button', { name: stubAltText });

  expect(image).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});
