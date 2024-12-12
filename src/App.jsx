import "./App.css";
import { useState } from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Test4 from "./Test4";

const data = [
  {
    name: "Artem Jones",
    position: "Junior Frontend Developer",
    rating: 4,
    review:
      "I have been solving all the project ideas on roadmap.sh and i am surprised how far i have come from where i started.",
  },
  {
    name: "Ashish S",
    position: "Junior Frontend Developer",
    rating: 3,
    review:
      "Since starting my career in 2021, I have only followed one resource, roadmap.sh, it truly helped me go from 0 to having a job and changing the financial trajectory of my family",
  },
  {
    name: "Jackie Mackle",
    position: "Engineering Manager",
    rating: 5,
    review:
      "I find myself recommending roadmap.sh to all the internees or junior developers. It's a great way to skill up and grow in your career.",
  },
  {
    name: "Sohan Cho",
    position: "SDE Intern",
    rating: 4,
    review:
      "roadmap.sh is an incredible resource. I was fortunate to discover it during my university days in 2018. Back then, it was just a single repository with three images. It's amazing to see how much impact it has had on millions of lives since then.",
  },
];

function setRandom() {
  return Math.floor(Math.random() * 4);
}

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="container">
      <Test1 {...data[0]} />
      <Test2 {...data[1]} />
      <Test3 {...data[2]} />
      <Test4 {...data} />
    </div>
  );
}

export default App;
