import React, { Component } from 'react';
import { quizData } from './QuizData';

class QuizAfronden extends Component {
    constructor() {
        super();
        this.state = {
           aantalVragen: quizData.length-1,
           aantalFouten: 0
        };
        this.fouten = 0;
    }

    componentDidMount() {
        this.setState({
            aantalFouten: this.fouten // meh blijft nul
        });
        console.log("Er zijn " + this.state.aantalFouten + " fouten gemaakt.")
    }

    valideerAntwoord(id, correct) {
        var antwoord = this.props.antwoorden[id];
        var goedOfFout = false;
        if (parseInt(Number(antwoord)) === correct) {
            goedOfFout = true;
        }
        else {
            goedOfFout = false;
        }
        return goedOfFout;
    }

    render() {
        return (
            <div role="dialog" className='afronding'>
                <div className="afrondingText">
                    <h1>Je bent klaar! &#127881;</h1>
                    Bekijk hieronder je antwoorden.
                </div>
                <div className="afrondingText">        
                    <ul className="afrondingResultaten">
                        {quizData.map((data, key) => {
                            var goedofFout = this.valideerAntwoord(data.id, data.correct)
                            var nummer = data.id + 1;
                            if (goedofFout === true) {
                                return (
                                    <li key={key} className="goud">
                                        {nummer}. 
                                        <span className='correct'>{data.antwoorden[data.correct]}</span>
                                    </li>
                                );
                            }
                            else {
                                return (
                                    <li key={key} className="fout">
                                        {nummer}. 
                                        <span className='incorrect'>{data.antwoorden[this.props.antwoorden[data.id]]}</span>
                                        <span className='correct'>{data.antwoorden[data.correct]}</span>
                                    </li>
                                );
                            }
                        })
                        }
                    </ul>
                </div>
            </div>
        );
    }

}

export default QuizAfronden;
