import {
  IonContent,
  IonPage,
  IonRow,
  IonText,
  useIonRouter,
} from "@ionic/react";
import { Header } from "../../components/Header";
import "./vaccines.css";
import { useEffect } from "react";
import { clearUserStorage, getUserStorage } from "../../services/storage/login";

const Vaccines: React.FC = () => {
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
    <>
      <IonPage>
        <IonContent>
          <div className="menu-div">
            <IonRow className="ion-align-items-center ion-justify-content-center">
              <Header />
              <IonText class="text-menu" onClick={onLogout}>
                Sair
              </IonText>
            </IonRow>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Vaccines;
