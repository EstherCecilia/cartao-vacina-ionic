import React, { useEffect, useState } from "react";
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
  IonSpinner,
  useIonRouter,
} from "@ionic/react";
import "./Login.css";
import { postLogin } from "../../services/api/login";
import { validarCPF } from "../../utils/valid-cpf";
import { getUserStorage } from "../../services/storage/login";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    if (!validarCPF(document) || password.length <= 3) return;
    setLoading(true);

    const user = await postLogin(document, password);

    if (user) {
      router.push("/home");
    }

    setLoading(false);
  };

  useEffect(() => {
    const user = getUserStorage();

    if (user) {
      router.push("/home");
    }
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-content ion-justify-content-center">
        <IonRow
          className="ion-align-items-center ion-justify-content-center"
          onClick={() => router.push("/")}
        >
          <IonCol size="auto" className="header-login">
            <IonImg
              src="src/assets/logos/vacina.svg"
              alt="Logo"
              className="centered-logo"
            />
            Cartão de vacina digital
          </IonCol>
        </IonRow>

        <IonList>
          <IonItem>
            <IonInput
              placeholder="CPF"
              required
              value={document}
              onIonChange={(e: any) => setDocument(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              placeholder="SENHA"
              required
              type="password"
              value={password}
              onIonChange={(e: any) => setPassword(e.target.value)}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonCol size="auto">
          <IonButton
            expand="full"
            shape="round"
            className="login-button"
            onClick={onLogin}
            // disabled={loading}
          >
            {loading ? <IonSpinner name="circular"></IonSpinner> : "Entrar"}
          </IonButton>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};

export default Login;
