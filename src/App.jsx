import "./App.css";
import Test1 from "./Test1";
import Test2 from "./Test2";

const data = [
  {
    Name: "Artem Jones",
    Position: "Junior Frontend Developer",
    Rating: 4,
    Review:
      "I have been solving all the project ideas on roadmap.sh and i am surprised how far i have come from where i started.",
  },
  {
    Name: "Artem Jones",
    Position: "Junior Frontend Developer",
    Rating: 3,
    Review:
      "Since starting my career in 2021, I have only followed one resource, roadmap.sh, it truly helped me go from 0 to having a job and changing the financial trajectory of my family",
  },
];

function App() {
  return (
    <div className="container">
      <Test1 {...data[0]} />
      <Test2 {...data[1]} />
    </div>
  );
}

export default App;
