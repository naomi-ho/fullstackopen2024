// Header takes care of rendering the name of the course
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

// Part renders the name and number of exercises of one part
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

// Content renders 3 part components
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part} exercise={props.parts[0].exercise} />
      <Part part={props.parts[1].part} exercise={props.parts[1].exercise} />
      <Part part={props.parts[2].part} exercise={props.parts[2].exercise} />
    </div>
  );
};

// Total renders the total number of exercises
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercise}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { part: "Fundamentals of React", exercise: 10 },
    { part: "Using props to pass data", exercise: 7 },
    { part: "State of a component", exercise: 14 },
  ];
  const part1 = "Fundamentals of React";

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        exercise={parts[0].exercise + parts[1].exercise + parts[2].exercise}
      />
    </div>
  );
};

export default App;
