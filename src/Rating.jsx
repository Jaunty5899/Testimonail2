import "./Rating.css";

function Rating({ data }) {
  let rate = "";
  for (let i = 1; i < 6; i++) {
    if (i <= data) {
      rate += "★";
    } else {
      rate += "☆";
    }
  }
  return <div className="stars">{rate}</div>;
}

export default Rating;
