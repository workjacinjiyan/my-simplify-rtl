import * as React from 'react';
import likeReducer from './likeReducer';

import thumbsDown from 'src/assets/images/thumbs-down.svg';
import thumbsUp from 'src/assets/images/thumbs-up.svg';
import VoteBtn from './VoteBtn';

interface IVoteProps {
  totalGlobalLikes: number;
}

const Vote = ({ totalGlobalLikes }: IVoteProps) => {
  const [state, dispatch] = React.useReducer(likeReducer, {
    totalLikes: totalGlobalLikes,
    hasVoted: false,
  });

  const { totalLikes, hasVoted, clickedLike, clickedDislike } = state;

  const handleVoteLike = () =>
    dispatch({
      type: 'LIKE',
    });
  const handleVoteDislike = () =>
    dispatch({
      type: 'DISLIKE',
    });

  return (
    <div className="d-flex d-inline-flex flex-column h1 m-2">
      <h5>Note: You are not allowed to change your vote once selected!</h5>
      <VoteBtn
        handleVote={handleVoteLike}
        hasVoted={hasVoted}
        imgSrc={thumbsUp}
        altText="thumbs up"
      />
      <div>{totalLikes}</div>
      <VoteBtn
        handleVote={handleVoteDislike}
        hasVoted={hasVoted}
        imgSrc={thumbsDown}
        altText="thumbs down"
      />
    </div>
  );
};

export default Vote;
