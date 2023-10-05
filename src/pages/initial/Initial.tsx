import React from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonImg,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Initial.css";

const Initial: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-content">
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol size="auto">
            <IonImg
              src="src/assets/logos/vacina.svg"
              alt="Logo"
              className="centered-logo"
            />
          </IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonCol size="auto">
            <IonButton expand="full" shape="round" className="login-button">
              Logar
            </IonButton>
          </IonCol>
          <IonCol size="auto">
            <IonButton expand="full" shape="round" className="register-button">
              Cadastrar
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Initial;
