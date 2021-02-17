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
          {/* <div className="floating-question">Bernoulliplein</div>
          <div className="floating-question">Grote Markt</div>
          <div className="floating-question">Bommen Berend</div>
          <div className="floating-question">Noorderplantsoen</div>
          <div className="floating-question">Pioenpark</div>
          <div className="floating-question">Vinkhuizen</div>
          <div className="floating-question">Kardinge</div>
          <div className="floating-question">Stadspark</div>
          <div className="floating-question">Vismarkt</div>
          <div className="floating-question">Oosterkerk</div>
          <div className="floating-question">KEI-week</div>
          <div className="floating-question">Sint-Joris</div>
          <div className="floating-question">Stadshuis</div>
          <div className="floating-question">Beijum</div> */}
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
