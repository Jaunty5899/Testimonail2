import "./Test1.css";
import UserCard from "./UserCard";

function Test1({ name, position, rating, review }) {
  return (
    <div>
      <div id="test1" className="testimonialBody">
        <span id="review">{review}</span>
        <span id="rating">
          {rating > 3 ? "Highly Recommended" : "Recommended"}
        </span>
      </div>
      <UserCard Name={name} Position={position} />
    </div>
  );
}

export default Test1;
