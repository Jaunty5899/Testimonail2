import "./Test4.css";
import UserCard from "./UserCard";

function Test4({ name, review }) {
  return (
    <div id="test4" className="testimonialBody">
      <span id="review">{review}</span>
      <div className="swipeList">
        <span id="previous">{`<`}</span>
        <span id="name">{name}</span>
        <span id="Next">{`>`}</span>
      </div>
    </div>
  );
}

export default Test4;
