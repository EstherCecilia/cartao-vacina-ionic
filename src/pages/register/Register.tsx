import React, { useState } from "react";
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
  useIonRouter,
} from "@ionic/react";
import "./Register.css";
import { postRegister } from "../../services/api/register";

const Register: React.FC = () => {
  const router = useIonRouter();
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    password: "",
    date: "",
    phone: "",
    address: "",
  });

  const onChange = (value: string, key: string) => {
    setForm({ ...form, [key]: value });
  };

  const onSave = async () => {
    const valid = await postRegister(form);

    if (valid) {
      router.push("/");
    }
    console.log({ form });
  };

  return (
    <IonPage>
      <IonContent className="ion-content">
        <IonRow
          className="ion-align-items-center ion-justify-content-center"
          onClick={() => router.push("/")}
        >
          <IonCol size="auto" className="header-register">
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
              placeholder="Nome"
              required
              value={form.name}
              onIonChange={(e: any) => onChange(e.target.value, "name")}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              placeholder="CPF"
              required
              value={form.cpf}
              onIonChange={(e: any) => onChange(e.target.value, "cpf")}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              placeholder="Senha"
              required
              value={form.password}
              onIonChange={(e: any) => onChange(e.target.value, "password")}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              placeholder="Data de nascimento"
              required
              value={form.date}
              onIonChange={(e: any) => onChange(e.target.value, "date")}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              placeholder="Telefone"
              required
              value={form.phone}
              onIonChange={(e: any) => onChange(e.target.value, "phone")}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              placeholder="Endereço"
              required
              value={form.address}
              onIonChange={(e: any) => onChange(e.target.value, "address")}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonCol size="auto">
          <IonButton
            expand="full"
            shape="round"
            className="login-button"
            onClick={onSave}
          >
            Cadastrar
          </IonButton>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};

export default Register;
