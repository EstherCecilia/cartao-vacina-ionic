import {
  IonContent,
  IonPage,
  IonRow,
  IonImg,
  IonCol,
  IonText,
  useIonRouter,
} from "@ionic/react";
import "./Home.css";
import { useEffect } from "react";
import { clearUserStorage, getUserStorage } from "../../services/storage/login";

const Home: React.FC = () => {
  const router = useIonRouter();

  const onLogout = () => {
    clearUserStorage();
    router.push("/");
  };

  useEffect(() => {
    const user = getUserStorage();

    if (!user) {
      router.push("/");
    }
  }, []);

  return (
    <IonPage>
      <IonRow className="header-home">
        <IonImg src="src/assets/logos/main.svg" alt="Logo" />

        <IonText class="text-menu" onClick={onLogout}>
          Sair
        </IonText>
      </IonRow>
      <IonContent className="ion-content-home">
        {/* <IonText>Artigos</IonText>  */}
        <IonText class="text-menu">Menu</IonText>
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol className="card-home">
            <IonImg
              src="src/assets/logos/logo-vacinas.svg"
              alt="Logo"
              className="logo-click"
            />
            Vacinas
          </IonCol>
          <IonCol className="card-home">
            <IonImg
              src="src/assets/logos/logo-medicamentos.svg"
              alt="Logo"
              className="logo-click"
            />
            Medicamentos
          </IonCol>
        </IonRow>
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol className="card-home">
            <IonImg
              src="src/assets/logos/logo-sobre.svg"
              alt="Logo"
              className="logo-click"
            />
            Sobre nós
          </IonCol>
          <IonCol className="card-home">
            <IonImg
              src="src/assets/logos/logo-cartao.svg"
              alt="Logo"
              className="logo-click"
            />
            Cartão de vacina
          </IonCol>
        </IonRow>
        <IonImg
          src="src/assets/logos/medic.svg"
          alt="Logo"
          className="logo-home"
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
