// the function defining the component has a parameter props (props pass data to components)
// the parameter receives and object, which has fields corresponding to all the "props" the user of the component defines
// if the value of a prop is achieved using JS, it must be wrapped with curly braces

// props passed into the component are now directly destructured into variables, name and age
const Hello = ({ name, age }) => {
  // helper function is defined inside another function that defines the component's behaviour
  const bornYear = () => new Date().getFullYear() - age;

  // content of a React component usually needs to contain 1 root element (e.g. div)
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

// defines a React component with the name App
// the function returns the value of the expression
const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    // fragment = wrap element to be returned by the component with an empty element
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
};

export default App;
