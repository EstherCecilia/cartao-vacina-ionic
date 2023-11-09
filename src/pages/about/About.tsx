import React from "react";
import { IonContent, IonPage, useIonRouter, IonButton } from "@ionic/react";
import "./About.css";

const About: React.FC = () => {
  const router = useIonRouter();
  return (
    <IonPage>
      <IonContent className="ion-content">
        <h3 className="ion-padding-top ion-padding-start">
          Sobre o Aplicativo
        </h3>

        <p className="ion-padding-start ion-padding-end">
          Bem-vindo ao aplicativo de Cartão de Vacina Virtual! Este aplicativo
          foi criado por Thiago Henrique e Esther Cecília com o objetivo de
          proporcionar uma maneira fácil e conveniente para as pessoas
          acompanharem suas vacinações.
        </p>

        <p className="ion-padding-start ion-padding-end">
          Com nosso aplicativo, você pode visualizar suas vacinas registradas,
          incluindo o nome da vacina, o local onde foi administrada, a data e a
          dose correspondente. Mantenha seu histórico de vacinação sempre à mão
          e não perca datas importantes para a sua saúde.
        </p>

        <p className="ion-padding-start ion-padding-end">
          Agradecemos por escolher nosso aplicativo de Cartão de Vacina Virtual.
          Se tiver alguma dúvida ou feedback, não hesite em entrar em contato
          conosco. Sua saúde é nossa prioridade!
        </p>

        <IonButton className="home-button" onClick={() => router.push("/home")}>
          Voltar para o mneu principal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default About;
