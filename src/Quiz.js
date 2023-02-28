import React, { Component } from 'react';
import quizData from "./quiz.json";
import Vraag from './Vraag';
import QuizAfronden from './QuizAfronden';

class Quiz extends Component {

  constructor(props) {
    super(props);

    // Maak een array met willekeurig vragen uit de QuizData
    const quizDataRand = []
    var aantalHeleSetVragen = quizData.length
    var aantalVragenSpelen = 25
    var i = 0;
    while (i < aantalVragenSpelen) {
      var randomIndex = Math.floor(Math.random() * aantalHeleSetVragen)
      var randomVraag = quizData[randomIndex]
      if(quizDataRand.indexOf(randomVraag) === -1) {
        quizDataRand.push(randomVraag)
        i++
      }
    }
    
    this.state = {
      aantalVragenTotaal: quizData.length,
      randomSetVragen: quizDataRand,
      vraagMeeBezig: 0,
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
    console.log("Er zijn " + this.state.aantalVragenTotaal + " vragen.");
    console.log("Er worden " + this.state.randomSetVragen.length + " vragen gesteld.")
  }

  componentDidUpdate() {
    if ((this.state.vraagMeeBezig === this.state.randomSetVragen.length) & this.state.afgerond === false) {
      console.log("Alle vragen gehad!")
      this.setState({ afgerond: true })
    }
    else {
      console.log("Vraag " + this.state.vraagMeeBezig + " van de " + this.state.randomSetVragen.length + " beantwoord.")
    }
  }

  render() {
    if (this.state.afgerond === false) {
      return (
        <div>
          {
            this.state.randomSetVragen
              .map((data, key) => {
                if(key === this.state.vraagMeeBezig) {
                return (
                  <Vraag key={this.state.vraagMeeBezig} nummer={this.state.vraagMeeBezig+1} antwoordGekozen={this.antwoordGekozen} vraagData={data} />
                );
                }
                else
                {
                  return null
                }
              })
          }
        </div>
      );
    }
    else {
      return (
        <QuizAfronden vragenset={this.state.randomSetVragen} antwoorden={this.state.antwoorden} />
      )
    }
  }
}

export default Quiz;
