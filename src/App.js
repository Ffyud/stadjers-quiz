import React, { Component } from 'react';
import './App.css';
import QuizVragen from './QuizVragen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vanStart: false
    };
  }

  vanStart = (event) => {
    this.setState({
      vanStart: true
    });
  }

  

  render() {
    if(this.state.vanStart === true) {
      return (
        <div className="App">
          <QuizVragen/>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <div className="intro">
          <div className="introText">
          Welkom bij de grote Stadjers Quiz!
          Beantwoord 100 vragen over de Stad Groningen en laat zien dat jij de
          ultieme kenner bent.
          </div>
          
          <div className="introStart" onClick={this.vanStart}>Begin!</div>
          </div>
          
        </div>
      );
    }

  }
}

export default App;
