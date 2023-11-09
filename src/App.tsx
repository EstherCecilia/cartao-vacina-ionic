import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import About from "./pages/about/about";
import Initial from "./pages/initial/Initial";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Menu from "./pages/menu/Menu";
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Vaccines from "./pages/vaccines/vaccines";
import VaccineCard from "./pages/vaccine-card/vaccine";

setupIonicReact();

const App: React.FC = () => (
  <IonApp className="app-page">
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Menu />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/vaccines">
          <Vaccines />
        </Route>

        <Route exact path="/vaccine-card">
          <VaccineCard />
        </Route>

        <Route exact path="/">
          <Initial />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
