import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonRow,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonSpinner,
  useIonRouter,
} from "@ionic/react";
import { Header } from "../../components/Header";
import { clearUserStorage, getUserStorage } from "../../services/storage/login";
import "./vaccines.css";
import { getVaccines } from "../../services/api/vaccine";
import { VaccineProps } from "../../services/api/vaccine/types";

const Vaccines: React.FC = () => {
  const router = useIonRouter();
  const [loading, setLoading] = useState(true);
  const [vaccineData, setVaccineData] = useState<VaccineProps[]>([]);

  const onLogout = () => {
    clearUserStorage();
    router.push("/");
  };

  const loadVaccines = async () => {
    const vaccines = await getVaccines();
    setVaccineData(vaccines);
    setLoading(false);
  };

  useEffect(() => {
    const user = getUserStorage();

    if (!user) {
      router.push("/");
    }
    loadVaccines();
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className="menu-div">
          <IonRow className="ion-align-items-center ion-justify-content-center">
            <Header />
            <IonText class="text-menu" onClick={onLogout}>
              Sair
            </IonText>
          </IonRow>

          <IonRow className="ion-align-items-center ion-justify-content-center">
            {loading && <IonSpinner name="circular"></IonSpinner>}
            {vaccineData.map((vaccine, index) => (
              <IonCard key={index}>
                <IonCardHeader>
                  <IonCardSubtitle>{vaccine.dose}</IonCardSubtitle>
                  <IonCardTitle>{vaccine.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Data: {vaccine.date}</p>
                  <p>Local: {vaccine.location}</p>
                </IonCardContent>
              </IonCard>
            ))}
          </IonRow>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Vaccines;
