// Header takes care of rendering the name of the course
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

// Part renders the name and number of exercises of one part
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

// Content renders 3 part components
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  );
};

// Total renders the total number of exercises
const Total = (props) => {
  return <p>Number of exercises {props.exercise}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total exercise={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
