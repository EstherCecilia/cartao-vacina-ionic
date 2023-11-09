import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonSpinner,
  IonRow,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  useIonRouter,
} from "@ionic/react";
import { Header } from "../../components/Header";
import "./vaccine.css";
import { clearUserStorage, getUserStorage } from "../../services/storage/login";
import { getVaccinesTaken } from "../../services/api/vaccine";
import { VaccineProps } from "../../services/api/vaccine/types";

const VaccineCard: React.FC = () => {
  const router = useIonRouter();
  const [loading, setLoading] = useState(true);
  const [vaccineData, setVaccineData] = useState<VaccineProps[]>([]);

  const onLogout = () => {
    clearUserStorage();
    router.push("/");
  };

  const loadVaccines = async () => {
    const vaccines = await getVaccinesTaken();
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
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Vacinação</IonCardSubtitle>
              <IonCardTitle>Minhas Vacinas</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {loading && <IonSpinner name="circular"></IonSpinner>}
              <table>
                <thead>
                  <tr>
                    <th>Nome da Vacina</th>
                    <th>Local</th>
                    <th>Data</th>
                    <th>Dose</th>
                  </tr>
                </thead>
                <tbody>
                  {vaccineData?.map((vaccine: VaccineProps) => (
                    <tr>
                      <td>{vaccine.name}</td>
                      <td>{vaccine.location}</td>
                      <td>{vaccine.date}</td>
                      <td>{vaccine.dose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default VaccineCard;
