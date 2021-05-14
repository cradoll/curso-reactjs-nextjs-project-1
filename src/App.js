import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    name: "Christian Radoll",
    counter: 0,
  };

  handlePClick = () => {
    this.setState({ name: "Júnior" });
  };

  handleAClick = (event) => {
    event.preventDefault(); //Não faz o que o evento iria fazer antes
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { name, counter } = this.state;
    //return <h1>Oi</h1>;
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p onClick={this.handlePClick}>
              {name} - {counter}
            </p>
            <a
              onClick={this.handleAClick}
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Este é o link
            </a>
          </header>
        </div>
        <div>Oi</div>
      </>
    );
  }
}

/*function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Olá mundo!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>Oi</div>
    </>
  );
}*/

export default App;
