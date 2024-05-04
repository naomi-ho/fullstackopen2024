import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

// by convention, event handler props should start with on, followed by a capital letter
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // useState hook adds state to the component and renders it initialised with the value zero
  // the function returns an array that contains 2 items, which are assigned to variables counter and setCounter
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};

export default App;
