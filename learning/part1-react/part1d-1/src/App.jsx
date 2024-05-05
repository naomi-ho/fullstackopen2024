import { useState } from "react";

// the History component renders completely different React elements depending on the state of the app (i.e. conditional rendering)
const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

function App() {
  // useState function multiple times to create separate "pieces" of state
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  // allClicks array remembers every click that has occurred in the app
  const [allClicks, setAll] = useState([]);

  // when the left button is clicked, add letter L to allClicks array
  // concat method doesn't mutate the existing array but rather returns a new copy of the array with the item added to it
  // the state of React components, like allClicks, must not be mutated directly
  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  // when the right button is clicked, add letter R to allClicks array
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
