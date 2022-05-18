interface IProps {
  handleVote: () => void;
  hasVoted: boolean;
  imgSrc: string;
  altText: string;
}

const VoteBtn = (
  props: IProps
) => {
  return (
    <button
      onClick={
        props.handleVote
      }
      disabled={
        props.hasVoted
      }
    >
      <img
        src={props.imgSrc}
        alt={props.altText}
      />
    </button>
  );
};

export default VoteBtn;
