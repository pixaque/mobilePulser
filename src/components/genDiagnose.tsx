import { IonCol, IonGrid, IonRow, IonIcon  } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import { IonButton, IonText, IonFabButton, IonFabList, CreateAnimation, Animation } from '@ionic/react';
import { heart, chevronForwardCircle, document, colorPalette, globe, play } from 'ionicons/icons';
import React, { useState, useEffect } from "react";
import {useHistory, useLocation, useParams } from 'react-router-dom';
import { Visualizer } from "react-sound-visualizer";
import RenderPeak from './heartBeat';

import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  var [counter, setCounter] = useState(74);
  const [audio, setAudio] = useState<MediaStream | null>(null);
  const [mode, setMode] = useState<"current" | "continuous">("continuous");

  function startAudio() {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(setAudio);
  }

  function stopAudio() {
    if (!audio) return;

    audio.getTracks().forEach((track) => track.stop());
  }

  function changeMode(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value !== "current" && e.target.value !== "continuous") return;

    setMode(e.target.value);
  }

  function capitalizeWords (str: string) {
    return str
      .toLowerCase()
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  let slug:any = useParams();

  //startAudio();
  /*
  let timer: NodeJS.Timeout;
  useEffect(() => {
    clearInterval(timer)
    timer = setInterval(() => {
       if (counter === 78) {
          clearInterval(timer)
          setCounter(74)
          return
        }
       setCounter(prev => prev+1)
       counter++
       
    },500)
    return () => clearInterval(timer)

   },[counter])

   */
   
  return (

    <IonPage>
      
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton default-href="/home"></IonBackButton>
          </IonButtons>
            <IonTitle>{capitalizeWords(slug["slug"])}</IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true} className="ion-padding">

      <IonGrid>
          
          <IonRow>
              <IonCol>
                <IonText color="success">
                  <h1 style={{ fontSize: '520%' }}>{counter}
                  
                  </h1>
                </IonText>
              </IonCol>
              <IonCol>

              <CreateAnimation
                duration={1000}
                fromTo={{
                  property: 'transform',
                  fromValue: 'scale(1.3)',
                  toValue: `scale(1)`,
                }}
                easing="ease-out"
                play={true}
                iterations={20000}>

                  
                  <IonIcon style={{width: "110px", height: "110px"}} icon={heart} color="danger" size="large" className="square"></IonIcon>

                </CreateAnimation>

                
              </IonCol>
          </IonRow>

          <IonRow>
              <IonCol>

                <IonButton onClick={startAudio}>Start Recording</IonButton>
                <IonButton onClick={stopAudio}>Stop Recording</IonButton>

                <Visualizer
                  audio={audio}
                  mode={mode}
                  lineWidth={"thick"}
                  strokeColor="#eb445a"
                  autoStart={true}
                >
                  {({ canvasRef, stop, start, reset }) => (
                    <>
                      <canvas ref={canvasRef} width={300} height={100} />

                      <div>
                        <IonButton onClick={start}>Start</IonButton>
                        <IonButton onClick={stop}>Stop</IonButton>
                        <IonButton onClick={reset}>Reset</IonButton>
                      </div>
                    </>
                  )}
                </Visualizer>

                <div>
                  <label htmlFor="mode">Mode:</label>

                  <select id="mode" onChange={changeMode}>
                    <option value="current">Current</option>
                    <option value="continuous">Continuous</option>
                  </select>
                </div>

                <RenderPeak audio={audio} />

              </IonCol>
          </IonRow>

        </IonGrid>
          
        
      </IonContent>
    

    </IonPage>

    
  );
};

export default ExploreContainer;
