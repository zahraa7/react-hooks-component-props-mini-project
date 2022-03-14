const roundTo = (number, x) => Math.ceil(number / x) * x;

//It returns the emoji depeding on the minutes.
const handleEmoji = (minutes) => {
  let res = "";
  const limit = minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const roundedMinutes = roundTo(minutes, limit);
  const count = roundedMinutes / limit;
  for (let i = 0; i < count; i++) res += emoji;
  return res;
};

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => (
  <article>
    <h3>{title}</h3>
    <small>
      {date} • {handleEmoji(minutes)} {minutes} min read
    </small>
    <p>{preview}</p>
  </article>
);

export default Article;