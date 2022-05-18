import * as React from 'react';
import likeReducer from './likeReducer';

import thumbsDown from 'src/assets/images/thumbs-down.svg';
import thumbsUp from 'src/assets/images/thumbs-up.svg';

interface IVoteProps {
  totalGlobalLikes: number;
}

const Vote = ({ totalGlobalLikes }: IVoteProps) => {
  const [state, dispatch] = React.useReducer(likeReducer, {
    totalLikes: totalGlobalLikes,
    hasVoted: false,
  });

  const { totalLikes, hasVoted, clickedLike, clickedDislike } = state;

  const handleLikeVote = () =>
    dispatch({
      type: 'LIKE',
    });
  const handleDislikeVote = () =>
    dispatch({
      type: 'DISLIKE',
    });

  return (
    <div className="d-flex d-inline-flex flex-column h1 m-2">
      <h5>Note: You are not allowed to change your vote once selected!</h5>
      <button
        onClick={handleLikeVote}
        disabled={hasVoted}
        style={
          clickedLike
            ? {
                background: 'green',
              }
            : undefined
        }
      >
        <img src={thumbsUp} alt="thumbs up" />
      </button>
      <div>{totalLikes}</div>
      <button
        onClick={handleDislikeVote}
        disabled={hasVoted}
        style={
          clickedDislike
            ? {
                background: 'red',
              }
            : undefined
        }
      >
        <img src={thumbsDown} alt="thumbs down" />
      </button>
    </div>
  );
};

export default Vote;
