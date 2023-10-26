import "./App.css";
import Form from "./Form";
import Current from "./Current";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Form />
          <Current />
          <p>
            <a
              href="https://github.com/melanyyaan/weather-app"
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
    </div>
  );
}

export default App;
