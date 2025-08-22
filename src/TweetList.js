import SingleTweet from "./SingleTweet";

function TweetList(props) {
  const tweetList = props.tweets.map((tweet, index) => (
    <SingleTweet key={index} name={tweet.name} message={tweet.message}></SingleTweet>
  ));
  return <>{tweetList}</>;
}
export default TweetList;
