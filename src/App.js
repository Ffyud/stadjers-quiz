import React, { Component } from 'react';
import './App.css';
import QuizVragen from './QuizVragen';
import { quizData } from './QuizData';

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

  vanStartEnter = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        vanStart: true
      });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.vanStartEnter);

    console.log('------------------------');
    console.log('                        ');
    console.log('Welkom bij deze quiz!   ');
    console.log('Hier loggen we wat info.');
    console.log('------------------------');
    console.log('https://github.com/Ffyud/stadjers-quiz');
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
          <div role="dialog" className="intro" >
            <div className="introText">
            <h1>Welkom bij de <span className='title'>Stadjers Quiz! &#x1F44B; </span></h1>
            Beantwoord 25 vragen over Stad Groningen en laat zien dat jij een kenner bent. <br/><br/>Er zijn in totaal {quizData.length} vragen, dus speel gerust nog eens.<br/><br/>
            </div>
            <div className="introStart" onClick={this.vanStart}>
              <div>START</div>
            </div>
           
            <div className="deelMe">
            Deel deze quiz vooral: <a href="https://stadjers-quiz.nl">stadjers-quiz.nl</a>
            </div>
          </div>
        </div>
      );
    }

  }
}

export default App;
