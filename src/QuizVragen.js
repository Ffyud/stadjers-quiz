import React, { Component } from 'react';
import { quizData } from "./QuizData";
import Vraag from './Vraag';
import QuizAfronden from './QuizAfronden';

class QuizVragen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vraagMeeBezig: 0,
      aantalVragen: quizData.length-1,
      vragenBeantwoord: [],
      antwoorden: [],
      afgerond: false
    };
  }

  antwoordGekozen = (event) => {
    var vraagId = event.currentTarget.dataset.vraag;
    var antwoordBijVraagId = event.currentTarget.dataset.antwoord;
    this.setState({
      vragenBeantwoord: this.state.vragenBeantwoord.concat(vraagId),
      antwoorden: this.state.antwoorden.concat(antwoordBijVraagId),
      vraagMeeBezig: this.state.vraagMeeBezig + 1
    });
  }

  componentDidMount() {
    console.log('------------------------------------------');
    console.log('                                          ');
    console.log('          Welkom bij deze quiz!           ');
    console.log('                                          ');
    console.log(' Dit is een hobbyprojectje, te vinden op: ');
    console.log('  https://github.com/Ffyud/stadjers-quiz  ');
    console.log('                                          ');
    console.log('------------------------------------------');

    console.log("Er zijn " + this.state.aantalVragen + " vragen.");
  }
  componentDidUpdate() {
    if ((this.state.vraagMeeBezig > this.state.aantalVragen) & this.state.afgerond === false) {
      console.log("Alle vragen gehad!")
      this.setState({ afgerond: true })
    }
  }

  render() {
    if (this.state.afgerond === false) {
      return (
        <div>
          {
            quizData.filter(data => data.id === this.state.vraagMeeBezig)
              .map((data, key) => {
                return (
                  <Vraag key={this.state.vraagMeeBezig} antwoordGekozen={this.antwoordGekozen} vraagData={data} />
                );
              })
          }
        </div>
      );
    }
    else {
      return (
        <QuizAfronden antwoorden={this.state.antwoorden} />
      )
    }
  }
}

export default QuizVragen;
