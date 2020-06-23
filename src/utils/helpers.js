export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatQuestion(question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;
  const { answers } = authedUser;
  return {
    id,
    timestamp,
    optionOne: optionOne.text,
    optionTwo: optionTwo.text,
    name,
    avatarURL,
    answer: answers[id] || null,
  };
}
