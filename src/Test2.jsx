import "./Test2.css";
import UserCard from "./UserCard";

function Test2({ name, position, review }) {
  return (
    <div id="test2" className="testimonialBody">
      <span id="review">{review}</span>
      <UserCard Name={name} Position={position} />
    </div>
  );
}

export default Test2;
