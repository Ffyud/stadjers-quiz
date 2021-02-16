import React, { Component } from 'react';
import { quizData } from './QuizData';
import QuizCanvas from './QuizCanvas';

class QuizAfronden extends Component {
    constructor(props) {
        super(props);
        this.state = {
           alleVragen: quizData,
           gemaakteVragen: this.props.vragenset,
           aantalVragen: this.props.vragenset.length,
           aantalFouten: 0,
           fouteAntwoorden: [],
           eindCijfer: 1
        };
        
    }

    valideerAntwoord = (index) => {
        var antwoordGegeven = this.props.antwoorden[index];
        var correctAntwoord = this.state.gemaakteVragen[index]['correct'];
        var goedOfFout = false;
        if (parseInt(Number(antwoordGegeven)) === correctAntwoord) {
            goedOfFout = true;
        }
        else {
            goedOfFout = false;
        }
        return goedOfFout;
    }

    componentDidMount() {
        var fouteAntwoordenArray = [];
        this.state.gemaakteVragen.forEach((data, key) => {
            // Array vullen met true of false per antwoord
            fouteAntwoordenArray.push(this.valideerAntwoord(key));
        });

        this.setState({
            fouteAntwoorden: fouteAntwoordenArray,
            aantalFouten: this.state.aantalVragen - fouteAntwoordenArray.filter(Boolean).length,
            eindCijfer: Math.round(((this.state.aantalVragen-(this.state.aantalVragen - fouteAntwoordenArray.filter(Boolean).length)) / this.state.aantalVragen) * 100)
        }, () => {
            console.log(this.state.aantalFouten + " fouten gemaakt!");
            console.log("Het eindcijfer is: " + this.state.eindCijfer + "%")
            console.log("Dankjewel voor het spelen! Dit is een hobbyproject: Opmerkingen of bugs kun je kwijt op https://github.com/Ffyud/stadjers-quiz/issues.");
        });
    }



    render() {
        return (
            <div role="dialog" className='afronding'>
                 <div className="afrondingText">
                     <h1>Bam, je bent klaar! &#127881;</h1>
                     Man man man, wat een werk. Bekijk hieronder het resultaat.
                 </div>
                <div className="afrondingText diploma">
                    <QuizCanvas eindCijfer={this.state.eindCijfer}/>
                    <div className="delen"><span>Deel de Quiz gerust met de kameraden. &#127867;</span>
                        <a href="https://stadjers-quiz.nl">stadjers-quiz.nl</a>
                    </div>
                </div>
                 <div className="afrondingText">        
                     <ul className="afrondingResultaten">
                         {this.state.gemaakteVragen.map((data, key) => {
                             var nummer = key + 1;
                             if (this.state.fouteAntwoorden[key] === true) { 
                            return (
                                   <li key={key} className="goud">
                                        {nummer}. 
                                        <span className='correct'> {data.antwoorden[data.correct]}</span>
                                   </li>
                               );
                             }
                             else {
                                 return (
                                    <li key={key} className="fout">
                                     {nummer}. 
                                        <span className='incorrect'> {data.antwoorden[this.props.antwoorden[key]]}</span>
                                         <span className='correct'> {data.antwoorden[data.correct]}</span>
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
