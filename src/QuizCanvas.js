import React, { useRef, useEffect } from 'react'

const QuizCanvas = props => {

    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.fillStyle = '#F8C11E'
        ctx.fillRect(0,0,200,200)
        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle = '#000000'

        ctx.arc(50, 100, 20, 0, 2*Math.PI)
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = '#FFFFFF'
        ctx.font = "50px Arial";
        ctx.fillText("95%",100,100)
        ctx.fill()
      }

    useEffect(() => {
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        //Our draw come here
        draw(context)
      }, [draw])

    return (
        <canvas width="200" height="200" ref={canvasRef} />
    );

}

export default QuizCanvas;
