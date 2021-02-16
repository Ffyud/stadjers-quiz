import React from 'react'

const QuizCanvas = props => {

  const eindCijfer = props.eindCijfer

  const { createCanvas} = require('canvas')
  const canvas = createCanvas(200, 160)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#009C56'
  ctx.fillRect(0, 0, 200, 200)
  ctx.closePath()
  ctx.beginPath()
  ctx.fillStyle = '#000000'

  ctx.arc(50, 100, 20, 0, 2 * Math.PI)
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = '#FDFBEF'
  ctx.font = "23px Arial";
  ctx.fillText('De Stadjers Quiz', 13, 30)
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = '#FDFBEF'
  ctx.font = "15px Arial";
  ctx.fillText('voltooid met ', 63, 55)
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = '#FFF';
  ctx.fillRect(30, 65, 145, 55);
  ctx.beginPath();
  ctx.fillStyle = '#009C56';
  ctx.font = "50px Arial";
  if(eindCijfer === 100) {
    ctx.fillText('' + eindCijfer + '%', 38, 110)
  }
  else
  {
    ctx.fillText('' + eindCijfer + '%', 53, 110)
  }
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = '#FDFBEF'
  ctx.font = "15px Arial";
  ctx.fillText('goud beantwoord!', 42, 140)
  ctx.fill()

  return (
    <div>
      <img className="diploma" src={canvas.toDataURL()} />
    </div>
  );

}

export default QuizCanvas;
