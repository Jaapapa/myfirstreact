import SingleTweet from "./SingleTweet";

function TweetList(props) {
  const tweetList = props.tweets.map((tweet) => (
    <SingleTweet key={tweet.name + tweet.message} name={tweet.name} message={tweet.message}></SingleTweet>
  ));
  return (
    <>{tweetList}</>
  );
}
export default TweetList;
