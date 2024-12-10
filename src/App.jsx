import "./App.css";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

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
];

function App() {
  return (
    <div className="container">
      <Test1 {...data[0]} />
      <Test2 {...data[1]} />
      <Test3 {...data[2]} />
    </div>
  );
}

export default App;
