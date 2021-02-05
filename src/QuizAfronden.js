import React, { Component } from 'react';
import { quizData } from './QuizData';
import QuizCanvas from './QuizCanvas';

class QuizAfronden extends Component {
    constructor(props) {
        super(props);
        this.state = {
           vragen: quizData,
           aantalVragen: quizData.length,
           aantalFouten: 0,
           fouteAntwoorden: [],
           eindCijfer: 1
        };
        
    }

    valideerAntwoord = (id) => {
        var antwoord = this.props.antwoorden[id];
        var correctAntwoord = this.state.vragen[id]['correct'];
        var goedOfFout = false;
        if (parseInt(Number(antwoord)) === correctAntwoord) {
            goedOfFout = true;
        }
        else {
            goedOfFout = false;
        }
        return goedOfFout;
    }

    componentDidMount() {
        var fouteAntwoordenArray = [];
        this.state.vragen.forEach((data, key) => {
            fouteAntwoordenArray.push(this.valideerAntwoord(data.id));
        });

        this.setState({
            fouteAntwoorden: fouteAntwoordenArray,
            aantalFouten: this.state.aantalVragen - fouteAntwoordenArray.filter(Boolean).length,
            eindCijfer: Math.round(((this.state.aantalVragen-(this.state.aantalVragen - fouteAntwoordenArray.filter(Boolean).length)) / this.state.aantalVragen) * 100)
        }, () => {
            console.log(this.state.aantalFouten + " fouten gemaakt!");
            console.log("Het eindcijfer is: " + this.state.eindCijfer + "%")
        });
    }



    render() {
        return (
            <div role="dialog" className='afronding'>
                 <div className="afrondingText">
                     <h1>Je bent klaar! &#127881;</h1>
                     Bekijk hieronder het resultaat.
                 </div>
                <div className="afrondingText diploma">
                    <QuizCanvas eindCijfer={this.state.eindCijfer}/>
                </div>
                 <div className="afrondingText">        
                     <ul className="afrondingResultaten">
                         {this.state.vragen.map((data, key) => {
                             var nummer = data.id + 1;
                             if (this.state.fouteAntwoorden[data.id] === true) { 
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
                                        <span className='incorrect'> {data.antwoorden[this.props.antwoorden[data.id]]}</span>
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
