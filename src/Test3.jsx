import "./Test3.css";
import Rating from "./Rating";
import UserCard from "./UserCard";

function Test3({ name, position, rating, review }) {
  return (
    <div id="test3" className="testimonialBody">
      <Rating data={rating} />
      <UserCard Name={name} Position={position} />
      <span id="review">{review}</span>
    </div>
  );
}

export default Test3;
