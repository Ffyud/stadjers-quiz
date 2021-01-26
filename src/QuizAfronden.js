import React, { Component } from 'react';
import { quizData } from './QuizData';

class QuizAfronden extends Component {
    constructor() {
        super();

    }

    componentDidMount() {
        console.log("Afgerond. We hebben antwoorden hoor: " + this.props.antwoorden)
    }

    valideerAntwoord(id, correct) {
        var antwoord = this.props.antwoorden[id];
        var goedOfFout = false;
        if (parseInt(Number(antwoord)) === correct) {
            goedOfFout = true;
        }
        return goedOfFout;
    }

    render() {
        const { antwoorden } = this.props;
        return (
            <div className='afronding'>
                <div className="afrondingText">
                    <h1>Je bent klaar!</h1>
                    <ul className="afrondingResultaten">
                        {quizData.map((data, key) => {
                            var nummer = data.id + 1;
                            if (this.valideerAntwoord(data.id, data.correct) === true) {
                                return (
                                    <li className="goud">
                                        {nummer}.
                                        <span className='correct'>{data.antwoorden[data.correct]}</span>
                                    </li>
                                );
                            }
                            else {
                                return (
                                    <li className="fout">
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
