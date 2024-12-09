import "./Test2.css";
import UserCard from "./UserCard";

function Test2({ Name, Position, Review }) {
  return (
    <div id="test2" className="testimonialBody">
      <span id="review">{Review}</span>
      <UserCard Name={Name} Position={Position} />
    </div>
  );
}

export default Test2;
