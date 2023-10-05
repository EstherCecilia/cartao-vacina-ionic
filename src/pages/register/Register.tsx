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
import "./Register.css";

const Register: React.FC = () => {
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
              <IonInput placeholder="Nome"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="CPF"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput placeholder="Senha"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput placeholder="Data de nascimento"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput placeholder="Telefone"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput placeholder="Endereço"></IonInput>
            </IonItem>
          </IonList>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonCol size="auto">
            <IonButton expand="full" shape="round" className="login-button">
              Cadastrar
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Register;
