function SingleTweet(props) {

  return (
      <div className="tweet">
        <strong>{props.name}</strong>
        <br></br>
        <em>{props.message}</em>
      </div>
  );
}
export default SingleTweet;
