import "./App.css";
import Form from "./Form";
import Current from "./Current";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Form />
          <Current />
          <Forecast />
        </div>
        <p>
          <a
            href="https://github.com/melanyyaan/weather-react"
            target="_blank"
            rel="noreferrer"
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
