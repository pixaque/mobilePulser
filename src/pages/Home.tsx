import {useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterOutlet } from '@ionic/react';
import {Route} from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import {useHistory, useLocation} from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  let location = useLocation();
  //console.log(location);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Simple Diagnoses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Simple Diagnoses { location.pathname }</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='margin'>
          <ExploreContainer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
