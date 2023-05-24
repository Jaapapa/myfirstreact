import "bootstrap/dist/css/bootstrap.css";
import TweetForm from "./TweetForm";
import TweetList from "./TweetList";
import { useState } from "react";

function App() {
  const [tweets, setTweets] = useState([
    { name: "Jaap", message: "Hoi" },
    { name: "Johnny Bravo", message: "Damn, I'm pretty" }
  ]);
  const onSubmit = function (event, name, message) {
    event.preventDefault();
    const newTweets = [...tweets, {name: name, message: message}];
    setTweets(newTweets);
  };
  return (
    <>
      <TweetForm onSubmit={onSubmit} bla="propexample"></TweetForm>
      <TweetList tweets={tweets}></TweetList>
    </>
  );
}

export default App;
