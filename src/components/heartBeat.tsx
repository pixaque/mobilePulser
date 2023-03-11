import React, { useEffect, useRef, useState } from "react";
import { IonText } from '@ionic/react';
import { waveFormUint } from "sound-visualizer/helpers/pure";
import { startAnalysis } from "sound-visualizer/helpers/impure";

import "./ExploreContainer.css";

interface RenderPeakProps {
  audio: MediaStream | null;
}

const RenderPeak: React.FC<RenderPeakProps> = (props) => {
  const { audio } = props;

  const [heartbeats, setHeartbeats] = useState<number[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!audio) return;

    const { analyse, disconnect } = startAnalysis(audio);

    const MIN_FREQUENCY = 40;
    const MAX_FREQUENCY = 200;
    const MIN_PEAK_VALUE = 100;

    let previousTimeStamp: number;
    let lastHeartbeatTimeStamp: number;

    function tick(timestamp: number) {
      if (
        previousTimeStamp === undefined ||
        timestamp - previousTimeStamp > 100
      ) {
        const audioData = analyse();
        const frequencyData = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(frequencyData);

        const peakValue = waveFormUint(audioData);
        const frequencyPeak = frequencyData.findIndex(
          (f) => f > MIN_PEAK_VALUE && f >= MIN_FREQUENCY && f <= MAX_FREQUENCY
        );

        if (peakValue > MIN_PEAK_VALUE && frequencyPeak >= 0) {
          if (lastHeartbeatTimeStamp) {
            const timeSinceLastHeartbeat = timestamp - lastHeartbeatTimeStamp;
            setHeartbeats((prev) => [...prev, timeSinceLastHeartbeat]);
          }

          lastHeartbeatTimeStamp = timestamp;
        }

        previousTimeStamp = timestamp;
      }

      animationFrameId.current = requestAnimationFrame(tick);
    }

    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(audio);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);
    animationFrameId.current = requestAnimationFrame(tick);

    return () => {
      disconnect();
      if (animationFrameId.current !== null)
        cancelAnimationFrame(animationFrameId.current);
      audioContext.close();
    };
  }, [audio]);

  function calculateHeartRate () {
    const sum = heartbeats.reduce((prev, curr) => prev + curr, 0);
    const averageTimeBetweenHeartbeats = sum / heartbeats.length;
    const heartRate = 60 / (averageTimeBetweenHeartbeats / 1000);
    return Math.round(heartRate);
  };

  return (
    <div>
        <div>
            <IonText color="success">
                Heart rate: {heartbeats.length > 1 ? calculateHeartRate() : 0} BPM
            </IonText>
        </div>
    </div>
  );
};


export default RenderPeak;