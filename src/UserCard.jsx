import "./UserCard.css";

function UserCard({ Name, Position }) {
  return (
    <div className="userCardBody">
      <span id="name">{Name}</span>
      <span id="position">{Position}</span>
    </div>
  );
}

export default UserCard;
