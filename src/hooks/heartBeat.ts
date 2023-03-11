import { useState, useEffect, useRef } from 'react';
import { isPlatform, useIonAlert } from '@ionic/react';
import { isEmptyStatement } from 'typescript';

/*
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
*/

export function usePhotoGallery() {

    const [presentAlert] = useIonAlert();

    const startDiagnose = async (dtype:any) => {

      switch (dtype) {
        case "toddlers":
          return presentAlert({
            header: 'Alert',
            subHeader: 'Toddlers goes here',
            buttons: ['OK'],
        });
        case "preschoolers":
          return presentAlert({
            header: 'Alert',
            subHeader: 'Preschoolers',
            buttons: ['OK'],
        });
        case "children":
          return presentAlert({
            header: 'Alert',
            subHeader: 'Children',
            buttons: ['OK'],
        });
        case "adolescents":
          return presentAlert({
            header: 'Alert',
            subHeader: 'Adolescents',
            buttons: ['OK'],
        });
        case "young-adults":
          return presentAlert({
            header: 'Alert',
            subHeader: 'Young Adults',
            buttons: ['OK'],
        });
        case "adults":
          return presentAlert({
            header: 'Alert',
            subHeader: 'Adults.',
            buttons: ['OK'],
        });
        case "seniors":
          return presentAlert({
            header: 'Alert',
            subHeader: 'Seniors.',
            buttons: ['OK'],
        });
        default:
        return presentAlert({
          header: 'Alert',
          subHeader: 'Select age group to diagnose.',
          buttons: ['OK'],
        });
      }
      
      /*
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
      */
    };
  
    return {
      startDiagnose
    };

}