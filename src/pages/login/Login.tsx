import React from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonImg,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonList,
} from "@ionic/react";
import "./Login.css";

const Login: React.FC = () => {
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
            Cartão de vacina digital
          </IonCol>
        </IonRow>

        <IonRow>
          <IonList>
            <IonItem>
              <IonInput placeholder="CPF"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="SENHA"></IonInput>
            </IonItem>
          </IonList>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonCol size="auto">
            <IonButton expand="full" shape="round" className="login-button">
              Entrar
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
