import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, useIonRouter } from "@ionic/react"
import { Header } from "../../components/Header";
import "./Menu.css"
import { Articles } from "./components/Articles";
import MenuItem from "./components/MenuItem";
import { useEffect } from "react";
import { clearUserStorage, getUserStorage } from "../../services/storage/login";

const Menu: React.FC = () => {
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
            <IonRow className="ion-align-items-center ion-justify-content-center" >
              <Header />
              <IonText class="text-menu" onClick={onLogout}>
                Sair
              </IonText>
            </IonRow>

            <IonRow className="ion-align-items-center ion-justify-content-left" >
              <Articles />
            </IonRow>

            <IonRow className="menu-items-section" >
              <div className="menu-items-section-main">
                <p>Menu</p>

                <div className="linguini">
                  <div>
                    <MenuItem
                      srcImg="src/assets/menu/menu-vacinne.svg"
                      text="Vacinas"
                    />
                  </div>

                  <div>
                    <MenuItem
                      srcImg="src/assets/menu/medicines.svg"
                      text="Medicamentos"
                    />
                  </div>
                </div>

                <div className="linguini">
                  <div>
                    <MenuItem
                      srcImg="src/assets/menu/about-us.svg"
                      text="Sobre nós (dúvidas)"
                    />
                  </div>

                  <div>
                    <MenuItem
                      srcImg="src/assets/menu/vacinne-card.svg"
                      text="Cartão de vacina"
                    />
                  </div>
                </div>
              </div>
            </IonRow>
          </div>
        </IonContent>
      </IonPage>
    </>
  )
}

export { Menu }
export default Menu
