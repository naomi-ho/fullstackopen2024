import { useState } from "react";

const Header = (props) => {
  return <h1>{props.heading}</h1>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
};

const Total = (props) => {
  return <div>all {props.total}</div>;
};

const Average = (props) => {
  return <div>average {props.average}</div>;
};

const Percentage = (props) => {
  return (
    <div>
      positive {props.percentage} {props.text}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [count, setCount] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setCount(count + 1);
    updateAverage(good + 1, bad, count + 1);
    updatePercentage(good + 1, count + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setCount(count + 1);
    updatePercentage(good, count + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setCount(count + 1);
    updateAverage(good, bad + 1, count + 1);
    updatePercentage(count + 1);
    updatePercentage(good, count + 1);
  };

  const updateAverage = (good, bad, count) => {
    if (count > 0) {
      setAverage(good + (bad * -1) / count);
    }
  };

  const updatePercentage = (good, count) => {
    if (count > 0) {
      setPercentage((good / count) * 100);
    }
  };

  return (
    <div>
      <Header heading={"give feedback"} />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header heading={"statistics"} />
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Total total={good + neutral + bad} />
      <Average average={average} />
      <Percentage percentage={percentage} text="%" />
    </div>
  );
};

export default App;
