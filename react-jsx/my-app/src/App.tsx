import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React JSX</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Total Button Clicks: {count}
        </button>
        <p>
          JSX is a JavaScript extension that allows developers to write the code
          for dynamic DOM creation in a syntax that is very similar to standard
          HTML. JSX allows the developer to quickly create complex HTML
          structures, add attribute values, and apply CSS styling via classes.
        </p>
        <p>
          JSX is transformed using a tool like Babel. Babel compiles JSX down to
          React.createElement() calls. These calls create JavaScript objects for
          each element, which React calls "React elements". React takes these
          React elements and ultimately renders them to the DOM. This is done
          using the ReactDOM.render() method in web applications. This method
          takes a React element and a DOM container node, and updates the
          container with the React elements and any of its children.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
