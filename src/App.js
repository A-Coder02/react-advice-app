import axios from "axios";
import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: "",
      id: 0,
    };
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => this.setState({ ...res.data.slip }));
  };

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    this.fetchAdvice();
  }

  render() {
    const { advice, id } = this.state;
    return (
      <div className="app">
        <div>
          <div className="container">
            <div className="card">
              <div className="advice-number">ADVICE #{id}</div>
              <div className="quote">"{advice}"</div>
              <div className="divider">
                <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                    <g transform="translate(212)" fill="#CEE3E9">
                      <rect width="6" height="16" rx="3" />
                      <rect x="14" width="6" height="16" rx="3" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            <button onClick={this.fetchAdvice} className="dice">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 
      4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 
      1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                  fill="#202733"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
