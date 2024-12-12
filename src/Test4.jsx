import { useState } from "react";
import "./Test4.css";

function Test4(data) {
  const [count, setCount] = useState(3);

  return (
    <div id="test4" className="testimonialBody">
      <span id="review">{data[count].review}</span>
      <div className="swipeList">
        <span
          id="previous"
          onClick={() =>
            setCount((count) => {
              if (count == 0) return (count = 3);
              else return count - 1;
            })
          }
        >{`<`}</span>
        <span id="name">{data[count].name}</span>
        <span
          id="Next"
          onClick={() =>
            setCount((count) => {
              if (count == 3) return (count = 0);
              else return count + 1;
            })
          }
        >{`>`}</span>
      </div>
    </div>
  );
}

export default Test4;
