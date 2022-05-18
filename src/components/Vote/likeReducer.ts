type State = {
  totalLikes: number;
  hasVoted: boolean;
  clickedLike?: boolean;
  clickedDislike?: boolean;
};

type Action =
  | {
      type: "LIKE";
      payload?: number;
    }
  | {
      type: "DISLIKE";
      payload?: number;
    };

type TReducer = (
  state: State,
  action: Action
) => State;

const likeReducer: TReducer = (
  state,
  action
) => {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        totalLikes:
          state.totalLikes +
          1,
        hasVoted: true,
        clickedLike: true
      };
    case "DISLIKE":
      return {
        ...state,
        totalLikes:
          state.totalLikes -
          1,
        hasVoted: true,
        clickedDislike: true
      };
    default:
      return state;
  }
};

export default likeReducer;
