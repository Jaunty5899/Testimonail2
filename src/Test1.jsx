import "./Test1.css";
import UserCard from "./UserCard";

function Test1({ Name, Position, Rating, Review }) {
  return (
    <div>
      <div id="test1" className="testimonialBody">
        <span id="review">{Review}</span>
        <span id="rating">
          {Rating > 3 ? "Highly Recommended" : "Recommended"}
        </span>
      </div>
      <UserCard Name={Name} Position={Position} />
    </div>
  );
}

export default Test1;
