/*
import { useState, useEffect, useRef } from 'react';
import { IonCol, IonGrid, IonRow, IonIcon  } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import { IonButton, IonText, IonFabButton, IonFabList, CreateAnimation, Animation } from '@ionic/react';
import {useHistory, useLocation, useParams } from 'react-router-dom';
import { heart, chevronForwardCircle, document, colorPalette, globe, play } from 'ionicons/icons';
import './ExploreContainer.css';
import { Visualizer } from 'react-sound-visualizer';
import Canvas from './test';

const GenDiagnose: React.FC = () => {
    
    //  Counter is a state initialized to 0
    var [counter, setCounter] = useState(74);
    const [audio, setAudio] = useState<MediaStream | null>(null);
    const [mode, setMode] = useState<"current" | "continuous">("continuous");

    const startAudio = () => {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: false,
        })
        .then(setAudio);
    };
  
    const stopAudio = () => {
      if (audio) {
        audio.getTracks().forEach((track) => track.stop());
      }
      // setAudio(null);
    };

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

     var capitalizeWords = (str: string) => {
      return str
        .toLowerCase()
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    let slug:any = useParams();
    //startAudio();
    //console.log(slug["slug"]);
      
    //setInputValue(slug["slug"]);
    
    
  return (
    <>
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
        
        {
/*
<IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
          <IonFabButton>
            <IonIcon icon={heart} size="large"></IonIcon>
          </IonFabButton>
          <IonFabList side="bottom">
            <IonFabButton>
              <IonIcon icon={document}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
        

        <IonGrid>
          
          <IonRow>
              <IonCol>
                <IonText color="success">
                  <h1 style={{ fontSize: '520%' }}>{counter}</h1>
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
              <IonText color="success">
                <h2>Another</h2><Canvas audio={audio} />
</IonText>
<br/>
        <IonButton onClick={startAudio}>Start recording</IonButton>
        <IonButton onClick={stopAudio}>Stop recording</IonButton>
        
        <div>        
          <Visualizer audio={audio} mode={mode} lineWidth={"thick"} strokeColor={"#eb445a"}>
            {({ canvasRef, start, stop, reset }) => (
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
        </div>

      <div>
        <label htmlFor="mode">Mode:</label>
        <div>
          <select onChange={(e) => setMode(e.target.value as "continuous" | "current")}>
            <option value="" style={{ display: "none" }}>
              None
            </option>
            <option value="continuous">Continuous</option>
            <option value="current">Current</option>
          </select>
        </div>
      </div>

              </IonCol>
          </IonRow>
        </IonGrid>
        <h1>Suggested by the Dr ABC</h1>
        <ul>
          <li>Physically check the patient every 1 hour.</li>
          <li>Inform the on duty Dr asap if the beat fall.</li>
          <li>etc. etc.</li>
        </ul>
      </IonContent>


    
    </IonPage>


    
    </>
  );
};

export default GenDiagnose;
*/
export {}