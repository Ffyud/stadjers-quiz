import React, { Component } from 'react';

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

  render() {
    const { vraagData } = this.props;

    return (
      <div key={vraagData.id} className="vraagKader">
        {this.state.imgLoaded ? null : 
          <div className='imgPlaceholder'></div>
        }
        <img alt="derk" style={this.state.imgLoaded ? {} : {display: 'none'}} onLoad={this.isGeladen} src={vraagData.afbeelding} />
        <div className="vraagOpties">
          <div className="vraag">{vraagData.vraag}</div>
          <ul>
            <li onClick={this.kiesAntwoord.bind(this)} data-vraag={vraagData.id} data-antwoord='1'>
              <span className='antwoordNummer'>1</span><span>{vraagData.antwoorden[0]}</span>
            </li>
            <li onClick={this.kiesAntwoord.bind(this)} data-vraag={vraagData.id} data-antwoord='2'>
              <span className='antwoordNummer'>2</span><span>{vraagData.antwoorden[1]}</span>
            </li>
            <li onClick={this.kiesAntwoord.bind(this)} data-vraag={vraagData.id} data-antwoord='3'>
              <span className='antwoordNummer'>3</span><span>{vraagData.antwoorden[2]}</span>
            </li>
            <li onClick={this.kiesAntwoord.bind(this)} data-vraag={vraagData.id} data-antwoord='4'>
              <span className='antwoordNummer'>4</span><span>{vraagData.antwoorden[3]}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Vraag;