import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./About.css";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-content">
        <h3 className="ion-padding-top ion-padding-start">About</h3>

        <p className="ion-padding-start ion-padding-end">
          The Ionic Conference is a one-day conferenc featuring talks from the
          Ionic team. It is focused on Ionic applications being built with Ionic
          Framework. This includes migrating apps to the latest version of the
          framework, Angular concepts, Webpack, Sass, and many other
          technologies used in Ionic 2. Tickets are completely sold out, and
          we’re expecting more than 1000 developers – making this the largest
          Ionic conference ever!
        </p>
      </IonContent>
    </IonPage>
  );
};

export default About;
