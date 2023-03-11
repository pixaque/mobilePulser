import { useState, useEffect, useRef } from 'react';
import { IonRedirect, IonButton, IonCol, IonGrid, IonRow, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup } from '@ionic/react';
import { createMemoryHistory } from 'history';
import {useHistory} from 'react-router-dom';
import { usePhotoGallery } from '../hooks/heartBeat';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
    
    const { startDiagnose } = usePhotoGallery();
    const [inputValue, setInputValue] = useState("");
    const history = useHistory();
    
  return (
    <>
    <IonGrid>
      <IonRow>
        <IonCol>

          <IonList>
            <IonRadioGroup name='age'
              onIonChange={(e) => setInputValue(e.detail.value)}
            >
              <IonItem>
                <IonLabel>Toddlers: 1-3 years</IonLabel>
                <IonRadio slot="end" value="toddlers"></IonRadio>
              </IonItem>

              <IonItem>
                <IonLabel>Preschoolers: 3-5 years</IonLabel>
                <IonRadio slot="end" value="preschoolers"></IonRadio>
              </IonItem>

              <IonItem>
                <IonLabel>Children: 6-12 years</IonLabel>
                <IonRadio slot="end" value="children"></IonRadio>
              </IonItem>

              <IonItem>
                <IonLabel>Adolescents: 13-17 years</IonLabel>
                <IonRadio slot="end" value="adolescents"></IonRadio>
              </IonItem>

              <IonItem>
                <IonLabel>Young Adults: 18-24 years</IonLabel>
                <IonRadio slot="end" value="young-adults"></IonRadio>
              </IonItem>

              <IonItem>
                <IonLabel>Adults: 25-64 years</IonLabel>
                <IonRadio slot="end" value="adults"></IonRadio>
              </IonItem>

              <IonItem>
                <IonLabel>Seniors: 65 years and older</IonLabel>
                <IonRadio slot="end" value="seniors"></IonRadio>
              </IonItem>

            </IonRadioGroup>
          </IonList>
          
          
          
          <IonButton onClick={ (e) => {
                e.preventDefault();
                startDiagnose(inputValue);
                //history.push("/adults");
                history.push({
                  pathname: '/genDiagnose/'+inputValue,
                  //state: {slug: inputValue}
                });
                /*
                this.props.history.push({
                  pathname: '/template',
                  search: '?query=abc',
                  state: { detail: response.data }
                })
                */
                //history.push({ pathname: genDiagnose });
                //console.log(history);
             }}
          >
            {inputValue === "" ? "Waiting..." : "Start Diagnose"}
          </IonButton>

        </IonCol>
      </IonRow>
    </IonGrid>
    </>
  );
};

export default ExploreContainer;
