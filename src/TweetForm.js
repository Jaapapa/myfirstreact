import { useState } from "react";

function TweetForm(props) {
  const [name, setName] = useState("");
  const changeName = function (e) {
    setName(e.target.value);
  };

  const [message, setMessage] = useState("");
  const changeMessage = function (e) {
    setMessage(e.target.value);
  };

  return (
    <form id="tweetform" onSubmit={(e) => props.onSubmit(e, name, message)}>
      <label className="form-label" htmlFor="displayname">
        Display name:
      </label>
      <input
        className="form-control"
        type="text"
        id="displayname"
        name="displayname"
        value={name}
        placeholder="Enter your name"
        onChange={changeName}
      />
      <label className="form-label" htmlFor="message">
        Message:
      </label>
      <textarea
        className="form-control"
        id="message"
        name="message"
        value={message}
        placeholder="Enter your message"
        onChange={changeMessage}
      />
      <input className="btn btn-dark" type="submit" value="Submit" />
    </form>
  );
}

export default TweetForm;
