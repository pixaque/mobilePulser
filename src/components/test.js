import React, { useRef, useEffect, useState } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const audioData = useState<MediaStream | null>(null);

  const draw = (context, audioData, frameCount) => {


    //console.log(audioData.length);
/*    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    const radius = 20 * Math.sin(frameCount * 0.05) ** 2; // calculate the radius of the circle
    const threshold = 10; // set a threshold for when to draw a pulse
    if (radius > threshold) { // draw a pulse if the radius is above the threshold
      ctx.beginPath();
      ctx.arc(50, 100, radius, 0, 2 * Math.PI);
      ctx.fill();
    }

 */
        const strokeColor = "#eb445a";
        const lineWidth = "default";
        const heightNorm = 1;
        const { height, width } = context.canvas;
        const sliceWidth = width / audioData.length;
        //context.lineWidth = (0, lineWidth)(lineWidth, width);
        context.strokeStyle = strokeColor;
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.moveTo(0, height / 2);
        for (let i = 0; i < audioData.length; i++) {
            const x = i * sliceWidth;
            const fraction = audioData[i] / 255;
            const sectionSize = height * heightNorm;
            const y = fraction * sectionSize + (height - sectionSize) * 0.5;
            context.lineTo(x/2, y);
        }
        context.lineTo(sliceWidth * audioData.length, height / 2);
        context.stroke();
  }
  
  function frequencyValue(audioData) {
    //console.log(255 - waveFormUint(audioData));
    return 255 - waveFormUint(audioData);
  }

  function waveFormUint(array) {
    let min = 256;
    let max = -1;
    for (let current of array) {
        if (current < min)
            min = current;
        if (current > max)
            max = current;
    }

    //console.log(max - min);
    return max - min;
}

  useEffect(() => {
    
    
    //console.log(canvasRef.current.__reactProps$fgoy52smp6.audio);
    console.log(canvasRef.current);
    var _a;

    const audioHistory = new Array((_a = 100) !== null && _a !== void 100 ? _a : 100);
    
    const audioContext = new window.AudioContext();
    const analyser = audioContext.createAnalyser();
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    //console.log("Data Array"+dataArray);
    //const source = audioContext.createMediaStreamSource(canvasRef.current.__reactProps$jtrjzgbsc1.audio);

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      //source.connect(analyser);
      //analyser.getByteTimeDomainData(dataArray);
      console.log(analyser.getByteTimeDomainData(dataArray));
      //audioHistory.push((0, frequencyValue(dataArray)));
      frameCount++
      draw(context, audioHistory, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} audio={audioData} {...props}/>
}

export default Canvas
