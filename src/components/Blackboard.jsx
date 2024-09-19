import React, { useRef, useState, useEffect } from 'react';

const Blackboard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    ctx.closePath();
  };

  const resetCanvas = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  useEffect(() => { 
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineWidth = 1;
    context.lineCap = 'round'; 
    context.strokeStyle = '#D9D9D9';
    setCtx(context);
  }, []);

  return (
    <div className="blackboard">
      <h2>Blackboard</h2>
      <canvas
        ref={canvasRef}
        width={450}
        height={462}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className="blackboard-canvas"
      />
      <button onClick={resetCanvas} className="black-reset">
        Reset
      </button>
    </div>
  );
};

export default Blackboard;
