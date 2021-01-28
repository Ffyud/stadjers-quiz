import React, { Component } from 'react';
import { quizFotos } from './QuizFotos';

class Vraag extends Component {
  constructor() {
    super();
    this.state = { imgLoaded: false};
  }

  isGeladen = () => {
    this.setState({ imgLoaded: true});
  }

  kiesAntwoord = (event) => {
    this.props.antwoordGekozen(event)
  }

  geefFoto(id) {
    var foto = quizFotos["foto" + id]
    return foto
  }

  toonNiveau(niveau) {
    var niveauString;
    switch(niveau) {
      case 1:
        niveauString = "makkelijk"
        break;
      case 2:
        niveauString = "gemiddeld"
        break;
      case 3:
        niveauString = "moeilijk"
        break;
      default:
        niveauString = "gemiddeld"
        break;
    }
    return niveauString;
  }

  render() {
    const { vraagData } = this.props;
    return (
      <div key={vraagData.id} className="vraagKader">
        <div className={"niveauBadge " + this.toonNiveau(vraagData.niveau) +""}>{this.toonNiveau(vraagData.niveau)}</div>
        <div className="vraagOpties">
          <div className="vraag">{vraagData.vraag}</div>
          <ul>
            <li aria-label={vraagData.antwoorden[0]} onClick={this.kiesAntwoord.bind(this)} data-vraag={vraagData.id} data-antwoord='0'>
              <span className='antwoordNummer'>1</span><span>{vraagData.antwoorden[0]}</span>
            </li>
            <li aria-label={vraagData.antwoorden[1]} onClick={this.kiesAntwoord.bind(this)} data-vraag={vraagData.id} data-antwoord='1'>
              <span className='antwoordNummer'>2</span><span>{vraagData.antwoorden[1]}</span>
            </li>
            <li aria-label={vraagData.antwoorden[2]} onClick={this.kiesAntwoord.bind(this)} data-vraag={vraagData.id} data-antwoord='2'>
              <span className='antwoordNummer'>3</span><span>{vraagData.antwoorden[2]}</span>
            </li>
            <li aria-label={vraagData.antwoorden[3]} onClick={this.kiesAntwoord.bind(this)} data-vraag={vraagData.id} data-antwoord='3'>
              <span className='antwoordNummer'>4</span><span>{vraagData.antwoorden[3]}</span>
            </li>
          </ul>
        </div>
        {this.state.imgLoaded ? null : 
          <div className='imgPlaceholder'></div>
        }
        <img alt="derk!" style={this.state.imgLoaded ? {} : {display: 'none'}} onLoad={this.isGeladen} src={this.geefFoto(vraagData.id)} />
      </div>
    );
  }

}

export default Vraag;
