import React from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonImg,
  IonRow,
  IonCol,
  useIonRouter
} from "@ionic/react";
import "./Initial.css";

const Initial: React.FC = () => {
  const router = useIonRouter();
  const goToPage = (url:string) => {
    router.push(url, 'root', 'replace');
  };

  return (
    <IonPage>
      <IonContent className="ion-content">
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol size="auto">
            <IonImg
              src="src/assets/logos/vacina.svg"
              alt="Logo"
              className="centered-logo-initial"
            />
          </IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonCol size="auto">
            <IonButton expand="full" shape="round" className="login-button-initial" onClick={()=> goToPage('/login')}>
              Logar
            </IonButton>
          </IonCol>
          <IonCol size="auto">
            <IonButton expand="full" shape="round" className="register-button-initial"  onClick={()=> goToPage('/register')}>
              Cadastrar
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Initial;
