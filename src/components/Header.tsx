import { IonImg, useIonRouter } from "@ionic/react";
import "./Header.css";

const Header: React.FC = () => {
  const router = useIonRouter();
  return (
    <>
      <div className="header-menu">
        <IonImg
          src="src/assets/logos/header-logo.svg"
          alt="header logo"
          className="header-logo"
          onClick={() => router.push("/home")}
        />
      </div>
    </>
  );
};

export { Header };
export default Header;
