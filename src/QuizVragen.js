import React, { Component } from 'react';
import { quizData } from "./QuizData";
import Vraag from './Vraag';

class QuizVragen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vraagMeeBezig: 1,
      aantalVragen: quizData.length,
      vragenBeantwoord: [],
      antwoorden: []
    };
  }

  antwoordGekozen = (event) => {
    var vraagId = event.currentTarget.dataset.vraag;
    var antwoordBijVraagId = event.currentTarget.dataset.antwoord; 
    this.setState({
      vragenBeantwoord: this.state.vragenBeantwoord.concat(vraagId),
      antwoorden: this.state.antwoorden.concat(antwoordBijVraagId),
      vraagMeeBezig: this.state.vraagMeeBezig+1
    });
  }

  componentDidMount() {
    console.log(this.state.aantalVragen);
  } 
  componentDidUpdate() {
    if(this.state.vraagMeeBezig > this.state.aantalVragen) {
      console.log("Alle vragen gehad!")
    }
  }

  render() {  
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

}

export default QuizVragen;
