import "./App.css";
import Current from "./Current";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Current defaultCity="Cologne" />
        </div>
        <p>
          <a
            href="https://github.com/melanyyaan/weather-react"
            target="_blank"
            rel="noopener noreferrer"
            className="code_link"
          >
            Open-source code
          </a>
          &nbsp;by Milana Tsybulina
        </p>
      </div>
    </div>
  );
}

export default App;
