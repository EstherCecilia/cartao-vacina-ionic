import { IonImg } from "@ionic/react"
import "./Header.css"

const Header: React.FC = () => {
  return (
    <>
        <div className="header-menu">
            <IonImg
              src="src/assets/logos/header-logo.svg"
              alt="header logo"
              className="header-logo"
            />
        </div>
    </>
  )
}

export { Header }
export default Header
